# 🎂 Personal Interactive Birthday Website

A personal, handmade interactive birthday website created specifically for your best female friend.

Designed with a warm, dreamy, and nostalgic aesthetic:
- **Palette:** Warm cream, soft blush, muted lavender, subtle peach, deep night navy, and soft white.
- **Vibe:** Scrapbook Polaroid photos, handwritten sticky notes, wax-sealed envelope, interactive birthday cake candles, and friendship timeline.
- **Tech Stack:** 100% Pure Frontend — **HTML5, CSS3, Vanilla JavaScript**. No build tools, no Node.js, no React, no dependencies, no server needed.

---

## 🚀 Quick Start

1. Simply double-click **`index.html`** to open the website in any web browser (Chrome, Safari, Edge, Firefox).
2. Tap the **🎁 Open Your Birthday Surprise** box on the opening screen to begin the journey!

---

## 🎨 Easy Personalization Guide

All personal names, memories, inside jokes, quiz questions, and the letter are neatly organized at the very top of **`script.js`** inside the `birthdayConfig` object.

### 1. Change Names & Hero Note
Open `script.js` and edit:
```javascript
const birthdayConfig = {
  herName: "Sarah",                 // Her name or nickname
  yourName: "Alex",                 // Your name or nickname
  heroCaption: "The star of the day ⭐",
  heroNote: "yes, I actually made this for you :)",
  ...
```

### 2. Add Your Photos
Place your photo files into the `assets/images/` folder with these filenames:

| Filename | Where it appears |
| :--- | :--- |
| `hero.jpg` | Main welcome screen photograph with washi tape |
| `memory-01.jpg` to `memory-08.jpg` | The 8 Polaroid scrapbook memory cards |
| `final-01.jpg` to `final-05.jpg` | Final cinematic photo montage slideshow |
| `final-photo.jpg` | Final starry emotional ending screen portrait |

> 💡 **Note:** If any image is not added yet, the website automatically displays an elegant, handcrafted placeholder card stating *"Replace with [filename]"*, so the layout remains beautiful.

### 3. Add Background Music (Optional)
Drop an MP3 file into:
```
assets/audio/birthday-song.mp3
```
- The music automatically starts when the user clicks **"Open Your Birthday Surprise"** (complying with modern browser autoplay policies).
- A subtle floating **🔊 / 🔇** toggle button is available in the top-right corner.
- *Bonus:* If no MP3 file is present, a cozy built-in music-box chime synthesizer will gently play a soft acoustic rendition of the birthday melody via the Web Audio API!

### 4. Add Final Memory Video (Optional)
Drop an MP4 video file into:
```
assets/videos/final-memory.mp4
```
- If the video file is present, the final surprise plays the video.
- If no video is present, it automatically and seamlessly falls back to the 5-photo slideshow montage (`final-01.jpg` to `final-05.jpg`).

### 5. Customize the Best Friend Quiz & "Things That Are So YOU"
Inside `script.js`, you can modify:
- **`traits`**: Customize the 6 colorful sticky notes and tickets with her real superpower, favorite food, signature catchphrase, and inside jokes.
- **`quiz`**: Customize the 5 questions, 4 options each, correct answers, and humorous reaction messages.
- **`letter`**: Easily edit the emotional letter text and sign-off.

---

## 🌟 The 10-Step Story Experience

1. **Secret Opening:** Deep night sky with twinkling stars, handcrafted 3D gift box with ribbon, and magical lid opening animation with confetti burst.
2. **Birthday Welcome:** Warm greeting, physical resting hero photo with washi tape, and handwritten note.
3. **Our Little Memories:** Casually tilted Polaroid photo scrapbook with interactive lightbox view on click.
4. **Things I Remember:** Vertical hand-drawn timeline charting the milestones of your friendship.
5. **Things That Are So YOU:** Playful eclectic cards (sticky notes, torn tickets, kraft tags, lined paper) with funny inside jokes.
6. **Best Friend Quiz:** 5 interactive questions with instant witty feedback and unlocked Best Friend trophy.
7. **Hidden Letter:** Vintage wax-sealed envelope that unfolds into a handwritten heartfelt letter.
8. **Interactive Birthday Cake:** Custom frosted cake with glowing candles you can tap/click to blow out, triggering ambient light dimming, smoke, and wish sent celebration!
9. **Final Surprise:** Cinematic gift reveal transitioning into a video player or crossfading photo slideshow.
10. **Final Emotional Screen:** Calm starry night ending with a personal quote and warm signoff.

---

## 📱 Responsiveness & Accessibility
- Tested and optimized for mobile screens (360px, 390px, 430px), tablets (768px, 1024px), and desktop displays (1440px+).
- Full touch support, zero horizontal overflow, visible focus states, and reduced-motion support.
