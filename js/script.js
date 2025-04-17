var colors = ["color-1", "color-2", "color-3"];
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Youtuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    preStringTyped: function(pos, self) {
        // Get the element where the text is being typed
        var element = document.querySelector(".text");

        // Remove all previous color classes
        colors.forEach(color => element.classList.remove(color));

        // Add the appropriate color class based on the current string index
        element.classList.add(colors[pos % colors.length]);
    }
});
const text = "Welcome...";
const container = document.getElementById('welcome-text');

text.split('').forEach((char, index) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.className = 'letter';
  span.style.animationDelay = `${index * 0.1}s`; // Delay each letter
  container.appendChild(span);
});

// menu toogle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Toggle between showing and hiding the menu
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
    }
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
          top: targetElement.offsetTop - 100, // Adjust this offset as needed
          behavior: 'smooth'
      });
  });
});
let currentSlide = 0; // Start with the first slide
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // Hide all slides
    if (i === index) {
      slide.classList.add('active'); // Show the current slide
    }
  });
}

function moveSlide(step) {
  currentSlide += step;
  if (currentSlide < 0) currentSlide = slides.length - 1; // Wrap around to the last slide
  if (currentSlide >= slides.length) currentSlide = 0; // Wrap around to the first slide
  showSlide(currentSlide);
}

// Initial slide display
showSlide(currentSlide);
