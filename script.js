// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkToggle');
    const current = localStorage.getItem('theme');
  
    if (current === 'dark') document.body.classList.add('dark');
  
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
  });
  