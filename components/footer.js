const Footer = {
  render() {
    const year = new Date().getFullYear();
    return `
    <footer class="site-footer" id="site-footer">
      <div class="footer-glow"></div>
      <div class="footer-inner">
        <div class="footer-brand">
          <a href="/" class="logo footer-logo" aria-label="RandomWheel Home">
            <div class="logo-icon">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="16" stroke="url(#flg)" stroke-width="2.5"/>
                <path d="M18 2 L18 18 L30 10 Z" fill="#FF6B35"/>
                <path d="M18 18 L34 18 L30 28 Z" fill="#FFD700"/>
                <path d="M18 18 L18 34 L8 28 Z" fill="#00E5FF"/>
                <path d="M18 18 L2 18 L6 8 Z" fill="#FF1493"/>
                <circle cx="18" cy="18" r="3" fill="white"/>
                <defs><linearGradient id="flg" x1="0" y1="0" x2="36" y2="36"><stop offset="0%" stop-color="#FF6B35"/><stop offset="100%" stop-color="#00E5FF"/></linearGradient></defs>
              </svg>
            </div>
            <div class="logo-text"><span class="logo-main">Spin The </span><span class="logo-accent">Wheel</span></div>
          </a>
          <p class="footer-tagline">The ultimate free online spin wheel for any decision, game, or random pick. Fun, fast & free forever.</p>
          <div class="footer-social">
            <a href="#" aria-label="Share on Twitter" class="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>            
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-col">
            <h4>Popular Wheels</h4>
            <ul>
              <li><a href="//#" data-wheel="yes-no">Yes or No Wheel</a></li>
              <li><a href="/#" data-wheel="food-picker">Food Picker Wheel</a></li>
              <li><a href="/#" data-wheel="truth-dare">Truth or Dare</a></li>
              <li><a href="/#" data-wheel="name-picker">Random Name Picker</a></li>
              <li><a href="/#" data-wheel="prize">Prize & Raffle Wheel</a></li>
              <li><a href="/#" data-wheel="pokemon">Pokémon Type Wheel</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>More Wheels</h4>
            <ul>
              <li><a href="/#" data-wheel="workout">Workout Wheel</a></li>
              <li><a href="/#" data-wheel="decision">Decision Maker</a></li>
              <li><a href="/#" data-wheel="number">Number Generator</a></li>
              <li><a href="/#" data-wheel="color">Color Picker Wheel</a></li>
              <li><a href="/#" data-wheel="student">Student Picker</a></li>
              <li><a href="/#" data-wheel="fortune">Fortune Wheel</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="/#how-it-works">How It Works</a></li>
              <li><a href="/#features">Features</a></li>
              <li><a href="/#faq">FAQ</a></li>
              <li><a href="/#wheel-types">All Wheel Types</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-inner">
          <p>&copy; ${year} RandomWheel.github.io — Free Online Spin Wheel. All rights reserved.</p>
          <p class="footer-legal">
            <a href="/privacy">Privacy Policy</a> &bull; <a href="/terms">Terms of Use</a> &bull; <a href="/cookie">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>`;
  },
  init() {
    // Footer wheel links scroll to app and switch wheel
    document.querySelectorAll('[data-wheel]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const wheelId = link.dataset.wheel;
        document.getElementById('spin-app').scrollIntoView({behavior:'smooth'});
        setTimeout(() => {
          const btn = document.querySelector(`.wheel-tab-btn[data-wheel="${wheelId}"]`);
          if (btn) btn.click();
        }, 600);
      });
    });
  }
};
