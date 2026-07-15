// ========== WHEEL DATA ==========
const WHEELS = {
  'yes-no': {
    name: 'Yes / No Wheel',
    icon: '🎯',
    description: 'Quick decisions made easy! Spin to get an instant Yes or No.',
    longDescription: 'The Yes/No Wheel is your ultimate decision-making companion. Whether you\'re deciding on a dinner choice, trying to pick a movie, or just need a quick answer to a tough question, this wheel gives you a clear, unbiased result every time. With multiple Yes and No segments plus a Maybe option, you get a nuanced answer rather than a simple binary choice. Perfect for couples, friends, or anyone facing decision paralysis. Customize the responses to match your personality — add "Absolutely!", "No Way!", or "Ask Again" for a more fun experience.',
    segments: [
      { label: 'YES', color: '#22c55e', emoji: '✅' },
      { label: 'NO', color: '#ef4444', emoji: '❌' },
      { label: 'YES', color: '#16a34a', emoji: '✅' },
      { label: 'MAYBE', color: '#f59e0b', emoji: '🤔' },
      { label: 'YES', color: '#22c55e', emoji: '✅' },
      { label: 'NO', color: '#dc2626', emoji: '❌' },
    ]
  },
  'food-picker': {
    name: 'Food Picker',
    icon: '🍕',
    description: 'Can\'t decide what to eat? Let the wheel choose your next meal!',
    longDescription: 'The Food Picker Wheel puts an end to the eternal "what\'s for dinner?" debate. Featuring 10 popular food options ranging from Pizza and Sushi to Tacos and Ramen, this wheel covers all the classics. Whether you\'re dining alone or with a group, simply spin and let fate decide your next culinary adventure. The wheel includes a diverse mix of cuisines — Italian, Japanese, Mexican, American, and more. You can easily customize the options to include your favorite local restaurants, specific dishes, or even dietary preferences like vegan or gluten-free options. Perfect for meal planning, food dates, or just when you\'re feeling indecisive.',
    segments: [
      { label: 'Pizza', color: '#FF6B35', emoji: '🍕' },
      { label: 'Sushi', color: '#FF1493', emoji: '🍣' },
      { label: 'Tacos', color: '#FFD700', emoji: '🌮' },
      { label: 'Burger', color: '#8B4513', emoji: '🍔' },
      { label: 'Salad', color: '#22c55e', emoji: '🥗' },
      { label: 'Pasta', color: '#FF6B6B', emoji: '🍝' },
      { label: 'Ramen', color: '#FF8C00', emoji: '🍜' },
      { label: 'Steak', color: '#8B0000', emoji: '🥩' },
      { label: 'Curry', color: '#FFA500', emoji: '🍛' },
      { label: 'Pho', color: '#DAA520', emoji: '🍲' },
    ]
  },
  'truth-dare': {
    name: 'Truth or Dare',
    icon: '🔥',
    description: 'Spice up your party! Spin for Truth, Dare, or wild surprises.',
    longDescription: 'The Truth or Dare Wheel is the ultimate party game enhancer. Perfect for sleepovers, college parties, or any social gathering, this wheel adds an element of surprise to the classic game. With segments including Truth, Dare, Skip, and the thrilling Double Dare, every spin creates unforgettable moments. The wheel\'s balanced mix ensures players never know what\'s coming next. Use it to break the ice, get to know friends better, or just create hilarious memories. The Truth segments encourage honest conversations, while Dares challenge players to step out of their comfort zones. Perfect for groups of all sizes — from intimate hangouts to large parties.',
    segments: [
      { label: 'TRUTH', color: '#3B82F6', emoji: '💬' },
      { label: 'DARE', color: '#EF4444', emoji: '🔥' },
      { label: 'TRUTH', color: '#6366F1', emoji: '💬' },
      { label: 'DARE', color: '#EC4899', emoji: '🔥' },
      { label: 'SKIP', color: '#6B7280', emoji: '⏭️' },
      { label: 'DOUBLE DARE', color: '#DC2626', emoji: '💥' },
    ]
  },
  'name-picker': {
    name: 'Random Name Picker',
    icon: '👥',
    description: 'Pick a random name from your list. Perfect for classrooms & teams!',
    longDescription: 'The Random Name Picker Wheel is an essential tool for teachers, team leaders, and event organizers. Featuring 8 pre-populated names (Alice, Bob, Carol, David, Emma, Frank, Grace, Henry), this wheel makes selecting a random individual fair, fun, and completely unbiased. Teachers can use it to call on students for questions, assign group projects, or pick classroom helpers. Team leaders can use it for standup meeting rotations, assigning tasks, or choosing presenters. The wheel eliminates favoritism and makes the selection process transparent and engaging. Customize with your own names in seconds — perfect for classrooms of any size, sports teams, or any group setting where random selection is needed.',
    segments: [
      { label: 'Alice', color: '#FF6B6B', emoji: '👩' },
      { label: 'Bob', color: '#4ECDC4', emoji: '👨' },
      { label: 'Carol', color: '#FFD93D', emoji: '👩' },
      { label: 'David', color: '#6BCB77', emoji: '👨' },
      { label: 'Emma', color: '#FF6B35', emoji: '👩' },
      { label: 'Frank', color: '#845EC2', emoji: '👨' },
      { label: 'Grace', color: '#FF9671', emoji: '👩' },
      { label: 'Henry', color: '#00C9A7', emoji: '👨' },
    ]
  },
  'prize': {
    name: 'Prize / Raffle Wheel',
    icon: '🏆',
    description: 'Run fair raffles & giveaways! Spin to pick a lucky winner.',
    longDescription: 'The Prize & Raffle Wheel is your go-to tool for running fair, exciting giveaways and competitions. Whether you\'re hosting a corporate event, a charity fundraiser, a YouTube live stream, or a classroom contest, this wheel makes winner selection transparent and thrilling. With segments including Grand Prize 🥇, 2nd Prize 🥈, 3rd Prize 🥉, Free Entry 🎟️, and Bonus! ⭐, every spin creates anticipation. The "Try Again" and "Better Luck" segments add an element of suspense and engagement, keeping participants on the edge of their seats. Perfect for live events, online streams, or any setting where you need to select winners randomly and fairly. Customize the prizes to match your specific giveaway.',
    segments: [
      { label: '🥇 Grand Prize', color: '#FFD700', emoji: '🏆' },
      { label: 'Try Again', color: '#6B7280', emoji: '🔄' },
      { label: '🥈 2nd Prize', color: '#C0C0C0', emoji: '🎖️' },
      { label: 'Better Luck', color: '#9CA3AF', emoji: '😅' },
      { label: '🥉 3rd Prize', color: '#CD7F32', emoji: '🎗️' },
      { label: 'Free Entry', color: '#22C55E', emoji: '🎟️' },
      { label: 'Bonus!', color: '#F59E0B', emoji: '⭐' },
      { label: 'Try Again', color: '#6B7280', emoji: '🔄' },
    ]
  },
  'pokemon': {
    name: 'Pokémon Type',
    icon: '⚡',
    description: 'Which Pokémon type will you get? Spin for your battle advantage!',
    longDescription: 'The Pokémon Type Wheel is a must-have for any Pokémon trainer or enthusiast. Featuring 12 different Pokémon types — Fire 🔥, Water 💧, Grass 🌿, Electric ⚡, Psychic 🔮, Ice ❄️, Dragon 🐉, Dark 🌑, Steel 🔩, Ghost 👻, Fighting 🥊, and Flying 🪶 — this wheel adds a fun, competitive element to your Pokémon battles. Use it to randomly determine your battle team, choose a type for a themed playthrough, or just test your knowledge of type matchups. The wheel includes a perfect mix of offensive, defensive, and balanced types, making every spin an exciting challenge. Great for Pokémon Go players, card game enthusiasts, or any fan of the franchise looking to add randomness to their gameplay.',
    segments: [
      { label: 'Fire 🔥', color: '#F08030', emoji: '🔥' },
      { label: 'Water 💧', color: '#6890F0', emoji: '💧' },
      { label: 'Grass 🌿', color: '#78C850', emoji: '🌿' },
      { label: 'Electric ⚡', color: '#F8D030', emoji: '⚡' },
      { label: 'Psychic 🔮', color: '#F85888', emoji: '🔮' },
      { label: 'Ice ❄️', color: '#98D8D8', emoji: '❄️' },
      { label: 'Dragon 🐉', color: '#7038F8', emoji: '🐉' },
      { label: 'Dark 🌑', color: '#705848', emoji: '🌑' },
      { label: 'Steel 🔩', color: '#B8B8D0', emoji: '🔩' },
      { label: 'Ghost 👻', color: '#705898', emoji: '👻' },
      { label: 'Fighting 🥊', color: '#C03028', emoji: '🥊' },
      { label: 'Flying 🪶', color: '#A890F0', emoji: '🪶' },
    ]
  },
  'workout': {
    name: 'Workout Wheel',
    icon: '💪',
    description: 'No more workout excuses! Spin for your exercise challenge.',
    longDescription: 'The Workout Wheel eliminates workout boredom and decision fatigue. Featuring 8 challenging exercises — 20 Push-ups, 30 Squats, 1 Min Plank, 15 Burpees, 40 Jumping Jacks, 10 Pull-ups, 25 Sit-ups, and a Rest Day 🎉 — this wheel keeps your fitness routine fresh and exciting. Perfect for home workouts, gym sessions, or group fitness classes, the wheel introduces variety and challenge to every session. The inclusion of a Rest Day segment adds a fun twist, making rest feel like a reward rather than a break. Customize the exercises to match your fitness level, add new challenges, or create themed workout wheels for specific muscle groups. Whether you\'re a beginner or a fitness enthusiast, this wheel keeps you motivated and engaged.',
    segments: [
      { label: '20 Push-ups', color: '#EF4444', emoji: '💪' },
      { label: '30 Squats', color: '#F59E0B', emoji: '🦵' },
      { label: '1 Min Plank', color: '#10B981', emoji: '🏋️' },
      { label: '15 Burpees', color: '#8B5CF6', emoji: '🔥' },
      { label: '40 Jumping Jacks', color: '#3B82F6', emoji: '⚡' },
      { label: '10 Pull-ups', color: '#EC4899', emoji: '💪' },
      { label: '25 Sit-ups', color: '#F97316', emoji: '🎯' },
      { label: 'Rest Day 🎉', color: '#22C55E', emoji: '😴' },
    ]
  },
  'decision': {
    name: 'Decision Maker',
    icon: '🤔',
    description: 'Stuck between choices? Let the wheel make your decision!',
    longDescription: 'The Decision Maker Wheel is your personal advisor for life\'s tough choices. Featuring 8 response options — Go For It!, Wait & See, Absolutely!, Skip It, Ask a Friend, Do It Now, Think More, and YES! 100% — this wheel provides nuanced, thoughtful guidance when you\'re stuck between options. Whether you\'re deciding on a career move, a relationship decision, a purchase choice, or just what to do on a Saturday night, the wheel offers clear, actionable responses. Each segment is designed to provide meaningful guidance rather than simple binary answers, making it more useful for complex decisions. Perfect for those moments when you need an objective third party to help you see things clearly.',
    segments: [
      { label: 'Go For It!', color: '#22C55E', emoji: '✅' },
      { label: 'Wait & See', color: '#F59E0B', emoji: '⏳' },
      { label: 'Absolutely!', color: '#3B82F6', emoji: '💯' },
      { label: 'Skip It', color: '#EF4444', emoji: '❌' },
      { label: 'Ask a Friend', color: '#8B5CF6', emoji: '👥' },
      { label: 'Do It Now', color: '#F97316', emoji: '⚡' },
      { label: 'Think More', color: '#6B7280', emoji: '🤔' },
      { label: 'YES! 100%', color: '#EC4899', emoji: '🎯' },
    ]
  },
  'number': {
    name: 'Number Generator',
    icon: '🎲',
    description: 'Generate random numbers 1–12 for games, math, or fun!',
    longDescription: 'The Number Generator Wheel is your ultimate random number tool for any situation. Featuring numbers 1 through 12 in vibrant, distinct colors, this wheel is perfect for games, classroom activities, math practice, or just settling disputes. Teachers use it to randomly select numbers for math drills, group activities, or classroom games. Board game enthusiasts use it as a digital die for games that require number selection. Parents use it to help children learn numbers and counting in a fun, visual way. Each number segment is clearly labeled and color-coded, making it easy to read and visually engaging. Perfect for any situation where you need a random number between 1 and 12.',
    segments: [
      { label: '1', color: '#FF6B6B', emoji: '' },
      { label: '2', color: '#FF8E53', emoji: '' },
      { label: '3', color: '#FFD700', emoji: '' },
      { label: '4', color: '#4ECDC4', emoji: '' },
      { label: '5', color: '#45B7D1', emoji: '' },
      { label: '6', color: '#96CEB4', emoji: '' },
      { label: '7', color: '#D4A5A5', emoji: '' },
      { label: '8', color: '#9B59B6', emoji: '' },
      { label: '9', color: '#3498DB', emoji: '' },
      { label: '10', color: '#E74C3C', emoji: '' },
      { label: '11', color: '#2ECC71', emoji: '' },
      { label: '12', color: '#F39C12', emoji: '' },
    ]
  },
  'color': {
    name: 'Color Picker',
    icon: '🎨',
    description: 'Spin for a random color! Great for art, design, and color challenges.',
    longDescription: 'The Color Picker Wheel is a vibrant tool for artists, designers, and anyone who loves color. Featuring 10 stunning colors — Red 🔴, Orange 🟠, Yellow 🟡, Green 🟢, Blue 🔵, Indigo 🟣, Violet 💜, Pink 🩷, Cyan 🩵, and Lime 🟩 — this wheel provides endless inspiration for creative projects. Use it to choose color schemes for art projects, randomly select colors for design challenges, or just explore the beautiful spectrum of colors. Perfect for graphic designers, painters, interior decorators, or anyone needing a splash of color inspiration. Each color is represented with its emoji, making the wheel visually appealing and easy to use. Spin for your next color challenge or creative project!',
    segments: [
      { label: 'Red', color: '#EF4444', emoji: '🔴' },
      { label: 'Orange', color: '#F97316', emoji: '🟠' },
      { label: 'Yellow', color: '#EAB308', emoji: '🟡' },
      { label: 'Green', color: '#22C55E', emoji: '🟢' },
      { label: 'Blue', color: '#3B82F6', emoji: '🔵' },
      { label: 'Indigo', color: '#6366F1', emoji: '🟣' },
      { label: 'Violet', color: '#A855F7', emoji: '💜' },
      { label: 'Pink', color: '#EC4899', emoji: '🩷' },
      { label: 'Cyan', color: '#06B6D4', emoji: '🩵' },
      { label: 'Lime', color: '#84CC16', emoji: '🟩' },
    ]
  },
  'student': {
    name: 'Student Picker',
    icon: '🏫',
    description: 'Fair student selection for teachers! Spin to pick who answers next.',
    longDescription: 'The Student Picker Wheel is an essential classroom management tool designed specifically for teachers and educators. Featuring 8 organized segments — Row 1, Row 2, Row 3, Front Row, Back Row, Volunteer?, Group A, and Group B — this wheel makes classroom participation fair, fun, and engaging. Teachers can use it to randomly select students for answering questions, presenting projects, participating in activities, or assigning groups. The wheel eliminates bias and ensures every student has an equal chance of being called upon, reducing student anxiety and promoting inclusivity. Great for K-12 classrooms, higher education, and even corporate training sessions. Customize with your own class lists, student names, or group categories.',
    segments: [
      { label: 'Row 1', color: '#3B82F6', emoji: '📚' },
      { label: 'Row 2', color: '#22C55E', emoji: '✏️' },
      { label: 'Row 3', color: '#F59E0B', emoji: '📖' },
      { label: 'Front Row', color: '#EF4444', emoji: '🎓' },
      { label: 'Back Row', color: '#8B5CF6', emoji: '📝' },
      { label: 'Volunteer?', color: '#EC4899', emoji: '🙋' },
      { label: 'Group A', color: '#06B6D4', emoji: '👨‍🏫' },
      { label: 'Group B', color: '#F97316', emoji: '👩‍🏫' },
    ]
  },
  'fortune': {
    name: 'Fortune Wheel',
    icon: '🔮',
    description: 'What does fate have in store? Spin your fortune wheel to find out!',
    longDescription: 'The Fortune Wheel is your personal oracle for life\'s mysteries. Featuring 8 mystical segments — Great Fortune! 🌟, Adventure Awaits 🗺️, Love is Near 💕, Wealth Incoming 💰, Good Health 💚, New Beginnings 🌱, Lucky Day! 🍀, and Be Patient ⏳ — this wheel provides insightful, uplifting predictions for your future. Whether you\'re looking for guidance, inspiration, or just a bit of fun, the Fortune Wheel offers meaningful responses that spark reflection and optimism. Perfect for self-reflection, morning motivation, or just adding a touch of magic to your day. Use it to get a sense of what the universe has in store, or just to add some excitement to your daily routine. Every spin brings a new perspective and a positive message.',
    segments: [
      { label: 'Great Fortune!', color: '#FFD700', emoji: '🌟' },
      { label: 'Adventure Awaits', color: '#FF6B35', emoji: '🗺️' },
      { label: 'Love is Near', color: '#FF1493', emoji: '💕' },
      { label: 'Wealth Incoming', color: '#228B22', emoji: '💰' },
      { label: 'Good Health', color: '#00CED1', emoji: '💚' },
      { label: 'New Beginnings', color: '#9400D3', emoji: '🌱' },
      { label: 'Lucky Day!', color: '#FF4500', emoji: '🍀' },
      { label: 'Be Patient', color: '#4682B4', emoji: '⏳' },
    ]
  }
};

