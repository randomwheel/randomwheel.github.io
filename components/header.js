const Header = {
  render() {
    return `
    <header class="site-header" id="site-header">
      <div class="header-inner">
        <a href="/" class="logo" aria-label="RandomWheel Home">
          <div class="logo-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="16" stroke="url(#lg1)" stroke-width="2.5"/>
              <path d="M18 2 L18 18 L30 10 Z" fill="#FF6B35"/>
              <path d="M18 18 L34 18 L30 28 Z" fill="#FFD700"/>
              <path d="M18 18 L18 34 L8 28 Z" fill="#00E5FF"/>
              <path d="M18 18 L2 18 L6 8 Z" fill="#FF1493"/>
              <circle cx="18" cy="18" r="3" fill="white"/>
              <defs>
                <linearGradient id="lg1" x1="0" y1="0" x2="36" y2="36">
                  <stop offset="0%" stop-color="#FF6B35"/>
                  <stop offset="100%" stop-color="#00E5FF"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="logo-text">
            <span class="logo-main">Spin The </span><span class="logo-accent">Wheel</span>
          </div>
        </a>

        <nav class="main-nav" id="main-nav" role="navigation" aria-label="Main navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#wheel-types">Wheel Types</a></li>
            <li><a href="/#how-it-works">How It Works</a></li>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#faq">FAQ</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <button class="btn-spin-cta" onclick="document.getElementById('spin-app').scrollIntoView({behavior:'smooth'})">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            Spin Now
          </button>
          <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>`;
  },
  init() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
        const open = nav.classList.toggle('nav-open');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', open);
      });
    }
    // Sticky header shadow
    window.addEventListener('scroll', () => {
      const h = document.getElementById('site-header');
      if (h) h.classList.toggle('scrolled', window.scrollY > 40);
    });
  }
};
