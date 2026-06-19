// ===== NAVBAR SCROLL EFFECT =====
const header = document.getElementById('header');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 5px 30px rgba(0,0,0,0.3)';
  } else {
    header.style.boxShadow = 'none';
  }

  // Scroll to top button
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#e50914';
    }
  });
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  const navLinksEl = document.querySelector('.nav-links');
  navLinksEl.style.display = navLinksEl.style.display === 'flex' ? 'none' : 'flex';
  navLinksEl.style.flexDirection = 'column';
  navLinksEl.style.position = 'absolute';
  navLinksEl.style.top = '70px';
  navLinksEl.style.left = '0';
  navLinksEl.style.right = '0';
  navLinksEl.style.background = 'rgba(5,5,5,0.98)';
  navLinksEl.style.padding = '20px 24px';
  navLinksEl.style.gap = '16px';
  navLinksEl.style.borderBottom = '1px solid rgba(229,9,20,0.28)';
});

// ===== SKILL BAR ANIMATION ON SCROLL =====
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.5 });

skillFills.forEach(fill => {
  fill.style.animationPlayState = 'paused';
  skillObserver.observe(fill);
});

// ===== FADE IN ANIMATION ON SCROLL =====
const fadeEls = document.querySelectorAll('.project-card, .skills-category, .contact-card');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 100);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeObserver.observe(el);
});

// ===== CONTACT FORM =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fas fa-check"></i> Жіберілді!';
  btn.style.background = 'linear-gradient(135deg, #e50914 0%, #8b0008 100%)';
  setTimeout(() => {
    btn.innerHTML = 'Жіберу <i class="fas fa-paper-plane"></i>';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ===== SMOOTH SCROLL FOR SAFARI =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
