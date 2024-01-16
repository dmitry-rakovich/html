// MENU
const mobileMenuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

mobileMenuButton.addEventListener("click", () => {
  if (navigation.style.display !== "flex") {
    navigation.style.display = "flex";
  } else {
    navigation.style.display = "none";
  }
});

// SEARCH
const searchButton = document.querySelector(".search-button");
const search = document.querySelector(".search");

searchButton.addEventListener("click", () => {
  if (search.style.display !== "flex") {
    search.style.display = "flex";
  } else {
    search.style.display = "none";
  }
});

// DROPDOWN
const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const dropdownLists = document.querySelectorAll(".dropdown-list");

dropdownBtns.forEach((button) =>
  button.addEventListener("click", (e) => {
    const dropdownList = e.target.nextElementSibling;
    if (dropdownList.style.display === "block") {
      dropdownList.style.display = "none";
    } else {
      dropdownList.style.display = "block";
    }
  })
);

// FILTERS
const filtersButton = document.querySelector(".filters-button");
const closeFiltersButton = document.querySelector(".close-filters");
const submitFiltersButton = document.querySelector(".submit-filters");
const filters = document.querySelector(".filters-mobile");

filtersButton.addEventListener("click", () => {
  filters.style.display = "flex";
  document.body.style.overflow = "hidden";
});

submitFiltersButton.addEventListener("click", closeFilters);
closeFiltersButton.addEventListener("click", closeFilters);

function closeFilters() {
  filters.style.display = "none";
  document.body.style.overflow = "";
}
