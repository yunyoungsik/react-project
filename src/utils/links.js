export function link() {
    document.querySelectorAll("a[href^='#'").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetid = this.getAttribute("href");
            const targetElement = document.querySelector(targetid);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}