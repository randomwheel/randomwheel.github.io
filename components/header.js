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
            <span class="logo-main">Random Wheel </span><span class="logo-accent">Spinner</span>
          </div>
        </a>

        <nav class="main-nav" id="main-nav" role="navigation" aria-label="Main navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#wheel-types">Wheel Types</a></li>            
            <li><a href="/#how-it-works">How It Works</a></li>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#faq">FAQ</a></li>
            <li><a href="/blog">Blog</a></li>
            <li class="dropdown-container">
              <button class="dropdown-toggle" id="gamesDropdownToggle" aria-expanded="false">
                🎮 Games
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:4px;">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <ul class="dropdown-menu" id="gamesDropdown">
                <li><a href="/games/tic-tac-toe">Tic Tac Toe</a></li>
                <li><a href="/games/snake-game">Snake</a></li>
                <li><a href="/games/solitaire">Solitaire</a></li>
                <li><a href="/games/word-search">Word Search</a></li>
              </ul>
            </li>
          </ul>          
        </nav>

         <div class="header-actions" id="header-actions">
          <button class="btn-spin-cta" id="btn-spin-cta" onclick="document.getElementById('spin-app').scrollIntoView({behavior:'smooth'})">
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
    const ctaButton = document.getElementById('btn-spin-cta');
    const headerActions = document.getElementById('header-actions');
    const dropdownToggle = document.getElementById('gamesDropdownToggle');
    const dropdownMenu = document.getElementById('gamesDropdown');

    // Hamburger toggle
    if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
        const open = nav.classList.toggle('nav-open');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', open);
        // Close dropdown when hamburger closes
        if (!open && dropdownMenu) {
          dropdownMenu.classList.remove('open');
          if (dropdownToggle) dropdownToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Dropdown toggle
    if (dropdownToggle && dropdownMenu) {
      dropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdownMenu.classList.toggle('open');
        dropdownToggle.setAttribute('aria-expanded', isOpen);
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        const container = dropdownToggle.closest('.dropdown-container');
        if (container && !container.contains(e.target)) {
          dropdownMenu.classList.remove('open');
          dropdownToggle.setAttribute('aria-expanded', 'false');
        }
      });

      // Close dropdown on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dropdownMenu.classList.contains('open')) {
          dropdownMenu.classList.remove('open');
          dropdownToggle.setAttribute('aria-expanded', 'false');
          dropdownToggle.focus();
        }
      });
    }

    // Handle moving the CTA button into mobile nav or back to header
    if (ctaButton && nav && headerActions) {
      const handleCtaResponsive = () => {
        if (window.innerWidth <= 768) { // Matches your mobile breakpoint
          if (!nav.contains(ctaButton)) {
            nav.appendChild(ctaButton);
          }
        } else {
          if (!headerActions.contains(ctaButton)) {
            headerActions.insertBefore(ctaButton, hamburger);
          }
        }
      };

      // Run on load and on window resize
      handleCtaResponsive();
      window.addEventListener('resize', handleCtaResponsive);
    }

    // Sticky header shadow
    window.addEventListener('scroll', () => {
      const h = document.getElementById('site-header');
      if (h) h.classList.toggle('scrolled', window.scrollY > 40);
    });
  }
};
