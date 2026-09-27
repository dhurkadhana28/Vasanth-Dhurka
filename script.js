/**
 * ==========================================================================
 * ROMANTIC BIRTHDAY WEBSITE CONFIGURATION & LOGIC
 * Deep Velvet Theme for Lover — Ponnus ❤️ & Dhurka ❤️
 * Creator: Vasanth S 💖
 * ==========================================================================
 */

const birthdayConfig = {
  // 1. Basic Information
  herName: "Ponnus ❤️",                 // Front / General Romantic Name
  herSecretName: "Dhurka ❤️",           // Deep Emotional Name for Letter & Special Spots
  yourName: "Vasanth S",                // Creator / Sender Name
  heroCaption: "The most gorgeous girl in my world ✨",
  heroNote: "every heartbeat of this is for you :)",

  // 2. Father's Birthday Wish & Blessings
  fatherWish: {
    image: "assets/images/father-wish.jpg",
    video: "assets/videos/father-wish.mp4",
    caption: "Appa's Priceless Gem 💎",
    letterText: "My dearest daughter, from the day you were born to this very moment, you have filled our lives with endless light, laughter, and pride. May God bless you with good health, immense peace, boundless success, and every joy your heart desires. Always keep smiling, stay confident, and know that Appa is always praying for your happiness. Happy Birthday, my darling child.",
    signature: "— With all of Appa's Love & Blessings ❤️"
  },

  // 3. Scrapbook Memories (8 Romantic Photos)
  memories: [
    {
      id: 1,
      image: "assets/images/memory-01.jpg",
      number: "Moment #01",
      title: "The Day Everything Changed",
      caption: "That first conversation where hours felt like seconds.",
      annotation: "I knew you were special right from that moment 💖"
    },
    {
      id: 2,
      image: "assets/images/memory-02.jpg",
      number: "Moment #02",
      title: "Spontaneous Adventures",
      caption: "Late night drives, singing together, and losing track of time.",
      annotation: "My favorite passenger and travel partner forever 🚗"
    },
    {
      id: 3,
      image: "assets/images/memory-03.jpg",
      number: "Moment #03",
      title: "Uncontrollable Laughter",
      caption: "Laughing at inside jokes that make zero sense to anyone else.",
      annotation: "Your laugh is literally my favorite sound in the world 🎶"
    },
    {
      id: 4,
      image: "assets/images/memory-04.jpg",
      number: "Moment #04",
      title: "Sweet Food Dates",
      caption: "Stealing food from each other's plates and talking about life.",
      annotation: "Food tastes a thousand times better with you 🍕"
    },
    {
      id: 5,
      image: "assets/images/memory-05.jpg",
      number: "Moment #05",
      title: "Sunset & Quiet Moments",
      caption: "Watching the golden sky change colors with my hand in yours.",
      annotation: "Time stands completely still when I'm beside you 🌅"
    },
    {
      id: 6,
      image: "assets/images/memory-06.jpg",
      number: "Moment #06",
      title: "Deep 3 AM Heart Talks",
      caption: "Sharing our deepest dreams, fears, and future hopes together.",
      annotation: "You understand my soul like nobody else ever could 💫"
    },
    {
      id: 7,
      image: "assets/images/memory-07.jpg",
      number: "Moment #07",
      title: "Your Adorable Cuteness",
      caption: "When you get all excited and animated talking about what you love.",
      annotation: "Literally impossible not to fall for you every single day 🥰"
    },
    {
      id: 8,
      image: "assets/images/memory-08.jpg",
      number: "Moment #08",
      title: "My Forever Home",
      caption: "Looking into your eyes and knowing my heart found its place.",
      annotation: "Always and forever my girl 🌹"
    }
  ],

  // 4. Love Story Timeline
  timeline: [
    {
      phase: "Chapter 01",
      title: "The First Spark",
      desc: "The unforgettable day our paths crossed and a quiet magic began."
    },
    {
      phase: "Chapter 02",
      title: "The Realization",
      desc: "When I realized you weren't just a part of my day, but my entire day."
    },
    {
      phase: "Chapter 03",
      title: "Late Night Heartbeats",
      desc: "Endless 3 AM calls, sweet confessions, and falling deeply in love with your mind."
    },
    {
      phase: "Chapter 04",
      title: "Unbreakable Connection",
      desc: "Standing by each other through high and low, stronger with every heartbeat."
    },
    {
      phase: "Chapter 05",
      title: "Our Sweet Promises",
      desc: "Realizing that every dream of my future has you right by my side."
    },
    {
      phase: "Chapter 06",
      title: "Today & For All Lifetimes",
      desc: "Celebrating the birthday of the girl who owns my entire heart. Happy Birthday, Ponnus ❤️"
    }
  ],

  // 5. Reasons Why I Love You (Adoration Traits)
  traits: [
    {
      label: "Her Superpower",
      icon: "💖",
      quote: "Turning my darkest days into pure sunshine just by smiling",
      note: "Instant medicine for my heart",
      style: "sticky-yellow"
    },
    {
      label: "Her Golden Soul",
      icon: "🌹",
      quote: "A heart so deeply caring, pure, and unconditionally warm",
      note: "The gentlest soul I've ever known",
      style: "blush-tag"
    },
    {
      label: "Her Cutest Mood",
      icon: "🥰",
      quote: "Getting cute-angry and making that irresistible pouty face",
      note: "100/10 level adorableness guaranteed",
      style: "lavender-tag"
    },
    {
      label: "Her Voice & Warmth",
      icon: "🏡",
      quote: "The safest, coziest sanctuary in the entire universe",
      note: "One word from you calms all chaos",
      style: "peach-kraft"
    },
    {
      label: "Her Sparkle",
      icon: "✨",
      quote: "The way her eyes light up when she looks at me",
      note: "I see my entire future right there",
      style: "lined-paper"
    },
    {
      label: "Simply Being Dhurka",
      icon: "💍",
      quote: "Irreplaceable, extraordinary, magical, and all mine",
      note: "The love of my life forever",
      style: "sage-tag"
    }
  ],

  // 6. Couple Love Connection Quiz
  quiz: [
    {
      question: "What is the fastest way to make her smile without fail?",
      options: [
        "A sweet surprise, genuine love, and warm hugs 🤗💖",
        "A 4-hour PowerPoint presentation on taxes",
        "Writing a 50-page formal report",
        "Waiting in line at the bank"
      ],
      correctIndex: 0,
      correctReaction: "Naturally! Warm hugs and sweet pampering always win your heart 🥰",
      wrongReaction: "Haha nice try, but you know sweet love and cuddles win every time!"
    },
    {
      question: "When I look at you, what goes through my mind first?",
      options: [
        "Wondering what the weather will be like tomorrow",
        "'How did I get so incredibly blessed to have her in my life?' 💖",
        "Thinking about setting my alarm clock",
        "Checking my phone notifications"
      ],
      correctIndex: 1,
      correctReaction: "100% true! Every single day I thank the universe for you ✨",
      wrongReaction: "No way! It's always about how lucky I am to love you!"
    },
    {
      question: "What is our absolute favorite love language?",
      options: [
        "Late night 3 AM soul talks, forehead kisses & sweet banter 🌙",
        "Sending formal corporate emails",
        "Discussing advanced calculus for fun",
        "Complete silence for four whole days"
      ],
      correctIndex: 0,
      correctReaction: "Spot on! Our late night talks and sweet moments are irreplaceable 💫",
      wrongReaction: "You know our hearts speak in deep talks and sweet kisses!"
    },
    {
      question: "What happens when she gets a little tired or cute-grumpy?",
      options: [
        "She runs a 20-mile marathon",
        "She becomes a secret martial artist",
        "She needs soft pampering, love, and delicious favorite snacks 🍫",
        "She starts cleaning the whole attic"
      ],
      correctIndex: 2,
      correctReaction: "Exactly! Sweet pampering and favorite treats melt the grumpiness right away 😋",
      wrongReaction: "Nope, only pure pampering and love can restore her smile!"
    },
    {
      question: "Where is the absolute best place in the universe to be?",
      options: [
        "In heavy city traffic on a Monday morning",
        "At a boring dentist checkup",
        "Sitting in an endless lecture",
        "Right beside you, holding your hand, anywhere in the world 🌎❤️"
      ],
      correctIndex: 3,
      correctReaction: "Always and forever! Anywhere with you is my favorite place on earth 🌹",
      wrongReaction: "No place on earth compares to being right by your side!"
    }
  ],

  // 7. Sealed Love Letter Content
  letter: {
    salutation: "My Dearest Dhurka ❤️,",
    paragraphs: [
      "From the moment you walked into my life, every color became richer, every laugh became louder, and every single day felt like a precious gift.",
      "Loving you, Dhurka, is the easiest, most natural, and most beautiful choice my heart has ever made.",
      "Thank you for being my peace on chaotic days.<br>Thank you for your intoxicating laughter that heals everything in my world.<br>Thank you for simply being the most breathtaking and wonderful soul I have ever known.",
      "And on this very special day...",
      "<span class='letter-emphasis'>Happy Birthday, My Whole Universe.</span>",
      "I promise to love you, protect you, stand by you through every storm, and hold your hand through every single tomorrow."
    ],
    closing: "Forever and unconditionally yours,",
    signature: "— Vasanth S 💖",
    bottomNote: "Every word written with all the love my heart can hold."
  },

  // 8. Final Montage Slideshow Captions
  montage: [
    { image: "assets/images/final-01.jpg", caption: "To the way you make my entire day brighter with a single smile..." },
    { image: "assets/images/final-02.jpg", caption: "To every quiet moment where time stood still just for us..." },
    { image: "assets/images/final-03.jpg", caption: "To the late night talks where our souls connected effortlessly..." },
    { image: "assets/images/final-04.jpg", caption: "To your breathtaking smile that never fails to melt me..." },
    { image: "assets/images/final-05.jpg", caption: "Here's to a lifetime of loving you more every single day, Dhurka." }
  ]
};

