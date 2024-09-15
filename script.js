const FAQs = document.querySelectorAll(".faq"); // Use querySelectorAll to get all elements with class "faq"
FAQs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active"); // Toggle the 'active' class on click
    });
});