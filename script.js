// Smooth Scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

// Contact Button
function showMessage() {
    const message = document.getElementById("message");

    message.innerHTML =
        "😊 Thank you for visiting my portfolio. Feel free to contact me for internships, collaborations, or software development opportunities!";

    message.style.color = "#2563eb";
    message.style.fontWeight = "600";
}

// Highlight Active Navigation Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});