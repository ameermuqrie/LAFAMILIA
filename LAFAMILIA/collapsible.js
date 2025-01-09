document.addEventListener("DOMContentLoaded", () => {
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector(".icon");

            // Toggle 'show' class for content visibility
            if (content.classList.contains("show")) {
                content.classList.remove("show");
                icon.classList.remove("rotate");
            } else {
                content.classList.add("show");
                icon.classList.add("rotate");
            }
        });
    });
});
