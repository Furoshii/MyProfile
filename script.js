
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const emptyMessage = document.querySelector("#empty-message");
const currentYear = document.querySelector("#current-year");

function filterProjects(category) {
    let visibleCount = 0;

    projectCards.forEach((card) => {
        const matchesCategory =
            category === "all" ||
            card.dataset.category === category;

        card.hidden = !matchesCategory;

        if (matchesCategory) {
            visibleCount++;
        }
    });

    emptyMessage.hidden = visibleCount > 0;
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.filter;

        filterButtons.forEach((item) => {
            const isActive = item === button;

            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        filterProjects(category);
    });
});

// Automatically show the current year in the footer.
currentYear.textContent = new Date().getFullYear();
