/**
 * NativoPass — Prototype Workbench Controller
 * Powers iteration switching, member/guest toggle, and screen transitions in index.html
 */

(function () {
  'use strict';

  const iterations = ['original', 'iteration-1', 'iteration-2', 'iteration-3', 'iteration-4'];

  function getQueryParam(key, defaultValue) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key) || defaultValue;
  }

  function setQueryParam(key, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.replaceState({}, '', url);
  }

  let currentIteration = getQueryParam('iteration', 'original');
  if (!iterations.includes(currentIteration)) currentIteration = 'original';

  let currentMembershipState = 'guest'; // 'guest' | 'member'
  let currentScreen = 'home'; // 'home' | 'membership-payment'

  function updateWorkbench() {
    // 1. Update Iteration Tabs
    document.querySelectorAll('.iteration-tabs button').forEach((btn) => {
      const iter = btn.getAttribute('data-iteration');
      const isActive = iter === currentIteration;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });

    // 2. Update CTA State Controls Visibility & State
    const stateGroup = document.querySelector('.iteration-state-controls');
    if (stateGroup) {
      stateGroup.style.display = currentIteration === 'original' ? 'none' : 'block';
    }

    document.querySelectorAll('.iteration-state-tabs button').forEach((btn) => {
      const state = btn.getAttribute('data-state');
      const isActive = state === currentMembershipState;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });

    // 3. Render or Toggle Screen Content
    const homeView = document.getElementById('view-home');
    const paymentView = document.getElementById('view-payment');

    if (currentScreen === 'membership-payment') {
      if (homeView) homeView.style.display = 'none';
      if (paymentView) paymentView.style.display = 'block';
      return;
    }

    if (paymentView) paymentView.style.display = 'none';
    if (homeView) homeView.style.display = 'block';

    // 4. Update Shell Classes for Active Iteration
    const appShell = document.querySelector('.app-shell');
    if (appShell) {
      appShell.className = `app-shell app-shell--${currentIteration}`;
    }

    // 5. Update Hero according to Iteration
    const originalHero = document.querySelector('.hero--original');
    const iterationOneHero = document.querySelector('.hero--iteration-one');

    if (currentIteration === 'original') {
      if (originalHero) originalHero.style.display = 'block';
      if (iterationOneHero) iterationOneHero.style.display = 'none';
    } else {
      if (originalHero) originalHero.style.display = 'none';
      if (iterationOneHero) {
        iterationOneHero.style.display = 'block';
        const iterSlide = iterationOneHero.querySelector('.hero-slide');
        if (iterSlide) iterSlide.classList.add('hero-slide--active');
      }
    }

    // 6. Update Membership CTA within Hero
    const guestCta = document.querySelector('.membership-cta--guest');
    const memberCta = document.querySelector('.membership-cta--member');
    if (guestCta && memberCta) {
      if (currentMembershipState === 'member') {
        guestCta.style.display = 'none';
        memberCta.style.display = 'grid';
      } else {
        guestCta.style.display = 'grid';
        memberCta.style.display = 'none';
      }
    }

    // 7. Update Category Grid Count (Iteration 1+ uses 4 categories, Original uses 6)
    const categoryGrid = document.querySelector('.category-grid');
    if (categoryGrid) {
      const cards = categoryGrid.querySelectorAll('.category-card');
      const fourCategoryIds = ['turismo', 'gastronomia', 'bienestar', 'hogar'];
      cards.forEach((card) => {
        const id = card.getAttribute('data-category-id');
        if (currentIteration === 'original') {
          card.style.display = '';
        } else {
          card.style.display = fourCategoryIds.includes(id) ? '' : 'none';
        }
      });
    }

    // 8. Update Snake Rewards Variant & Video
    const origSnake = document.querySelector('.snake-section--original');
    const neonSnake = document.querySelector('.snake-section--iteration-one');
    const neonVideo = document.querySelector('.snake-video--iteration-one');

    if (currentIteration === 'original') {
      if (origSnake) origSnake.style.display = 'block';
      if (neonSnake) neonSnake.style.display = 'none';
    } else {
      if (origSnake) origSnake.style.display = 'none';
      if (neonSnake) neonSnake.style.display = 'block';

      // Pick video source
      let videoSrc = 'assets/video/snake-promo-seedance-cartoon.mp4';
      if (currentIteration === 'iteration-2') {
        videoSrc = 'assets/video/snake-promo-seedance-iteration-2.mp4';
      } else if (currentIteration === 'iteration-3') {
        videoSrc = 'assets/video/snake-promo-seedance-iteration-3.mp4';
      } else if (currentIteration === 'iteration-4') {
        videoSrc = 'assets/video/snake-promo-seedance-iteration-4.mp4';
      }

      if (neonVideo && neonVideo.getAttribute('src') !== videoSrc) {
        neonVideo.src = videoSrc;
        neonVideo.load();
        neonVideo.play().catch(() => {});
      }
    }
  }

  // Global hooks for interaction events
  window.navigateToPayment = function () {
    currentScreen = 'membership-payment';
    updateWorkbench();
  };

  window.navigateToHome = function () {
    currentScreen = 'home';
    updateWorkbench();
  };

  window.onPaymentSuccess = function () {
    currentMembershipState = 'member';
    currentScreen = 'home';
    updateWorkbench();
  };

  document.addEventListener('DOMContentLoaded', () => {
    // Attach iteration tab clicks
    document.querySelectorAll('.iteration-tabs button').forEach((btn) => {
      btn.addEventListener('click', () => {
        const iter = btn.getAttribute('data-iteration');
        if (iter) {
          currentIteration = iter;
          currentScreen = 'home';
          setQueryParam('iteration', iter);
          updateWorkbench();
        }
      });
    });

    // Attach membership state tab clicks
    document.querySelectorAll('.iteration-state-tabs button').forEach((btn) => {
      btn.addEventListener('click', () => {
        const state = btn.getAttribute('data-state');
        if (state) {
          currentMembershipState = state;
          currentScreen = 'home';
          updateWorkbench();
        }
      });
    });

    // Join button clicks in Hero CTA
    document.querySelectorAll('.membership-cta-join-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.navigateToPayment();
      });
    });

    // Back button in Payment Header
    document.querySelectorAll('.payment-back-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.navigateToHome();
      });
    });

    // Initial render
    updateWorkbench();
  });
})();
