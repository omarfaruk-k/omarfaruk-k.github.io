/* ============================================================
   OMAR FARUK KHAN — Portfolio Scripts
   script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. THEME TOGGLE
     ---------------------------------------------------------- */
  const themeToggle = document.getElementById('themeToggle');
  const html        = document.documentElement;

  // Apply saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
  });


  /* ----------------------------------------------------------
     2. MOBILE HAMBURGER MENU
     ---------------------------------------------------------- */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu when any link is clicked
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });


  /* ----------------------------------------------------------
     3. SCROLL PROGRESS BAR
     ---------------------------------------------------------- */
  const progressBar = document.getElementById('progress-bar');

  window.addEventListener('scroll', () => {
    const scrollTop   = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress    = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }, { passive: true });


  /* ----------------------------------------------------------
     4. SCROLL REVEAL (generic .reveal elements)
     ---------------------------------------------------------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after reveal so it doesn't re-trigger
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ----------------------------------------------------------
     5. TIMELINE SCROLL REVEAL (with stagger)
     ---------------------------------------------------------- */
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        timelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    item.style.transitionDelay = (i * 0.13) + 's';
    timelineObserver.observe(item);
  });


  /* ----------------------------------------------------------
     6. ACTIVE NAV LINK HIGHLIGHTING ON SCROLL
     ---------------------------------------------------------- */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id;
        navLinks.forEach(link => {
          const isActive = link.getAttribute('href') === '#' + activeId;
          link.classList.toggle('active', isActive);
        });
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(s => sectionObserver.observe(s));


  /* ----------------------------------------------------------
     7. CONTACT FORM (demo — wire to Formspree or EmailJS in prod)

     To enable real email sending:
       1. Sign up at https://formspree.io (free)
       2. Create a form and copy your endpoint
       3. Replace the fetch URL below with your Formspree endpoint
       4. Remove the setTimeout simulation block
     ---------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const formStatus  = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn    = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled   = true;
      submitBtn.textContent = 'Sending...';

      /*
        ── PRODUCTION: uncomment and configure this block ──

        const formData = new FormData(contactForm);
        try {
          const res = await fetch('https://formspree.io/f/YOUR_ID', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          });

          if (res.ok) {
            formStatus.style.display = 'block';
            formStatus.textContent   = '✓ Message sent! I\'ll get back to you soon.';
            contactForm.reset();
          } else {
            formStatus.style.display = 'block';
            formStatus.style.color   = 'var(--accent3)';
            formStatus.textContent   = '✗ Something went wrong. Please try emailing directly.';
          }
        } catch {
          formStatus.style.display = 'block';
          formStatus.textContent   = '✗ Network error. Please email me directly.';
        } finally {
          submitBtn.disabled   = false;
          submitBtn.innerHTML  = originalText;
        }
      */

      // ── DEMO simulation (remove when using Formspree above) ──
      setTimeout(() => {
        formStatus.style.display = 'block';
        formStatus.textContent   = '✓ Message sent! I\'ll get back to you soon.';
        contactForm.reset();
        submitBtn.disabled  = false;
        submitBtn.innerHTML = originalText;
      }, 1200);
    });
  }

});
