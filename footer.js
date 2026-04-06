const Footer = {
  render() {
    const year = new Date().getFullYear();
    return `
    <footer class="site-footer" id="site-footer">
      <div class="footer-glow"></div>
      <div class="footer-inner">
        <div class="footer-brand">
          <a href="#" class="logo footer-logo" aria-label="RandomWheel Home">
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
            <div class="logo-text"><span class="logo-main">Random</span><span class="logo-accent">Wheel</span></div>
          </a>
          <p class="footer-tagline">The ultimate free online spin wheel for any decision, game, or random pick. Fun, fast & free forever.</p>
          <div class="footer-social">
            <a href="#" aria-label="Share on Twitter" class="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="Share on Facebook" class="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" aria-label="Share on Reddit" class="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-col">
            <h4>Popular Wheels</h4>
            <ul>
              <li><a href="#" data-wheel="yes-no">Yes or No Wheel</a></li>
              <li><a href="#" data-wheel="food-picker">Food Picker Wheel</a></li>
              <li><a href="#" data-wheel="truth-dare">Truth or Dare</a></li>
              <li><a href="#" data-wheel="name-picker">Random Name Picker</a></li>
              <li><a href="#" data-wheel="prize">Prize & Raffle Wheel</a></li>
              <li><a href="#" data-wheel="pokemon">Pokémon Type Wheel</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>More Wheels</h4>
            <ul>
              <li><a href="#" data-wheel="workout">Workout Wheel</a></li>
              <li><a href="#" data-wheel="decision">Decision Maker</a></li>
              <li><a href="#" data-wheel="number">Number Generator</a></li>
              <li><a href="#" data-wheel="color">Color Picker Wheel</a></li>
              <li><a href="#" data-wheel="student">Student Picker</a></li>
              <li><a href="#" data-wheel="fortune">Fortune Wheel</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#wheel-types">All Wheel Types</a></li>
              <li><a href="#testimonials">Reviews</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-inner">
          <p>&copy; ${year} RandomWheel.github.io — Free Online Spin Wheel. All rights reserved.</p>
          <p class="footer-legal">
            <a href="#">Privacy Policy</a> &bull; <a href="#">Terms of Use</a> &bull; <a href="#">Cookie Policy</a>
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