/**
 * ==========================================================================
 * INITIALIZATION & CORE FUNCTIONALITY
 * ==========================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  initConfettiCanvas();
  initAudioController();
  initSecretOpening();
  initPersonalizedContent();
  initMemoriesScrapbook();
  initTimeline();
  initTraitsBoard();
  initFatherWishSection();
  initLoveQuiz();
  initLoveLetter();
  initBirthdayCake();
  initCinematicMontage();
  initEndingScreen();
  initProgressiveJourney();
  initImageFallbacks();
});

/**
 * --------------------------------------------------------------------------
 * 1. AMBIENT STARFIELD & FLOATING HEARTS CANVAS
 * -------------------------------------------------------------------------- */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let particles = [];
  let hearts = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Create stars
  const starCount = Math.min(window.innerWidth < 768 ? 45 : 90, 100);
  for (let i = 0; i < starCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.4 + 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
      angle: Math.random() * Math.PI * 2
    });
  }

  // Create floating soft hearts
  const heartCount = window.innerWidth < 768 ? 8 : 15;
  for (let i = 0; i < heartCount; i++) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 6,
      alpha: Math.random() * 0.4 + 0.15,
      speedY: Math.random() * 0.4 + 0.2,
      speedX: (Math.random() - 0.5) * 0.2,
      oscillation: Math.random() * Math.PI * 2
    });
  }

  function drawHeart(x, y, size, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size * 1.2);
    ctx.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    ctx.closePath();
    ctx.fillStyle = `rgba(226, 121, 143, ${alpha})`;
    ctx.fill();
    ctx.restore();
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw stars
    particles.forEach(p => {
      p.angle += p.speed;
      const currentAlpha = p.alpha + Math.sin(p.angle) * 0.25;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 230, 240, ${Math.max(0, currentAlpha)})`;
      ctx.fill();
    });

    // Draw floating hearts
    hearts.forEach(h => {
      h.y -= h.speedY;
      h.oscillation += 0.02;
      h.x += Math.sin(h.oscillation) * 0.5 + h.speedX;

      if (h.y < -20) {
        h.y = canvas.height + 20;
        h.x = Math.random() * canvas.width;
      }
      drawHeart(h.x, h.y, h.size, h.alpha);
    });

    animationFrameId = requestAnimationFrame(render);
  }

  render();
}

/**
 * --------------------------------------------------------------------------
 * 2. CONFETTI BURST SYSTEM
 * -------------------------------------------------------------------------- */
let triggerConfettiBurst = null;

function initConfettiCanvas() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let pieces = [];
  let isRunning = false;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const romanticColors = ['#E2798F', '#C24660', '#F6CCD5', '#E2B176', '#FFFDF9', '#A32845'];

  triggerConfettiBurst = function(x, y, count = 75) {
    const originX = x !== undefined ? x : canvas.width / 2;
    const originY = y !== undefined ? y : canvas.height / 2;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 3;
      pieces.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        size: Math.random() * 7 + 5,
        color: romanticColors[Math.floor(Math.random() * romanticColors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.008,
        shape: Math.random() > 0.4 ? 'rect' : 'heart'
      });
    }

    if (!isRunning) {
      isRunning = true;
      animate();
    }
  };

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.18; // gravity
      p.vx *= 0.98; // drag
      p.rotation += p.rotationSpeed;
      p.alpha -= p.decay;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else {
        ctx.beginPath();
        const s = p.size;
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(0, 0, -s / 2, 0, -s / 2, s * 0.3);
        ctx.bezierCurveTo(-s / 2, (s + s * 0.3) / 2, 0, s, 0, s * 1.2);
        ctx.bezierCurveTo(0, s, s / 2, (s + s * 0.3) / 2, s / 2, s * 0.3);
        ctx.bezierCurveTo(s / 2, 0, 0, 0, 0, s * 0.3);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    });

    pieces = pieces.filter(p => p.alpha > 0);

    if (pieces.length > 0) {
      requestAnimationFrame(animate);
    } else {
      isRunning = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
}

/**
 * --------------------------------------------------------------------------
 * 3. AUDIO CONTROLLER WITH ROMANTIC MUSIC SYNTHESIZER
 * -------------------------------------------------------------------------- */
let startRomanticSynth = null;
let stopRomanticSynth = null;

function initAudioController() {
  const audio = document.getElementById('audio');
  const toggleBtn = document.getElementById('audio-toggle-btn');
  const mutedIcon = toggleBtn ? toggleBtn.querySelector('.audio-icon-muted') : null;
  const playingIcon = toggleBtn ? toggleBtn.querySelector('.audio-icon-playing') : null;
  const tooltip = toggleBtn ? toggleBtn.querySelector('.audio-tooltip') : null;

  let isPlaying = false;
  let audioContext = null;
  let synthTimer = null;

  // Web Audio API Music Box Love Melody Synthesizer Fallback
  function playRomanticMelody() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContext) audioContext = new AudioCtx();
      if (audioContext.state === 'suspended') audioContext.resume();

      // Romantic notes (C4, D4, E4, F4, G4, A4, B4, C5, D5, E5)
      const notes = [
        261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25
      ];
      // Romantic music box progression
      const melody = [
        { n: 2, d: 0.5 }, { n: 4, d: 0.5 }, { n: 7, d: 0.8 }, { n: 6, d: 0.5 },
        { n: 4, d: 0.6 }, { n: 2, d: 0.6 }, { n: 3, d: 0.8 }, { n: 5, d: 0.8 },
        { n: 4, d: 0.5 }, { n: 2, d: 0.5 }, { n: 1, d: 0.6 }, { n: 0, d: 1.0 }
      ];

      let noteIndex = 0;
      function playNextNote() {
        if (!isPlaying) return;
        const current = melody[noteIndex % melody.length];
        const freq = notes[current.n];

        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.type = 'triangle'; // Sweet chime / music box tone
        osc.frequency.setValueAtTime(freq, audioContext.currentTime);

        gain.gain.setValueAtTime(0.08, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + current.d * 1.5);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start();
        osc.stop(audioContext.currentTime + current.d * 1.6);

        noteIndex++;
        synthTimer = setTimeout(playNextNote, current.d * 1000);
      }

      playNextNote();
    } catch (e) {
      console.log('Synth notice:', e);
    }
  }

  startRomanticSynth = function() {
    isPlaying = true;
    updateUI(true);
    if (audio && audio.currentSrc) {
      audio.play().catch(() => {
        playRomanticMelody();
      });
    } else {
      playRomanticMelody();
    }
  };

  stopRomanticSynth = function() {
    isPlaying = false;
    updateUI(false);
    if (audio) audio.pause();
    if (synthTimer) clearTimeout(synthTimer);
  };

  function updateUI(playing) {
    if (!toggleBtn) return;
    if (mutedIcon) mutedIcon.style.display = playing ? 'none' : 'inline-block';
    if (playingIcon) playingIcon.style.display = playing ? 'inline-block' : 'none';
    if (tooltip) tooltip.textContent = playing ? 'Music: Playing 💖' : 'Music: Off';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (isPlaying) {
        stopRomanticSynth();
      } else {
        startRomanticSynth();
      }
    });
  }
}

/**
 * --------------------------------------------------------------------------
 * 4. SECRET ROMANTIC OPENING & GIFT BOX
 * -------------------------------------------------------------------------- */
function initSecretOpening() {
  const openingScreen = document.getElementById('opening-screen');
  const mainContent = document.getElementById('main-content');
  const openGiftBtn = document.getElementById('open-gift-btn');
  const giftWrapper = document.getElementById('opening-gift-wrapper');

  let hasOpened = false;

  function openSurprise() {
    if (hasOpened) return;
    hasOpened = true;

    if (giftWrapper) giftWrapper.classList.add('opened');

    if (triggerConfettiBurst) {
      const rect = giftWrapper ? giftWrapper.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2 };
      triggerConfettiBurst(rect.left + 70, rect.top + 70, 90);
    }

    if (startRomanticSynth) {
      startRomanticSynth();
    }

    setTimeout(() => {
      if (openingScreen) openingScreen.classList.add('hidden');
      if (mainContent) mainContent.classList.remove('hidden');
      document.body.classList.remove('is-locked');

      const welcomeSec = document.getElementById('welcome-section');
      if (welcomeSec) {
        welcomeSec.scrollIntoView({ behavior: 'smooth' });
      }
    }, 900);
  }

  if (openGiftBtn) openGiftBtn.addEventListener('click', openSurprise);
  if (giftWrapper) giftWrapper.addEventListener('click', openSurprise);

  // Keyboard accessibility
  if (giftWrapper) {
    giftWrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openSurprise();
      }
    });
  }
}

/**
 * --------------------------------------------------------------------------
 * 5. POPULATE PERSONALIZED CONTENT
 * -------------------------------------------------------------------------- */
function initPersonalizedContent() {
  // Update her front name in DOM
  const herNameSpans = document.querySelectorAll('#conf-herName, .conf-herName');
  herNameSpans.forEach(el => {
    el.textContent = birthdayConfig.herName;
  });

  // Update her secret special name in deep letter
  const herSecretNameSpans = document.querySelectorAll('.conf-herSecretName');
  herSecretNameSpans.forEach(el => {
    el.textContent = birthdayConfig.herSecretName;
  });

  // Update sender name in DOM
  const yourNameSpans = document.querySelectorAll('#conf-yourName, #conf-yourNameEnd');
  yourNameSpans.forEach(el => {
    el.textContent = birthdayConfig.yourName;
  });

  // Hero caption & note
  const heroCaption = document.getElementById('conf-heroCaption');
  if (heroCaption) heroCaption.textContent = birthdayConfig.heroCaption;

  const heroNote = document.getElementById('conf-heroNote');
  if (heroNote) heroNote.textContent = birthdayConfig.heroNote;
}

/**
 * --------------------------------------------------------------------------
 * 6. MEMORIES SCRAPBOOK & LIGHTBOX
 * -------------------------------------------------------------------------- */
function initMemoriesScrapbook() {
  const grid = document.getElementById('polaroid-grid');
  if (!grid) return;

  grid.innerHTML = '';

  birthdayConfig.memories.forEach((mem, index) => {
    const card = document.createElement('div');
    card.className = 'memory-polaroid';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View ${mem.title}`);

    card.innerHTML = `
      <div class="washi-tape tape-top-center"></div>
      <div class="photo-inner">
        <span class="memory-badge">${mem.number}</span>
        <img src="${mem.image}" alt="${mem.title}" class="responsive-img fallback-photo" data-fallback-label="Replace with ${mem.image.split('/').pop()}">
      </div>
      <div class="memory-polaroid-caption">
        <span class="handwritten-caption">${mem.title}</span>
        <span class="memory-sticky-comment">${mem.annotation}</span>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(mem));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(mem);
      }
    });

    grid.appendChild(card);
  });
}

function openLightbox(mem) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const num = document.getElementById('lightbox-number');
  const title = document.getElementById('lightbox-title');
  const caption = document.getElementById('lightbox-caption');
  const annotation = document.getElementById('lightbox-annotation');

  if (!modal) return;

  if (img) img.src = mem.image;
  if (num) num.textContent = mem.number;
  if (title) title.textContent = mem.title;
  if (caption) caption.textContent = mem.caption;
  if (annotation) annotation.textContent = `"${mem.annotation}"`;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');

  const closeBtn = document.getElementById('lightbox-close-btn');
  const backdrop = document.getElementById('lightbox-backdrop');

  function close() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  if (closeBtn) closeBtn.onclick = close;
  if (backdrop) backdrop.onclick = close;
}

/**
 * --------------------------------------------------------------------------
 * 7. LOVE STORY TIMELINE
 * -------------------------------------------------------------------------- */
function initTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = '';

  birthdayConfig.timeline.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'timeline-item';

    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="timeline-phase">${item.phase}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `;

    container.appendChild(el);
  });

  // Intersection Observer for smooth reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));
}

