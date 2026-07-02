document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal for sections
const revealTargets = document.querySelectorAll(
  '.study-card, .timeline-item, .skill-group, .edu-item, .about-text, .contact-grid'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => observer.observe(el));
