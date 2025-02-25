/**
 * Targets elements and whenever are clicked, toggles the class 'open' to show/hide the menu.
 */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// -------------------------------------------------
// Typewriter Effect
// -------------------------------------------------
function typeWriter(element, text, speed) {
  let i = 0;
  /**
   * Types every character of the text inside the element with a delay of 'speed' milliseconds.
   */
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed); // Recursive call that schedules the next call in 'speed' milliseconds
    }
  }
  type();
}

// -------------------------------------------------
// Particles Effect
// -------------------------------------------------
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 250;

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Create Particle Class
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 4 + 1;
    this.speedX = (Math.random() - 0.5) * 2;
    this.speedY = (Math.random() - 0.5) * 2;
    this.color = getRandomColor(); // Assign random color
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x <= 0 || this.x >= canvas.width) this.speedX *= -1;
    if (this.y <= 0 || this.y >= canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Initialize Particles
function init() {
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

// Animate Particles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animate);
}

// Resize Canvas on Window Resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles.length = 0; // Clear and reinitialize particles
  init();
});

/**
 * Toggles between light mode and dark mode.
 */
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
}

// Call functions when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme + "-mode");
  // Call the typeWriter function after 1 sec delay.
  setTimeout(function () {
    const element = document.querySelector(".text__p2");
    const text = "Software Developer";
    const speed = 100;
    typeWriter(element, text, speed);
  }, 1000);
  init();
  animate();
});
