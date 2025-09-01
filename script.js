// Simple smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  // Change button text/icon
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
// Typing Effect
const typingText = document.getElementById("typing-text");
const textArray = ["Aspiring Data Analyst", "Full Stack Developer", "Lifelong Learner"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// 📊 Counter Animation for Stats
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");
  let triggered = false;

  const runCounter = () => {
    counters.forEach(counter => {
      counter.innerText = "0";
      let target = +counter.getAttribute("data-target");
      let step = Math.ceil(target / 100); // smooth speed

      const updateCounter = () => {
        let current = +counter.innerText;
        if (current < target) {
          counter.innerText = current + step;
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target; // ensure exact value
        }
      };

      updateCounter();
    });
  };

  // 👀 Run when stats section comes in view
  window.addEventListener("scroll", () => {
    const statsSection = document.getElementById("stats");
    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && !triggered) {
      runCounter();
      triggered = true;
    }
  });
});

// Scroll Progress Function
window.onscroll = function() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});




