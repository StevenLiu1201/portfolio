// Loading screen
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  setTimeout(() => {
    loading.classList.add("fade-out");
  }, 1000);
});

// Typing animation
const texts = [
  "React & Node.js",
  "Database Design",
  "Web Accessbility",
  "Html5 & CSS",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typingText");

function typeText() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => (isDeleting = true), 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  const typeSpeed = isDeleting ? 50 : 100;
  setTimeout(typeText, typeSpeed);
}

typeText();

// Floating particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = Math.random() * 10 + 15 + "s";
    particlesContainer.appendChild(particle);
  }
}

createParticles();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    //remove active on nav links for mobile view
    document.querySelector(".nav-links").classList.remove("active");

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submission
// document
//   .querySelector(".contact-form")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Get form data
//     const formData = new FormData(this);
//     const name = formData.get("name");
//     const email = formData.get("email");
//     const message = formData.get("message");

//     // Simulate form submission
//     const submitBtn = this.querySelector('button[type="submit"]');
//     const originalText = submitBtn.textContent;
//     submitBtn.textContent = "Sending...";
//     submitBtn.disabled = true;

//     setTimeout(() => {
//       alert("Thank you for your message! I'll get back to you soon.");
//       this.reset();
//       submitBtn.textContent = originalText;
//       submitBtn.disabled = false;
//     }, 2000);
//   });

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.style.background = "rgba(10, 10, 10, 0.95)";
  } else {
    nav.style.background = "rgba(10, 10, 10, 0.9)";
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".project-card, .about-text, .about-visual")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// for mobile responsive hamburger btn
document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// for certificate

const certificates = [
  {
    image: "./img/certificates/javascript_intermediate certificate.png",
    title: "JavaScript",
    issuer: "HackerRank",
    alt: "JavaScript",
    description:
      "Full-stack web development certification covering HTML5, CSS3, JavaScript, Node.js, and database management. Completed 300+ hours of coursework and 5 real-world projects.",
  },
  {
    image: "./img/certificates/java_basic certificate.png",
    title: "Java Basic",
    issuer: "HackerRank",
    alt: "Java",
    description:
      "Comprehensive certification covering React fundamentals, state management, hooks, component architecture, and modern development practices. Completed advanced projects including single-page applications and full-stack integrations.",
  },
  {
    image:
      "./img/certificates/SQL_Intermediate Certificate.png",
    title: "SQL",
    issuer: "HackerRank",
    alt: "SQL",
    description:
      "Advanced Python programming certification including data structures, algorithms, web frameworks, and machine learning fundamentals. Completed 200+ coding challenges and 3 capstone projects.",
  },
  // {
  //   image:
  //     "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  //   title: "AWS Solutions Architect",
  //   issuer: "Amazon",
  //   alt: "AWS",
  //   description:
  //     "Professional-level AWS certification covering cloud architecture, security, scalability, and cost optimization. Hands-on experience with EC2, S3, Lambda, and other AWS services.",
  // },
  // {
  //   image: "https://developers.google.com/static/identity/images/g-logo.png",
  //   title: "Mobile App Development",
  //   issuer: "Google",
  //   alt: "Google",
  //   description:
  //     "Mobile development certification covering Android and cross-platform development. Expertise in Kotlin, Java, Flutter, and mobile UI/UX principles.",
  // },
  // {
  //   image:
  //     "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
  //   title: "UI/UX Design",
  //   issuer: "Adobe",
  //   alt: "Adobe",
  //   description:
  //     "Design certification covering user experience research, wireframing, prototyping, and visual design. Proficient in Adobe Creative Suite and modern design tools.",
  // },
];

let currentIndex = 0;
let isAnimating = false;

