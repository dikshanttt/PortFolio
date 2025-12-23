// User data and UI elements update
const user = {
  name: "Dikshant",
  intro: "I'm a BCA 2nd Semester student<br>Passionate about code and creativity.",
  image: "dikshant1.jpeg"
};

function updateIntro() {
  const userNameElem = document.getElementById('user-name');
  const userIntroElem = document.getElementById('user-intro');
  const profileImg = document.querySelector('.profile img');

  if (userNameElem) userNameElem.textContent = user.name;
  if (userIntroElem) userIntroElem.innerHTML = user.intro;
  if (profileImg) profileImg.src = user.image;
}

function buildNav() {
  const navLinks = [
    { name: "Home", href: "index.html" },
    { name: "Projects", href: "projects.html" },
    { name: "Contact", href: "contact.html" }
  ];

  const nav = document.querySelector(".nav-links");
  if (!nav) return;

  nav.innerHTML = "";
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.name;
    if (link.href === currentPath) a.classList.add('active');
    li.appendChild(a);
    nav.appendChild(li);
  });
  
}

function buildSkills() {
  const skills = [
    { name: "HTML", img: "Html.webp" },
    { name: "CSS", img: "Css.webp" },
    { name: "JavaScript", img: "js.jpg" },
    { name: "C", img: "c.webp" }
  ];

  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = "";
  skills.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill";
    div.setAttribute('role', 'listitem');
    div.innerHTML = `<img src="${skill.img}" alt="${skill.name} logo" />`;
    container.appendChild(div);
  });
}

function buildSocials() {
  const socials = [
    { name: "GitHub", icon: "github.jpg", link: "https://github.com/dikshanttt" },
    { name: "LinkedIn", icon: "linkedin.png", link: "https://www.linkedin.com/in/दिक्षान्त-लामा-3524872b1/" }
  ];

  const container = document.querySelector(".social-icons");
  if (!container) return;

  container.innerHTML = "";
  socials.forEach(s => {
    const a = document.createElement("a");
    a.href = s.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute('aria-label', s.name);
    a.setAttribute('role', 'listitem');
    a.innerHTML = `<img src="${s.icon}" alt="${s.name} profile" />`;
    container.appendChild(a);
  });
}

function buildProjects() {
  const projects = [
    {
      img: "Hive-task-management-software-1024x605.png",
      title: "Project One",
      description: "A web application for task management",
      link: "https://github.com/dikshanttt"
    },
    {
      img: "hotel.jpg",
      title: "Project Two",
      description: "A hotel and restaurant website",
      link: "https://sites.google.com/view/7-cross/home/"
    },
    {
      img: "free-responsive-website-templates-html5-css3.webp",
      title: "Project Three",
      description: "A responsive business website",
      link: "https://github.com/dikshanttt"
    },
    {
      img: "unnamed.png",
      title: "Project Four",
      description: "Tic-Tac-Toe Game",
      link: "https://github.com/dikshanttt"
    },
    {
      img: "todo.png",
      title: "Project Five",
      description: "To-Do List App",
      link: "https://github.com/dikshanttt"
    },
    {
      img: "tyy.png",
      title: "Project Six",
      description: "Typing Speed Test",
      link: "https://github.com/dikshanttt"
    }
  ];

  const container = document.querySelector(".projects-container");
  if (!container) return;

  container.innerHTML = "";
  projects.forEach((project, i) => {
    const card = document.createElement("a");
    card.className = `project-card fade-in delay-${(i % 5) + 1}`;
    card.href = project.link;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.setAttribute('aria-label', `Link to ${project.title} GitHub repository`);
    card.innerHTML = `
      <img src="${project.img}" alt="${project.title} screenshot" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    container.appendChild(card);
  });

  
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const messageBox = document.getElementById("form-message");
  if (!form || !messageBox) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    messageBox.style.display = "none";
    messageBox.textContent = "";

    if (!name || !email || !message) {
      messageBox.style.color = "red";
      messageBox.textContent = "Please fill in all the fields.";
      messageBox.style.display = "block";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      messageBox.style.color = "red";
      messageBox.textContent = "Please enter a valid email address.";
      messageBox.style.display = "block";
      return;
    }

    // Simulate form submission success
    messageBox.style.color = "#00ffff";
    messageBox.textContent = `Thanks for reaching out, ${name}! Your message has been submitted.`;
    messageBox.style.display = "block";
    form.reset();
  });
}

// Initialize all
document.addEventListener("DOMContentLoaded", () => {
  updateIntro();
  buildNav();
  buildSkills();
  buildSocials();
  buildProjects();
  setupContactForm();
});
