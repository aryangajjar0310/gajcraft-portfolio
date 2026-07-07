const heroContent = document.querySelector(".hero-content");
const heroDecoration = document.querySelector(".hero-decoration");

window.addEventListener("load", () => {
    heroContent.classList.add("hero-visible");
    heroDecoration.classList.add("hero-visible");
});

const card = document.querySelector(".code-card");

document.addEventListener("mousemove", (event) => {
    const x = (window.innerWidth / 2 - event.clientX) / 40;
    const y = (window.innerHeight / 2 - event.clientY) / 40;

    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

document.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
});
const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);


const animatedSections =
    document.querySelectorAll(
        ".about-section, .services-section, .projects-section, .contact-section"
    );

animatedSections.forEach((section) => {

    observer.observe(section);

});
const revealElements = document.querySelectorAll(
  ".about, .services, .projects, .contact, .service-card, .project"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    menuToggle.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        menuToggle.classList.remove("active");
    });
});