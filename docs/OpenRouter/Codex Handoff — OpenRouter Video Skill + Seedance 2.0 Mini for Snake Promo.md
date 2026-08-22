# Codex Handoff — OpenRouter Video Skill + Seedance 2.0 Mini

## Goal

Generate a **vertical 9:16 promo video** for the Nativopass Snake section using:

- **OpenRouter Video Skill**
- **OpenRouter API key already configured in Windows**
- **Model:** `bytedance/seedance-2.0-mini`

The animation should produce a subtle **pixel-retro idle promo loop** for the Snake mascot.

---

## Current Status

The Windows environment variable is already configured:

- Variable name: `OPENROUTER_API_KEY`
- Scope: `User`
- Verified in PowerShell successfully

This means Codex should be able to use the OpenRouter Video Skill without needing the API key hardcoded in the project.

---

## Project Asset Paths

Use these local assets from the project:

```text
D:.
├───icons
│   ├───category-section
│   │       bienestar-icon.svg
│   │       convenienciai-icon.svg
│   │       estetica-icon.svg
│   │       gastronomia-icon.svg
│   │       hogar-icon.svg
│   │       turismo-icon.svg
│   │
│   ├───nav-bar
│   │       home.svg
│   │       menu.svg
│   │       qr-codes.svg
│   │
│   └───snake-game-section
│           nativo-reward-icon.svg
│
├───images
│   │   iPhone 16 Pro Black Titanium_thumb.png
│   │   nativo-pass-hero-slide1-new.png
│   │   nativo-pass-hero-slide1.png
│   │   nativo-pass-hero-slide2.png
│   │
│   └───snake-game
│       │   snake-background.png
│       │   snake-complete-mascot.png
│       │
│       └───no-use-source
│               nativopass-snake-game-1.af
│               nativopass-snake-game-1.png
│               snake-complete-mascot-left.png
│
├───logos
│       Nativopass-logo.svg
│       nativopass-n-icon.svg
│
├───screenshots
│       category-picker-section.png
│       hero-section-dropdown-picker.png
│       hero-section-slide1.png
│       hero-section-slide2.png
│       nav-bar-bottom.png
│       snake-game-section.png
│
└───video
        snake-animation.mp4
```

### Use these files

- `images/snake-game/snake-background.png`
- `images/snake-game/snake-complete-mascot.png`

### Ignore these

- `images/snake-game/no-use-source/`
- `video/snake-animation.mp4`

---

## OpenRouter Video Skill

Install the OpenRouter video skill if it has not already been installed:

```bash
gh skill install OpenRouterTeam/skills openrouter-video --scope user
```

If user scope is not desired, install it only for the current project:

```bash
gh skill install OpenRouterTeam/skills openrouter-video
```

---

## Selected OpenRouter Model

Use this exact model:

```text
bytedance/seedance-2.0-mini
```

This should be passed as the **video generation model** inside the OpenRouter video skill request.

---

## Important Instruction for Codex

Codex must **not guess** model capabilities.

Before generation, Codex should:

1. Query the OpenRouter video models/capabilities endpoint.
2. Verify what `bytedance/seedance-2.0-mini` supports.
3. Confirm:
   - image-to-video support
   - supported duration
   - supported resolution
   - supported aspect ratio
   - whether 720p is allowed
4. Prefer:
   - **image-to-video**
   - **9:16**
   - **5 seconds**
   - **720p** if supported

---

## Recommended Output

Save the generated result to something like:

```text
video/snake-promo-seedance.mp4
```

If that folder is not appropriate for generated output, use a safe generated-output path in the project.

---

# Prompt Option 1 — No Design Assets Linked

Use this when you want Codex/OpenRouter to generate the scene conceptually without local asset input.

## Prompt