/**
 * --------------------------------------------------------------------------
 * 8. REASONS WHY I LOVE YOU (TRAITS BOARD)
 * -------------------------------------------------------------------------- */
function initTraitsBoard() {
  const board = document.getElementById('traits-board');
  if (!board) return;

  board.innerHTML = '';

  birthdayConfig.traits.forEach(trait => {
    const card = document.createElement('div');
    card.className = `trait-card ${trait.style}`;

    card.innerHTML = `
      <div class="trait-header">
        <span class="trait-label">${trait.label}</span>
        <span class="trait-icon">${trait.icon}</span>
      </div>
      <div class="trait-quote">${trait.quote}</div>
      <div class="trait-hidden-note">↳ ${trait.note}</div>
    `;

    board.appendChild(card);
  });
}

/**
 * --------------------------------------------------------------------------
 * 9. FATHER'S BIRTHDAY WISH & BLESSINGS (NEW SECTION)
 * -------------------------------------------------------------------------- */
function initFatherWishSection() {
  const video = document.getElementById('father-video');
  const fallbackMsg = document.getElementById('father-video-fallback');
  const letterText = document.getElementById('conf-fatherWishText');

  if (letterText && birthdayConfig.fatherWish) {
    letterText.textContent = birthdayConfig.fatherWish.letterText;
  }

  if (video && fallbackMsg) {
    // Check if video source loads or fails
    video.addEventListener('error', () => {
      video.style.display = 'none';
      fallbackMsg.style.display = 'block';
    });

    video.addEventListener('canplay', () => {
      video.style.display = 'block';
      fallbackMsg.style.display = 'none';
    });
  }
}

