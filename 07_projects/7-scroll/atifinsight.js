// Scroll progress bar logic
const progress = document.querySelector('.scroll-indicator .progress');

window.onscroll = function () {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  progress.style.width = scrollPercent + '%';
};

// Inject modern neon-gradient scrollbar via JS
(function injectModernScrollbar() {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.textContent = `
    /* Chrome/Edge/Safari (WebKit) */
    ::-webkit-scrollbar {
      width: 14px;
    }

    ::-webkit-scrollbar-track {
      background: linear-gradient(180deg, rgba(20, 20, 30, 0.9), rgba(40, 40, 60, 0.7));
      border-radius: 20px;
      box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
      margin: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(45deg, #ff00cc, #00ffcc);
      border-radius: 20px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 15px rgba(0, 255, 255, 0.5), 0 0 5px rgba(255, 0, 204, 0.3);
      animation: glowPulse 2s ease-in-out infinite;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(45deg, #ff66d9, #66ffcc);
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 8px rgba(255, 0, 204, 0.5);
    }

    /* Animation for glowing effect */
    @keyframes glowPulse {
      0% { box-shadow: 0 0 15px rgba(0, 255, 255, 0.5), 0 0 5px rgba(255, 0, 204, 0.3); }
      50% { box-shadow: 0 0 25px rgba(0, 255, 255, 0.7), 0 0 10px rgba(255, 0, 204, 0.5); }
      100% { box-shadow: 0 0 15px rgba(0, 255, 255, 0.5), 0 0 5px rgba(255, 0, 204, 0.3); }
    }

    /* Firefox */
    body {
      scrollbar-color: #ff00cc rgba(20, 20, 30, 0.9);
      scrollbar-width: thin;
    }
  `;
  document.head.appendChild(style);
})();