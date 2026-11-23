 
    // Theme switch: saves the visitor's choice in this browser.
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('atiqa-portfolio-theme');
    if (savedTheme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    function updateThemeButton() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      themeToggle.textContent = isDark ? '☀' : '☾';
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    }
    updateThemeButton();
    themeToggle.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('atiqa-portfolio-theme', next);
      updateThemeButton();
    });

    // Mobile navigation.
    const menuToggle = document.getElementById('menuToggle');
    const navlinks = document.getElementById('navlinks');
    menuToggle.addEventListener('click', () => {
      const open = navlinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.textContent = open ? '×' : '☰';
    });
    navlinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navlinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    }));

    // Keep the copyright year current automatically.
    document.getElementById('year').textContent = new Date().getFullYear();
