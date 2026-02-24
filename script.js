// /* ============================================================
//    OMAR FARUK KHAN — Portfolio Scripts
//    script.js
//    ============================================================ */

// document.addEventListener('DOMContentLoaded', () => {

//   /* ----------------------------------------------------------
//      1. THEME TOGGLE
//      ---------------------------------------------------------- */
//   const themeToggle = document.getElementById('themeToggle');
//   const html        = document.documentElement;

//   // Apply saved theme or default to dark
//   const savedTheme = localStorage.getItem('theme') || 'dark';
//   html.setAttribute('data-theme', savedTheme);
//   themeToggle.textContent = savedTheme === 'dark' ? '☀︎' : '⏾';

//   themeToggle.addEventListener('click', () => {
//     const current = html.getAttribute('data-theme');
//     const next    = current === 'dark' ? 'light' : 'dark';
//     html.setAttribute('data-theme', next);
//     localStorage.setItem('theme', next);
//     themeToggle.textContent = next === 'dark' ? '☀︎' : '⏾';
//   });


//   /* ----------------------------------------------------------
//      2. MOBILE HAMBURGER MENU
//      ---------------------------------------------------------- */
//   const hamburger  = document.getElementById('hamburger');
//   const mobileMenu = document.getElementById('mobileMenu');

//   hamburger.addEventListener('click', () => {
//     mobileMenu.classList.toggle('open');
//   });

//   // Close mobile menu when any link is clicked
//   document.querySelectorAll('.mobile-menu a').forEach(link => {
//     link.addEventListener('click', () => mobileMenu.classList.remove('open'));
//   });


//   /* ----------------------------------------------------------
//      3. SCROLL PROGRESS BAR
//      ---------------------------------------------------------- */
//   const progressBar = document.getElementById('progress-bar');

//   window.addEventListener('scroll', () => {
//     const scrollTop    = document.documentElement.scrollTop;
//     const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const progress     = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
//     progressBar.style.width = progress + '%';
//   }, { passive: true });


//   /* ----------------------------------------------------------
//      4. SCROLL REVEAL (generic .reveal elements)
//      ---------------------------------------------------------- */
//   const revealObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//         revealObserver.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.1 });

//   document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


//   /* ----------------------------------------------------------
//      5. TIMELINE SCROLL REVEAL (with stagger)
//      ---------------------------------------------------------- */
//   const timelineObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//         timelineObserver.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.15 });

//   document.querySelectorAll('.timeline-item').forEach((item, i) => {
//     item.style.transitionDelay = (i * 0.13) + 's';
//     timelineObserver.observe(item);
//   });


//   /* ----------------------------------------------------------
//      6. ACTIVE NAV LINK HIGHLIGHTING
//         - On the blog page: statically mark "blog" as active
//         - On the homepage: use scroll-based section detection
//      ---------------------------------------------------------- */
//   const navLinks = document.querySelectorAll('.nav-links a');

//   const isBlogPage = window.location.pathname.includes('index.html')
//                   || window.location.pathname.includes('/blog/');

//   if (isBlogPage) {
//     // On the blog page — just mark the blog link active, no scroll detection
//     navLinks.forEach(link => {
//       const href = link.getAttribute('href');
//       if (href && (href.includes('index.html') || href === 'index.html')) {
//         link.classList.add('active');
//       }
//     });
//   } else {
//     // On the homepage — scroll-based active detection
//     const sections = document.querySelectorAll('section[id]');

//     const sectionObserver = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const activeId = entry.target.id;
//           navLinks.forEach(link => {
//             const href = link.getAttribute('href');
//             // Match both #id and full URL ending in #id
//             const isActive = href === '#' + activeId || href === '/#' + activeId;
//             link.classList.toggle('active', isActive);
//           });
//         }
//       });
//     }, { threshold: 0.45 });

//     sections.forEach(s => sectionObserver.observe(s));
//   }


//   /* ----------------------------------------------------------
//      7. CONTACT FORM (demo — wire to Formspree or EmailJS in prod)
//      ---------------------------------------------------------- */
//   const contactForm = document.getElementById('contactForm');
//   const formStatus  = document.getElementById('formStatus');

//   if (contactForm) {
//     contactForm.addEventListener('submit', async (e) => {
//       e.preventDefault();

//       const submitBtn    = contactForm.querySelector('button[type="submit"]');
//       const originalText = submitBtn.innerHTML;

//       submitBtn.disabled    = true;
//       submitBtn.textContent = 'Sending...';

//       /*
//         ── PRODUCTION: uncomment and configure this block ──

//         const formData = new FormData(contactForm);
//         try {
//           const res = await fetch('https://formspree.io/f/YOUR_ID', {
//             method: 'POST',
//             body: formData,
//             headers: { 'Accept': 'application/json' }
//           });

//           if (res.ok) {
//             formStatus.style.display = 'block';
//             formStatus.textContent   = '✓ Message sent! I\'ll get back to you soon.';
//             contactForm.reset();
//           } else {
//             formStatus.style.display = 'block';
//             formStatus.style.color   = 'var(--accent3)';
//             formStatus.textContent   = '✗ Something went wrong. Please try emailing directly.';
//           }
//         } catch {
//           formStatus.style.display = 'block';
//           formStatus.textContent   = '✗ Network error. Please email me directly.';
//         } finally {
//           submitBtn.disabled  = false;
//           submitBtn.innerHTML = originalText;
//         }
//       */

