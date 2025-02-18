// Select all accordion buttons inside list items
const accordions = document.querySelectorAll(".accordion-btn");

accordions.forEach(button => {
    button.addEventListener("click", function() {
        // Toggle the visibility of the next element (accordion content)
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});