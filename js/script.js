document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('#skills');
    const skillBars     = skillsSection.querySelectorAll('.skill-bar');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillBars.forEach(bar => bar.classList.add('animate'));
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(skillsSection);
  });
  