//       // ── DEMO simulation (remove when using Formspree above) ──
//       setTimeout(() => {
//         formStatus.style.display = 'block';
//         formStatus.textContent   = '✓ Message sent! I\'ll get back to you soon.';
//         contactForm.reset();
//         submitBtn.disabled  = false;
//         submitBtn.innerHTML = originalText;
//       }, 1200);
//     });
//   }



  
// });


/* ============================================================
   OMAR FARUK KHAN — Portfolio Scripts (Merged + Clean URLs)
   ============================================================ */
const SITE_ROOT = window.location.origin;
const IS_BLOG   = window.location.pathname.startsWith('/blog');

/* ============================================================
   1. CLEAN URL ON LOAD
   - Remove /index.html
   - Remove #hero
============================================================ */
(function cleanUrlOnLoad() {
  const { pathname, hash, search } = window.location;

  let cleanPath = pathname;

  if (cleanPath.endsWith('/index.html')) {
    cleanPath = cleanPath.replace('/index.html', '/');
  }

  const cleanHash = hash === '#hero' ? '' : hash;

  if (cleanPath !== pathname || cleanHash !== hash) {
    const newUrl = SITE_ROOT + cleanPath + search + cleanHash;
    window.history.replaceState(null, '', newUrl);
  }
})();


document.addEventListener('DOMContentLoaded', () => {

  const html = document.documentElement;

  /* ============================================================
     2. THEME TOGGLE
  ============================================================ */
  const themeToggle = document.getElementById('themeToggle');

  if (themeToggle) {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀︎' : '⏾';

    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next    = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      themeToggle.textContent = next === 'dark' ? '☀︎' : '⏾';
    });
  }


  /* ============================================================
     3. MOBILE MENU
  ============================================================ */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  }


  /* ============================================================
     4. INTERCEPT INTERNAL LINKS (Clean Routing)
  ============================================================ */
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Home / Logo links
    if (
      href === '/' ||
      href === 'index.html' ||
      href === '/index.html' ||
      link.classList.contains('nav-logo')
    ) {
      e.preventDefault();

      if (IS_BLOG) {
        window.location.href = SITE_ROOT + '/';
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', SITE_ROOT + '/');
      }
      return;
    }

    // Anchor links (#about, etc.)
    const anchorMatch = href.match(/^#(.+)$/);
    if (anchorMatch) {
      const section = anchorMatch[1];

      e.preventDefault();

      if (IS_BLOG) {
        window.location.href = SITE_ROOT + '/#' + section;
      } else {
        const target = document.getElementById(section);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.pushState(null, '', SITE_ROOT + '/#' + section);
      }
      return;
    }
  });


  /* ============================================================
     5. SCROLL PROGRESS BAR
  ============================================================ */
  const progressBar = document.getElementById('progress-bar');

  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop    = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress     = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    }, { passive: true });
  }


  /* ============================================================
     6. SCROLL REVEAL
  ============================================================ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ============================================================
     7. TIMELINE STAGGER ANIMATION
  ============================================================ */
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


  /* ============================================================
     8. ACTIVE NAV LINK HIGHLIGHT
  ============================================================ */
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!IS_BLOG) {
    const sections = document.querySelectorAll('section[id]');

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.id;

          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const isActive = href === '#' + activeId;
            link.classList.toggle('active', isActive);
          });

          const newHash = activeId === 'hero' ? '' : '#' + activeId;
          window.history.replaceState(null, '', SITE_ROOT + '/' + newHash);
        }
      });
    }, { threshold: 0.45 });

    sections.forEach(s => sectionObserver.observe(s));
  }


  /* ============================================================
     9. CONTACT FORM (Demo)
  ============================================================ */
  // const contactForm = document.getElementById('contactForm');
  // const formStatus  = document.getElementById('formStatus');

  // if (contactForm) {
  //   contactForm.addEventListener('submit', (e) => {
  //     e.preventDefault();

  //     const submitBtn    = contactForm.querySelector('button[type="submit"]');
  //     const originalText = submitBtn.innerHTML;

  //     submitBtn.disabled    = true;
  //     submitBtn.textContent = 'Sending...';

  //     setTimeout(() => {
  //       formStatus.style.display = 'block';
  //       formStatus.textContent   = '✓ Message sent! I\'ll get back to you soon.';
  //       contactForm.reset();
  //       submitBtn.disabled  = false;
  //       submitBtn.innerHTML = originalText;
  //     }, 1200);
  //   });
  // }
  contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formStatus.style.display = 'block';
      formStatus.textContent = '✓ Message sent successfully!';
      contactForm.reset();
    } else {
      throw new Error();
    }
  } catch {
    formStatus.style.display = 'block';
    formStatus.textContent = '✗ Something went wrong. Please email directly.';
  }

  submitBtn.disabled = false;
  submitBtn.innerHTML = originalText;
  });


});