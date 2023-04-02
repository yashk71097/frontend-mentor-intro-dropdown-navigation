const menuButton = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".primary-navigation");

const features = document.querySelector(".features");
console.log(features);

const featuresDropdown = document.querySelector(".features-dropdown");
console.log(featuresDropdown);

const company = document.querySelector(".company");
console.log(company);

const companyDropdown = document.querySelector(".company-dropdown");
console.log(companyDropdown);

const arrow = document.querySelectorAll(".arrow-image");
console.log(arrow);

function openFeaturesDropdown() {
    featuresDropdown.classList.remove("hidden");
    featuresDropdown.classList.add("show");
    arrow[0].setAttribute("src", "./images/icon-arrow-up.svg");
}

function closeFeaturesDropdown() {
    featuresDropdown.classList.remove("show");
    featuresDropdown.classList.add("hidden");
    arrow[0].setAttribute("src", "./images/icon-arrow-down.svg");
}

function openCompanyDropdown() {
    companyDropdown.classList.remove("hidden");
    companyDropdown.classList.add("show");
    arrow[1].setAttribute("src", "./images/icon-arrow-up.svg");
}

function closeCompanyDropdown() {
    companyDropdown.classList.remove("show");
    companyDropdown.classList.add("hidden");
    arrow[1].setAttribute("src", "./images/icon-arrow-down.svg");
}

menuButton.addEventListener("click", () => {
    const visibility = navLinks.getAttribute("data-visible");
    if (visibility === "false") {
        menuButton.setAttribute("aria-expanded", true);
        navLinks.setAttribute("data-visible", true);
    } else if (visibility === "true") {
        menuButton.setAttribute("aria-expanded", false);
        navLinks.setAttribute("data-visible", false);
    }
});

features.addEventListener("click", () => {
    if (featuresDropdown.classList.contains("hidden")) {
        openFeaturesDropdown();
        closeCompanyDropdown();
    } else {
        closeFeaturesDropdown();
    }
});

company.addEventListener("click", () => {
    if (companyDropdown.classList.contains("hidden")) {
        openCompanyDropdown();
        closeFeaturesDropdown();
    } else {
        closeCompanyDropdown();
    }
});