/**
 * --------------------------------------------------------------------------
 * 10. COUPLE LOVE CONNECTION QUIZ
 * -------------------------------------------------------------------------- */
function initLoveQuiz() {
  const questionBox = document.getElementById('quiz-question-box');
  const resultBox = document.getElementById('quiz-result-box');
  const stepCount = document.getElementById('quiz-step-count');
  const progressFill = document.getElementById('quiz-progress-fill');
  const questionText = document.getElementById('quiz-question-text');
  const optionsGrid = document.getElementById('quiz-options-grid');
  const feedbackBox = document.getElementById('quiz-feedback');
  const feedbackIcon = document.getElementById('feedback-icon');
  const feedbackText = document.getElementById('feedback-text');
  const nextBtn = document.getElementById('quiz-next-btn');
  const restartBtn = document.getElementById('quiz-restart-btn');

  if (!questionBox) return;

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    const q = birthdayConfig.quiz[currentQuestion];
    if (!q) return;

    if (feedbackBox) feedbackBox.style.display = 'none';
    if (stepCount) stepCount.textContent = `Question ${currentQuestion + 1} of ${birthdayConfig.quiz.length}`;
    if (progressFill) progressFill.style.width = `${((currentQuestion + 1) / birthdayConfig.quiz.length) * 100}%`;
    if (questionText) questionText.textContent = q.question;

    if (optionsGrid) {
      optionsGrid.innerHTML = '';
      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65 + idx)}.</span> ${opt}`;
        btn.addEventListener('click', () => selectAnswer(idx, q));
        optionsGrid.appendChild(btn);
      });
    }
  }

  function selectAnswer(selectedIndex, q) {
    const buttons = optionsGrid.querySelectorAll('.quiz-option-btn');
    buttons.forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.correctIndex) {
        b.classList.add('selected-correct');
      } else if (idx === selectedIndex) {
        b.classList.add('selected-wrong');
      }
    });

    const isCorrect = (selectedIndex === q.correctIndex);
    if (isCorrect) score++;

    if (feedbackBox) {
      feedbackBox.style.display = 'block';
      if (feedbackIcon) feedbackIcon.textContent = isCorrect ? '🥰' : '💖';
      if (feedbackText) feedbackText.textContent = isCorrect ? q.correctReaction : q.wrongReaction;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentQuestion++;
      if (currentQuestion < birthdayConfig.quiz.length) {
        loadQuestion();
      } else {
        showResults();
      }
    });
  }

  function showResults() {
    if (questionBox) questionBox.style.display = 'none';
    if (resultBox) resultBox.style.display = 'block';

    const resultSummary = document.getElementById('quiz-result-summary');
    if (resultSummary) {
      resultSummary.textContent = `You scored ${score}/${birthdayConfig.quiz.length}! Our hearts beat on the exact same wavelength.`;
    }

    if (triggerConfettiBurst) {
      triggerConfettiBurst(window.innerWidth / 2, window.innerHeight / 2, 80);
    }
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      currentQuestion = 0;
      score = 0;
      if (resultBox) resultBox.style.display = 'none';
      if (questionBox) questionBox.style.display = 'block';
      loadQuestion();
    });
  }

  loadQuestion();
}

/**
 * --------------------------------------------------------------------------
 * 11. SEALED LOVE LETTER
 * -------------------------------------------------------------------------- */
function initLoveLetter() {
  const openBtn = document.getElementById('open-letter-btn');
  const envelope = document.getElementById('envelope');
  const modal = document.getElementById('letter-paper-modal');
  const closeBtn = document.getElementById('close-letter-btn');

  function openLetter() {
    if (modal) {
      modal.classList.add('active');
      document.body.classList.add('is-locked');
    }
    if (triggerConfettiBurst) {
      triggerConfettiBurst(window.innerWidth / 2, window.innerHeight / 2, 70);
    }
  }

  function closeLetter() {
    if (modal) {
      modal.classList.remove('active');
      document.body.classList.remove('is-locked');
    }
  }

  if (openBtn) openBtn.addEventListener('click', openLetter);
  if (envelope) envelope.addEventListener('click', openLetter);
  if (closeBtn) closeBtn.addEventListener('click', closeLetter);

  // Close when clicking outside paper
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLetter();
    });
  }
}

/**
 * --------------------------------------------------------------------------
 * 12. INTERACTIVE BIRTHDAY CAKE & CANDLE WISHING
 * -------------------------------------------------------------------------- */
function initBirthdayCake() {
  const candles = document.querySelectorAll('.candle');
  const countBadge = document.getElementById('candle-count-badge');
  const wishWrap = document.getElementById('wish-revealed-wrap');

  let blownCount = 0;
  const totalCandles = candles.length;

  candles.forEach(candle => {
    candle.addEventListener('click', () => {
      if (!candle.classList.contains('blown')) {
        candle.classList.add('blown');
        blownCount++;

        if (countBadge) {
          const remaining = totalCandles - blownCount;
          countBadge.textContent = remaining > 0 ? `${remaining} candle${remaining > 1 ? 's' : ''} left to blow!` : 'All candles blown! ✨';
        }

        if (blownCount === totalCandles) {
          setTimeout(() => {
            if (wishWrap) wishWrap.style.display = 'block';
            if (triggerConfettiBurst) {
              triggerConfettiBurst(window.innerWidth / 2, window.innerHeight / 2, 100);
            }
          }, 600);
        }
      }
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 13. CINEMATIC MEMORY MONTAGE
 * -------------------------------------------------------------------------- */
function initCinematicMontage() {
  const openSurpriseBtn = document.getElementById('open-surprise-btn');
  const surpriseBoxWrapper = document.getElementById('surprise-box-wrapper');
  const montageContainer = document.getElementById('cinematic-montage-container');
  const video = document.getElementById('final-video');
  const slideshow = document.getElementById('montage-slideshow');
  const slides = document.querySelectorAll('.slideshow-slide');
  const prevBtn = document.getElementById('slide-prev-btn');
  const nextBtn = document.getElementById('slide-next-btn');
  const dots = document.querySelectorAll('.dot');

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  if (openSurpriseBtn) {
    openSurpriseBtn.addEventListener('click', () => {
      if (surpriseBoxWrapper) surpriseBoxWrapper.style.display = 'none';
      if (montageContainer) montageContainer.style.display = 'block';

      if (triggerConfettiBurst) {
        triggerConfettiBurst(window.innerWidth / 2, window.innerHeight / 2, 80);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide((currentSlide + 1) % slides.length);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide((currentSlide - 1 + slides.length) % slides.length);
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showSlide(idx));
  });
}

/**
 * --------------------------------------------------------------------------
 * 14. PROGRESSIVE SECTION UNLOCKING JOURNEY
 * -------------------------------------------------------------------------- */
function initProgressiveJourney() {
  const unlockButtons = document.querySelectorAll('.unlock-next-btn');

  unlockButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('data-unlock');
      if (!targetId) return;

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('locked');
        targetSection.classList.add('unlocked');

        if (triggerConfettiBurst) {
          const rect = btn.getBoundingClientRect();
          triggerConfettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 60);
        }

        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 15. ENDING SCREEN & REPLAY
 * -------------------------------------------------------------------------- */
function initEndingScreen() {
  const replayBtn = document.getElementById('replay-journey-btn');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/**
 * --------------------------------------------------------------------------
 * 16. IMAGE FALLBACK GENERATOR
 * -------------------------------------------------------------------------- */
function initImageFallbacks() {
  const fallbackImages = document.querySelectorAll('img.fallback-photo');

  fallbackImages.forEach(img => {
    img.addEventListener('error', () => {
      const label = img.getAttribute('data-fallback-label') || 'Photo';
      const width = img.naturalWidth || 600;
      const height = img.naturalHeight || 600;

      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 600 600">
          <rect width="100%" height="100%" fill="#200D16"/>
          <circle cx="300" cy="240" r="80" fill="#3B1726" stroke="#C24660" stroke-width="2"/>
          <text x="300" y="260" font-size="60" text-anchor="middle" fill="#E2798F">💖</text>
          <text x="300" y="360" font-family="'Playfair Display', Georgia, serif" font-size="24" font-weight="bold" fill="#FFFDF9" text-anchor="middle">${label}</text>
          <text x="300" y="400" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" fill="#F6CCD5" text-anchor="middle">Add your photo to assets/images/</text>
        </svg>
      `;

      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    });
  });
}
