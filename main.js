document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Nav scroll border ── */
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ── Active nav link ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });

  /* ── Mobile menu ── */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Contact form submission ── */
  const form = document.querySelector('form.contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('.btn--primary');
      const note = form.querySelector('.form-note');
      const original = btn.textContent;

      btn.textContent = 'Sending…';
      btn.disabled = true;

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: new FormData(form),
        });
        const json = await res.json();

        if (json.success) {
          btn.textContent = 'Message Sent ✓';
          btn.style.background = '#16a34a';
          btn.style.borderColor = '#16a34a';
          if (note) note.textContent = 'Thanks — we\'ll be in touch within 24 hours.';
          form.reset();
          setTimeout(() => {
            btn.textContent = original;
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.disabled = false;
            if (note) note.textContent = 'We usually respond within 24 business hours.';
          }, 4000);
        } else {
          throw new Error('Submission failed');
        }
      } catch {
        btn.textContent = 'Something went wrong — try again';
        btn.style.background = '#dc2626';
        btn.style.borderColor = '#dc2626';
        setTimeout(() => {
          btn.textContent = original;
          btn.style.background = '';
          btn.style.borderColor = '';
          btn.disabled = false;
        }, 3500);
      }
    });
  }

  if (reducedMotion) return;

  /* ── Hero entrance (index only) ── */
  const heroContent = document.querySelector('.hero__content');
  if (heroContent) {
    const els = heroContent.querySelectorAll('.hero__pill, .hero__headline, .hero__sub, .hero__ctas');
    gsap.from(els, {
      opacity: 0,
      y: 22,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.18,
      delay: 0.15,
    });
  }

  /* ── About entrance ── */
  const aboutInner = document.querySelector('.about-hero__inner');
  if (aboutInner) {
    gsap.from(aboutInner.children, {
      opacity: 0,
      y: 22,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      delay: 0.2,
    });
  }

  /* ── Contact entrance ── */
  const contactLeft = document.querySelector('.contact-left');
  const contactForm = document.querySelector('.contact-form');
  if (contactLeft) {
    gsap.from([contactLeft, contactForm], {
      opacity: 0,
      y: 22,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      delay: 0.2,
    });
  }

  /* ── Scroll fade-up for all .fade-up elements ── */
  gsap.utils.toArray('.fade-up').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 87%',
        once: true,
      },
    });
  });

  /* ── Staggered children in .fade-up-group ── */
  gsap.utils.toArray('.fade-up-group').forEach(group => {
    gsap.from(group.querySelectorAll('.fade-up-item'), {
      opacity: 0,
      y: 28,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.16,
      scrollTrigger: {
        trigger: group,
        start: 'top 85%',
        once: true,
      },
    });
  });

  /* ── Work CTA fade-in ── */
  const workCta = document.querySelector('.work-cta');
  if (workCta) {
    gsap.from(workCta, {
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: workCta,
        start: 'top 88%',
        once: true,
      },
    });
  }

});
