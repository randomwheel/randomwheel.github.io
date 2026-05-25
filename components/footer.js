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
            <a href="#" aria-label="Share on GitHub" class="social-btn">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
</a>            
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-col">
            <h4>Popular Wheels</h4>
            <ul>
              <li><a href="/yes-no-wheel">Yes or No Wheel</a></li>
              <li><a href="/food-picker-wheel">Food Picker Wheel</a></li>
              <li><a href="/truth-or-dare-wheel">Truth or Dare</a></li>
              <li><a href="/random-name-picker">Random Name Picker</a></li>
              <li><a href="/prize-wheel">Prize & Raffle Wheel</a></li>
              <li><a href="/decision-wheel">Random Decision</a></li>
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
              <li><a href="/lucky-spin" data-wheel="fortune">Lucky Spinner</a></li>
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
              <li><a href="/blog">Blog</a></li>
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