// ========== WHEEL ENGINE ==========
class SpinWheel {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.segments = [];
    this.currentRotation = 0;
    this.spinning = false;
    this.onResult = options.onResult || (() => {});
    this.sounds = options.sounds !== false;
    this.confettiEnabled = options.confetti !== false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    const size = Math.min(this.canvas.parentElement.offsetWidth - 20, 440);
    this.canvas.style.width = size + 'px';
    this.canvas.style.height = size + 'px';
    this.canvas.width = size * dpr;
    this.canvas.height = size * dpr;
    this.ctx.scale(dpr, dpr);
    this.size = size;
    this.cx = size / 2;
    this.cy = size / 2;
    this.r = size / 2 - 10;
    this.draw();
  }

  loadWheel(wheelData) {
    this.segments = wheelData.segments.map(s => ({...s}));
    this.currentRotation = 0;
    this.draw();
  }

  draw() {
    const ctx = this.ctx;
    const n = this.segments.length;
    if (!n) return;
    ctx.clearRect(0, 0, this.size, this.size);

    const arc = (2 * Math.PI) / n;

    // Outer glow ring
    const glowGrad = ctx.createRadialGradient(this.cx, this.cy, this.r - 5, this.cx, this.cy, this.r + 12);
    glowGrad.addColorStop(0, 'rgba(255,255,255,0.15)');
    glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.beginPath();
    ctx.arc(this.cx, this.cy, this.r + 10, 0, 2 * Math.PI);
    ctx.fillStyle = glowGrad;
    ctx.fill();

    // Draw segments
    for (let i = 0; i < n; i++) {
      const startAngle = this.currentRotation + i * arc - Math.PI / 2;
      const endAngle = startAngle + arc;
      const seg = this.segments[i];

      // Segment fill
      ctx.beginPath();
      ctx.moveTo(this.cx, this.cy);
      ctx.arc(this.cx, this.cy, this.r, startAngle, endAngle);
      ctx.closePath();

      // Gradient for depth
      const grad = ctx.createRadialGradient(this.cx, this.cy, 0, this.cx, this.cy, this.r);
      grad.addColorStop(0, this._lighten(seg.color, 40));
      grad.addColorStop(0.6, seg.color);
      grad.addColorStop(1, this._darken(seg.color, 20));
      ctx.fillStyle = grad;
      ctx.fill();

      // Segment border
      ctx.strokeStyle = 'rgba(255,255,255,0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Label
      ctx.save();
      ctx.translate(this.cx, this.cy);
      ctx.rotate(startAngle + arc / 2);
      const textR = this.r * 0.65;
      ctx.translate(textR, 0);

      const fontSize = Math.max(10, Math.min(18, this.r / n * 1.4));
      ctx.font = `bold ${fontSize}px 'Nunito', sans-serif`;
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 4;

      const label = seg.label.length > 12 ? seg.label.substring(0, 11) + '…' : seg.label;
      ctx.fillText(label, 0, 0);
      ctx.restore();
    }

    // Center circle
    const centerGrad = ctx.createRadialGradient(this.cx, this.cy, 0, this.cx, this.cy, 28);
    centerGrad.addColorStop(0, '#ffffff');
    centerGrad.addColorStop(0.5, '#f0f0f0');
    centerGrad.addColorStop(1, '#d0d0d0');
    ctx.beginPath();
    ctx.arc(this.cx, this.cy, 28, 0, 2 * Math.PI);
    ctx.fillStyle = centerGrad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.8)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Center icon
    ctx.font = '20px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowBlur = 0;
    ctx.fillText('🎯', this.cx, this.cy);

    // Outer border ring
    ctx.beginPath();
    ctx.arc(this.cx, this.cy, this.r, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 4;
    ctx.stroke();
  }

  spin(duration = null) {
    if (this.spinning) return;
    this.spinning = true;

    const n = this.segments.length;
    const arc = (2 * Math.PI) / n;
    const extraSpins = 5 + Math.random() * 5;
    const targetSegment = Math.floor(Math.random() * n);
    
    // Calculate the target angle so the target segment aligns with the TOP pointer
    // The pointer is at the top (12 o'clock), which is -π/2 in canvas coordinates
    // We want the target segment's center to be at the top
    const targetAngle = (2 * Math.PI * extraSpins) + (-Math.PI / 2 - targetSegment * arc) - this.currentRotation % (2 * Math.PI);
    const totalAngle = targetAngle;
    const spinDuration = duration || (3000 + Math.random() * 2000);

    const start = performance.now();
    const startRot = this.currentRotation;

    const ease = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / spinDuration, 1);
      this.currentRotation = startRot + totalAngle * ease(t);
      this.draw();

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        this.spinning = false;
        // Determine winner - pointer is at the TOP (-π/2)
        // The segment at the top is the one whose center is at -π/2
        const pointerAngle = -Math.PI / 2; // Top of the wheel
        
        // Calculate which segment the pointer is pointing at
        // A segment's center angle = this.currentRotation + i * arc - Math.PI / 2
        // We want: pointerAngle = this.currentRotation + i * arc - Math.PI / 2
        // So: i = (pointerAngle - this.currentRotation + Math.PI / 2) / arc
        let rawIdx = (pointerAngle - this.currentRotation + Math.PI / 2) / arc;
        let idx = Math.floor(((rawIdx % n) + n) % n);
        idx = idx % n;
        
        this.onResult(this.segments[idx], idx);
        if (this.confettiEnabled) launchConfetti();
      }
    };

    requestAnimationFrame(tick);
  }

  _lighten(hex, pct) {
    return this._adjustColor(hex, pct);
  }
  _darken(hex, pct) {
    return this._adjustColor(hex, -pct);
  }
  _adjustColor(hex, amount) {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + amount));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + amount));
    const b = Math.min(255, Math.max(0, (num & 0xff) + amount));
    return `rgb(${r},${g},${b})`;
  }
}