function createCertificateElement(cert, className = "") {
  const certDiv = document.createElement("div");
  certDiv.className = `certificate ${className}`;
  certDiv.innerHTML = `
                <div class="certificate-content">
                    <img src="${cert.image}" alt="${cert.alt}" class="certificate-image">
                    <div class="certificate-title">${cert.title}</div>
                    <div class="certificate-issuer">${cert.issuer}</div>
                </div>
            `;
  return certDiv;
}

function initializeCarousel() {
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  // Create visible certificates (previous, current, next)
  const prevIndex =
    (currentIndex - 1 + certificates.length) % certificates.length;
  const nextIndex = (currentIndex + 1) % certificates.length;

  const prevCert = createCertificateElement(certificates[prevIndex], "side");
  const currentCert = createCertificateElement(
    certificates[currentIndex],
    "center"
  );
  const nextCert = createCertificateElement(certificates[nextIndex], "side");

  carousel.appendChild(prevCert);
  carousel.appendChild(currentCert);
  carousel.appendChild(nextCert);

  // Reset transform - let CSS handle the centering
  carousel.style.transform = "translateX(0)";

  updateDetails(certificates[currentIndex]);
}

function updateCarousel(direction = "next") {
  if (isAnimating) return;
  isAnimating = true;

  const carousel = document.getElementById("carousel");
  const certificateWidth = 310; // 280px + 30px gap

  if (direction === "next") {
    // Slide to the left
    carousel.style.transform = `translateX(-${certificateWidth}px)`;

    setTimeout(() => {
      // Remove the first certificate and add a new one at the end
      const firstCert = carousel.firstElementChild;
      carousel.removeChild(firstCert);

      currentIndex = (currentIndex + 1) % certificates.length;
      const newIndex = (currentIndex + 1) % certificates.length;
      const newCert = createCertificateElement(certificates[newIndex], "side");
      carousel.appendChild(newCert);

      // Reset position without animation
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)";

      // Update center certificate styling
      updateCertificateClasses();
      updateDetails(certificates[currentIndex]);

      // Re-enable animation
      setTimeout(() => {
        carousel.style.transition =
          "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        isAnimating = false;
      }, 50);
    }, 600);
  } else {
    // Slide to the right
    carousel.style.transform = `translateX(${certificateWidth}px)`;

    setTimeout(() => {
      // Remove the last certificate and add a new one at the beginning
      const lastCert = carousel.lastElementChild;
      carousel.removeChild(lastCert);

      currentIndex =
        (currentIndex - 1 + certificates.length) % certificates.length;
      const newIndex =
        (currentIndex - 1 + certificates.length) % certificates.length;
      const newCert = createCertificateElement(certificates[newIndex], "side");
      carousel.insertBefore(newCert, carousel.firstElementChild);

      // Reset position without animation
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)";

      // Update center certificate styling
      updateCertificateClasses();
      updateDetails(certificates[currentIndex]);

      // Re-enable animation
      setTimeout(() => {
        carousel.style.transition =
          "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        isAnimating = false;
      }, 50);
    }, 600);
  }
}

function updateCertificateClasses() {
  const carousel = document.getElementById("carousel");
  const certificates = carousel.children;

  if (certificates.length >= 3) {
    certificates[0].className = "certificate side";
    certificates[1].className = "certificate center";
    certificates[2].className = "certificate side";
  }
}

function updateDetails(cert) {
  document.getElementById("detailsTitle").textContent =
    cert.title + " Certification";
  document.getElementById("detailsDescription").textContent = cert.description;
}

function nextCertificate() {
  updateCarousel("next");
}

function previousCertificate() {
  updateCarousel("prev");
}

// Initialize carousel when page loads
window.addEventListener("load", () => {
  initializeCarousel();
});

// Handle window resize
window.addEventListener("resize", () => {
  if (!isAnimating) {
    initializeCarousel();
  }
});

// Initialize carousel
setTimeout(() => {
  initializeCarousel();
}, 100);

// Optional: Auto-rotate every 5 seconds
// setInterval(() => {
//   if (!isAnimating) {
//     nextCertificate();
//   }
// }, 5000);
