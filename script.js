// Smooth scrolling for internal nav links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });
  
  // Back-to-top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = '↑ Top';
  backToTopBtn.id = 'backToTop';
  backToTopBtn.style.display = 'none';
  document.body.appendChild(backToTopBtn);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Highlight nav link on scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('nav a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
  
    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  