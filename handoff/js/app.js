/**
 * NativoPass — Vanilla App Interactions
 * Zero external dependencies. Works in all modern browsers.
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. HERO CAROUSEL (SCOPED STRICTLY TO ORIGINAL FIGMA BASELINE)
     ========================================================================== */
  function initHeroCarousel() {
    const originalHero = document.querySelector('.hero--original');
    if (!originalHero) return;

    const heroMedia = originalHero.querySelector('.hero-media');
    const slides = originalHero.querySelectorAll('.hero-slide');
    const titleEl = originalHero.querySelector('.hero-title');
    const progressEl = originalHero.querySelector('.hero-progress');

    if (!slides.length || slides.length < 2) return;

    let currentIndex = 0;
    let timer = null;

    const titles = [
      'TU ESTILO DE VIDA, <strong> PREMIADO.</strong>',
      '<strong>ESCANEA EL QR EN NUESTROS COMERCIOS</strong><span> AFILIADOS Y APROVECHA TUS DESCUENTOS.</span>'
    ];

    function showSlide(index) {
      currentIndex = index % slides.length;
      slides.forEach((slide, i) => {
        const isActive = i === currentIndex;
        slide.classList.toggle('hero-slide--active', isActive);
        slide.setAttribute('aria-hidden', !isActive);
      });

      if (titleEl && titles[currentIndex]) {
        titleEl.innerHTML = titles[currentIndex];
      }

      // Restart progress bar animation
      if (progressEl) {
        progressEl.innerHTML = '<span></span>';
      }
    }

    function advance() {
      showSlide(currentIndex + 1);
    }

    if (heroMedia) {
      heroMedia.addEventListener('click', (e) => {
        if (e.target.closest('.location-picker')) return;
        advance();
        resetTimer();
      });
    }

    function startTimer() {
      if (!prefersReducedMotion) {
        timer = setInterval(advance, 6500);
      }
    }

    function resetTimer() {
      if (timer) clearInterval(timer);
      startTimer();
    }

    startTimer();
  }

  /* ==========================================================================
     2. LOCATION PICKER
     ========================================================================== */
  function initLocationPicker() {
    const trigger = document.querySelector('.location-trigger');
    const menu = document.querySelector('.location-menu');
    const label = trigger ? trigger.querySelector('span') : null;

    if (!trigger || !menu) return;

    function toggleMenu(forceState) {
      const open = typeof forceState === 'boolean' ? forceState : !trigger.classList.contains('location-trigger--open');
      trigger.classList.toggle('location-trigger--open', open);
      trigger.setAttribute('aria-expanded', open);
      menu.style.display = open ? 'block' : 'none';
    }

    // Default to closed
    menu.style.display = 'none';

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    menu.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const nextLoc = btn.querySelector('span')?.textContent?.trim();
        if (nextLoc && label) {
          label.textContent = nextLoc;
        }
        toggleMenu(false);
      });
    });

    document.addEventListener('click', (e) => {
      if (!trigger.contains(e.target) && !menu.contains(e.target)) {
        toggleMenu(false);
      }
    });
  }

  /* ==========================================================================
     3. CATEGORY SELECTION & SCROLL REVEAL
     ========================================================================== */
  function initCategories() {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const isSelected = card.classList.contains('category-card--selected');
        cards.forEach((c) => {
          c.classList.remove('category-card--selected');
          c.setAttribute('aria-pressed', 'false');
        });
        if (!isSelected) {
          card.classList.add('category-card--selected');
          card.setAttribute('aria-pressed', 'true');
        }
      });
    });

    // Scroll reveal observer
    const revealSection = document.querySelector('.category-section--scroll-reveal');
    if (revealSection && !prefersReducedMotion && 'IntersectionObserver' in window) {
      const scrollRoot = revealSection.closest('.app-shell');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            revealSection.classList.add('category-section--visible');
            observer.unobserve(entry.target);
          }
        },
        { root: scrollRoot || null, rootMargin: '0px 0px -18% 0px', threshold: 0.2 }
      );
      observer.observe(revealSection);
    } else if (revealSection) {
      revealSection.classList.add('category-section--visible');
    }
  }

  /* ==========================================================================
     4. SNAKE REWARDS & VIDEO AUTOPLAY
     ========================================================================== */
  function initSnakeSection() {
    // Scroll reveal
    const snakeCard = document.querySelector('.snake-card--scroll-reveal');
    const snakeSection = document.querySelector('.snake-section--iteration-one');

    if (snakeCard && snakeSection && !prefersReducedMotion && 'IntersectionObserver' in window) {
      const scrollRoot = snakeSection.closest('.app-shell');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            snakeCard.classList.add('snake-card--visible');
            observer.unobserve(entry.target);
          }
        },
        { root: scrollRoot || null, rootMargin: '0px 0px -12% 0px', threshold: 0.18 }
      );
      observer.observe(snakeSection);
    } else if (snakeCard) {
      snakeCard.classList.add('snake-card--visible');
    }

    // Play/Ready button toggles
    const origBtn = document.querySelector('.snake-button--original');
    if (origBtn) {
      origBtn.addEventListener('click', () => {
        origBtn.innerHTML = 'JUEGO LISTO';
      });
    }

    const neonBtn = document.querySelector('.snake-button--iteration-one');
    if (neonBtn) {
      neonBtn.addEventListener('click', () => {
        const span = neonBtn.querySelector('span');
        if (span) span.textContent = '¡A JUGAR!';
      });
    }
  }

  /* ==========================================================================
     5. BOTTOM NAVIGATION
     ========================================================================== */
  function initBottomNav() {
    const navButtons = document.querySelectorAll('.bottom-navigation button');
    navButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        navButtons.forEach((b) => {
          b.classList.remove('is-active');
          b.removeAttribute('aria-current');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-current', 'page');
      });
    });
  }

  /* ==========================================================================
     6. MEMBERSHIP CTA SCROLL & RANDOM POINTS
     ========================================================================== */
  function initMembershipCta() {
    const rankingBtn = document.querySelector('.membership-cta--member button');
    if (rankingBtn) {
      rankingBtn.addEventListener('click', () => {
        const target = document.querySelector('.snake-section');
        if (target) {
          target.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'center'
          });
        }
      });
    }

    // Display randomized points label (600 - 2200)
    const pointsEl = document.querySelector('.membership-points b');
    if (pointsEl && !pointsEl.textContent.trim()) {
      const pts = Math.floor(Math.random() * 1601) + 600;
      pointsEl.textContent = new Intl.NumberFormat('en-US').format(pts);
    }
  }

  /* ==========================================================================
     7. MEMBERSHIP PAYMENT FORM SIMULATION
     ========================================================================== */
  function initPaymentForm() {
    const form = document.querySelector('.membership-renewal-form, .membership-payment-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const fieldset = form.querySelector('fieldset');

      if (!submitBtn || submitBtn.disabled) return;

      submitBtn.disabled = true;
      if (fieldset) fieldset.disabled = true;

      const originalHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Procesando…';

      setTimeout(() => {
        alert('¡Pago completado con éxito! Tu membresía NativoPass está activa.');
        submitBtn.innerHTML = '¡ACTIVADO!';
        if (window.onPaymentSuccess) {
          window.onPaymentSuccess();
        }
      }, 650);
    });
  }

  /* Initialize all components when DOM is ready */
  document.addEventListener('DOMContentLoaded', () => {
    initHeroCarousel();
    initLocationPicker();
    initCategories();
    initSnakeSection();
    initBottomNav();
    initMembershipCta();
    initPaymentForm();
  });
})();