// ========== CONFETTI ==========
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({length: 120}, () => ({
    x: Math.random() * canvas.width,
    y: -20,
    r: 4 + Math.random() * 8,
    d: 1 + Math.random() * 2,
    color: ['#FF6B35','#FFD700','#00E5FF','#FF1493','#22C55E','#A855F7'][Math.floor(Math.random()*6)],
    tilt: Math.random() * 10 - 10,
    tiltAngle: 0,
    tiltSpeed: 0.1 + Math.random() * 0.15
  }));

  let frame = 0;
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.tiltAngle += p.tiltSpeed;
      p.y += p.d + 1;
      p.x += Math.sin(p.tiltAngle) * 2;
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.tiltAngle);
      ctx.fillRect(-p.r/2, -p.r/2, p.r, p.r * 0.5);
      ctx.restore();
    });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.display='none'; }
  };
  requestAnimationFrame(draw);
}

// ========== APP CONTROLLER ==========
const App = {
  currentWheel: 'yes-no',
  wheel: null,
  spinHistory: [],

  init() {
    this.wheel = new SpinWheel('wheel-canvas', {
      onResult: (seg, idx) => this.showResult(seg, idx)
    });
    this.loadWheel('yes-no');
    this.buildWheelTabs();
    this.buildWheelGallery();
    this.bindEvents();
    this.renderHistory();
  },

  loadWheel(id) {
    this.currentWheel = id;
    const data = WHEELS[id];
    if (!data) return;
    this.wheel.loadWheel(data);
    this.updateWheelInfo(data);
    this.buildEditor(id);
    document.querySelectorAll('.wheel-tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.wheel === id);
    });
  },

  updateWheelInfo(data) {
    const title = document.getElementById('wheel-title');
    const desc = document.getElementById('wheel-desc');
    if (title) title.textContent = data.icon + ' ' + data.name;
    if (desc) desc.textContent = data.description;
  },

  buildWheelTabs() {
    const container = document.getElementById('wheel-tabs');
    if (!container) return;
    container.innerHTML = Object.entries(WHEELS).map(([id, w]) => `
      <button class="wheel-tab-btn${id === this.currentWheel ? ' active' : ''}" data-wheel="${id}" title="${w.name}">
        <span class="tab-icon">${w.icon}</span>
        <span class="tab-label">${w.name}</span>
      </button>
    `).join('');
    container.querySelectorAll('.wheel-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => this.loadWheel(btn.dataset.wheel));
    });
  },

  buildWheelGallery() {
    const container = document.getElementById('wheel-gallery');
    if (!container) return;
    container.innerHTML = Object.entries(WHEELS).map(([id, w]) => `
      <article class="gallery-card" data-wheel="${id}">
        <div class="card-icon">${w.icon}</div>
        <h3>${w.name}</h3>
        <p>${w.description}</p>
        <button class="btn-try-wheel" data-wheel="${id}">Try This Wheel →</button>
      </article>
    `).join('');
    container.querySelectorAll('.btn-try-wheel').forEach(btn => {
      btn.addEventListener('click', () => {
        document.getElementById('spin-app').scrollIntoView({behavior:'smooth'});
        setTimeout(() => this.loadWheel(btn.dataset.wheel), 500);
      });
    });
  },

  buildEditor(id) {
    const data = WHEELS[id];
    const container = document.getElementById('editor-list');
    if (!container) return;
    container.innerHTML = data.segments.map((seg, i) => `
      <div class="editor-item" data-index="${i}">
        <input type="color" class="seg-color" value="${seg.color}" data-index="${i}" title="Pick color">
        <input type="text" class="seg-label" value="${seg.label}" data-index="${i}" maxlength="20" placeholder="Label…">
        <button class="seg-del" data-index="${i}" title="Remove" aria-label="Remove segment">✕</button>
      </div>
    `).join('');

    container.querySelectorAll('.seg-label').forEach(inp => {
      inp.addEventListener('input', e => {
        WHEELS[this.currentWheel].segments[e.target.dataset.index].label = e.target.value;
        this.wheel.loadWheel(WHEELS[this.currentWheel]);
      });
    });
    container.querySelectorAll('.seg-color').forEach(inp => {
      inp.addEventListener('input', e => {
        WHEELS[this.currentWheel].segments[e.target.dataset.index].color = e.target.value;
        this.wheel.loadWheel(WHEELS[this.currentWheel]);
      });
    });
    container.querySelectorAll('.seg-del').forEach(btn => {
      btn.addEventListener('click', e => {
        const idx = parseInt(e.target.dataset.index);
        if (WHEELS[this.currentWheel].segments.length <= 2) return;
        WHEELS[this.currentWheel].segments.splice(idx, 1);
        this.buildEditor(this.currentWheel);
        this.wheel.loadWheel(WHEELS[this.currentWheel]);
      });
    });
  },

  addSegment() {
    const colors = ['#FF6B35','#FFD700','#00E5FF','#FF1493','#22C55E','#A855F7','#3B82F6','#EF4444'];
    WHEELS[this.currentWheel].segments.push({
      label: 'New Option',
      color: colors[Math.floor(Math.random()*colors.length)],
      emoji: ''
    });
    this.buildEditor(this.currentWheel);
    this.wheel.loadWheel(WHEELS[this.currentWheel]);
  },

  spinWheel() {
    if (this.wheel.spinning) return;
    const btn = document.getElementById('spin-btn');
    if (btn) { btn.disabled = true; btn.textContent = 'Spinning…'; }
    this.wheel.spin();
  },

  showResult(seg, idx) {
    const btn = document.getElementById('spin-btn');
    if (btn) { btn.disabled = false; btn.innerHTML = '<span class="spin-icon">⚡</span> SPIN!'; }

    const panel = document.getElementById('result-panel');
    const resultText = document.getElementById('result-text');
    const resultEmoji = document.getElementById('result-emoji');

    if (panel) {
      resultText.textContent = seg.label;
      resultEmoji.textContent = seg.emoji || '🎉';
      panel.classList.add('show', 'pop');
      setTimeout(() => panel.classList.remove('pop'), 500);
    }

    // History
    this.spinHistory.unshift({
      wheel: WHEELS[this.currentWheel].name,
      result: seg.label,
      emoji: seg.emoji || '🎉',
      time: new Date().toLocaleTimeString()
    });
    if (this.spinHistory.length > 10) this.spinHistory.pop();
    this.renderHistory();
  },

  renderHistory() {
    const el = document.getElementById('spin-history');
    if (!el) return;
    if (!this.spinHistory.length) {
      el.innerHTML = '<p class="history-empty">No spins yet. Give it a spin! 🎡</p>';
      return;
    }
    el.innerHTML = this.spinHistory.map(h => `
      <div class="history-item">
        <span class="hist-emoji">${h.emoji}</span>
        <div class="hist-details">
          <strong>${h.result}</strong>
          <small>${h.wheel} · ${h.time}</small>
        </div>
      </div>
    `).join('');
  },

  bindEvents() {
    const spinBtn = document.getElementById('spin-btn');
    if (spinBtn) spinBtn.addEventListener('click', () => this.spinWheel());

    const addBtn = document.getElementById('add-segment-btn');
    if (addBtn) addBtn.addEventListener('click', () => this.addSegment());

    const resetBtn = document.getElementById('reset-wheel-btn');
    if (resetBtn) resetBtn.addEventListener('click', () => {
      const id = this.currentWheel;
      this.loadWheel(id);
    });

    // Keyboard spin
    document.addEventListener('keydown', e => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        this.spinWheel();
      }
    });

    // Close result panel
    const closeResult = document.getElementById('close-result');
    if (closeResult) closeResult.addEventListener('click', () => {
      document.getElementById('result-panel').classList.remove('show');
    });
  }
};