```text
Use the OpenRouter video skill.

Use model:
bytedance/seedance-2.0-mini

Before submitting, verify the supported capabilities for this model.

Create a vertical 9:16 image-to-video or text-to-video promo clip for a Snake game section in a mobile app.

Create a pixel-retro arcade scene with:
- a dark retro game arena
- subtle pixel grid
- glowing purple and magenta arcade borders
- small cyan and purple pixel sparkles
- tropical pixel-art leaves framing the outer edges
- a mostly open center gameplay area

Place a friendly green pixel-art snake mascot in the lower-middle area.
The snake should have:
- coiled body
- bright green scales
- pale yellow-green belly
- large expressive eye
- playful arcade-game appearance
- friendly, inviting mood

Animate the snake with a subtle idle loop:
- gentle breathing
- very small head sway
- one natural blink
- slight eye glance
- one quick playful tongue flick
- subtle tail-tip motion
- keep the coiled body mostly stationary

Animate the environment very subtly:
- faint shimmer in the neon purple border
- occasional tiny pixel sparkles
- minimal movement in the tropical leaves
- keep the central game area calm and readable

Style requirements:
- classic 16-bit / retro arcade pixel-art look
- crisp pixel edges
- chunky shapes
- strong dark outlines
- bright saturated greens
- purple, magenta, cyan, and teal accents
- polished modern-retro mobile-game promo feel

Constraints:
- static camera
- no zoom
- no pan
- no rotation
- do not uncurl the snake
- do not significantly deform the body
- do not add extra characters
- do not add text
- do not add UI labels
- do not add realistic textures
- do not smooth away the pixel-art appearance
- avoid excessive particles
- avoid exaggerated bouncing

Goal:
Create a seamless 5-second loop that feels like a polished pixel-retro Snake promo screen for a mobile app.

Prefer 720p if supported.
Save the result to:
video/snake-promo-seedance.mp4
```

---

# Prompt Option 2 — With Local Design Assets

Use this when you want Codex/OpenRouter to generate the animation using the actual local project assets.

## Prompt

```text
Use the OpenRouter video skill.

Use model:
bytedance/seedance-2.0-mini

Before submitting, verify the supported capabilities for this model.

Use these local project assets as the visual source:

Background:
images/snake-game/snake-background.png

Mascot:
images/snake-game/snake-complete-mascot.png

Ignore:
images/snake-game/no-use-source/
video/snake-animation.mp4

Create a vertical 9:16 image-to-video promo clip.

Compose the snake mascot over the provided snake background so the mascot sits in the lower-middle area as the main focal point.
Preserve the original pixel-art style, colors, proportions, silhouette, and overall composition.

Animate the provided snake mascot with a subtle pixel-retro idle animation:
- gentle breathing
- very small head sway
- one natural blink
- slight eye glance
- one quick playful tongue flick
- subtle tail-tip motion
- keep the body coils mostly stationary

Animate the provided background only very subtly:
- faint shimmer in the neon/purple arcade frame
- occasional tiny pixel sparkles
- very minimal leaf movement
- keep the center game area calm and readable

Preserve:
- crisp pixel edges
- pixel-retro arcade style
- green snake with pale yellow belly
- dark game field
- purple/magenta border accents
- tropical framing leaves

Constraints:
- static camera
- no zoom
- no pan
- no rotation
- do not morph or redesign the snake
- do not uncurl or significantly deform the mascot
- do not change the pixel-art look
- do not add text
- do not add buttons
- do not add UI overlays
- do not add realistic textures
- do not add extra characters
- avoid excessive particles
- avoid exaggerated motion

Goal:
Generate a polished 5-second seamless looping mobile promo animation for the Nativopass Snake section.

Prefer 720p if supported.
Use 9:16 if supported.
Save the output to:
video/snake-promo-seedance.mp4
```

---

## Suggested Codex Task Prompt

If you want a cleaner operational handoff to Codex, use this:

```text
Install or use the openrouter-video skill.

Use the model:
bytedance/seedance-2.0-mini

Check model capabilities first and confirm support for:
- image-to-video
- 9:16
- 5 seconds
- 720p

Then generate the video using:
images/snake-game/snake-background.png
images/snake-game/snake-complete-mascot.png

Create a 5-second seamless looping pixel-retro Snake promo animation.
Preserve the provided snake mascot and background design.
Animate only subtle idle movement:
- breathing
- head sway
- blink
- eye glance
- tongue flick
- small tail motion
- minimal border shimmer
- minimal leaf motion

Static camera.
No zoom.
No pan.
No morphing.
No extra characters.
No text.

Save the result to:
video/snake-promo-seedance.mp4
```

---

## Practical Recommendation

Use **Prompt Option 2** first.

Why:

- you already have the correct background
- you already have the mascot
- it gives the video model less room to improvise
- it reduces the chance of style drift
- it improves consistency with the app design

Use **Prompt Option 1** only if you want a looser concept-driven generation.

---

## Final Notes

- Keep the generation short at first: **5 seconds**
- Prefer **720p** if available, otherwise accept the best supported option
- Check if the model supports **loop-friendly output**
- If the first result is too strong or too floaty, reduce motion in a second pass
- If the model distorts the mascot too much, consider first compositing the mascot and background into one single source image and then use that one image as the image-to-video starting frame

---

## Best First Attempt

Best first attempt:

- Model: `bytedance/seedance-2.0-mini`
- Input: local assets
- Duration: **5s**
- Aspect ratio: **9:16**
- Resolution: **720p if supported**
- Output: `video/snake-promo-seedance.mp4`
- Prompt: **Option 2**