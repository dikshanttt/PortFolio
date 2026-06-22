const projectItems = [
  {
    title: 'HAMS',
    description: 'Hospital appointment management system with focused scheduling and admin workflow.',
    link: 'https://github.com/dikshanttt/HAMS'
  },
  {
    title: 'Dating App',
    description: 'A polished matchmaking interface with responsive cards and clean user flow.',
    link: 'https://github.com/dikshanttt/Dating-App'
  },
  {
    title: 'Hotel & Restaurant Website',
    description: 'A premium hospitality landing page with strong visual hierarchy and responsive layout.',
    link: 'https://sites.google.com/view/7-cross/home/'
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'A classic browser game built with interactive logic and mobile-friendly play.',
    link: 'https://github.com/dikshanttt/Tic-Tac-Toe'
  },
  {
    title: 'To-Do List',
    description: 'A task manager built for clarity, quick interaction, and polished presentation.',
    link: 'https://github.com/dikshanttt'
  },
  {
    title: 'Auction Platform',
    description: 'An auction-style interface with a strong product spotlight and clean user cues.',
    link: 'https://github.com/dikshanttt/Auction'
  }
];

const skillItems = [
  { title: 'HTML', details: 'Structured layouts with semantic markup.', icon: '🌐' },
  { title: 'CSS', details: 'Custom visuals, motion, and responsive design.', icon: '✨' },
  { title: 'JavaScript', details: 'Interactive UI and browser-first experience.', icon: '⚡' },
  { title: 'Node.js', details: 'Server-side logic and API foundations.', icon: '🌀' },
  { title: 'PHP', details: 'Backend flows and form-driven interactions.', icon: '🛠️' },
  { title: 'Python', details: 'Scripting, automation, and backend support.', icon: '🐍' }
];

function mountProjectCards() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projectItems
    .map((project, index) => `
      <article class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">View project</a>
      </article>
    `)
    .join('');
}

function mountSkillCards() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = skillItems
    .map(skill => `
      <article class="skill-card">
        <div class="skill-icon">${skill.icon}</div>
        <div>
          <h3>${skill.title}</h3>
          <p>${skill.details}</p>
        </div>
      </article>
    `)
    .join('');
}

function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-list a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === currentPage);
  });
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', event => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'All fields are required before sending.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      status.textContent = 'Please enter a valid email address.';
      return;
    }

    status.textContent = `Thanks, ${name}! Your message is ready for review.`;
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  highlightCurrentPage();
  mountProjectCards();
  mountSkillCards();
  setupContactForm();
});
