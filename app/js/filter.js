const itemsFilter = document.querySelectorAll(".completed-projects__item");

showTag = (event, tag) => {
  for (let i = 0; i < itemsFilter.length; i++) {
    if (itemsFilter[i].dataset.tags.includes(tag)) {
      itemsFilter[i].style.display = "block";
    } else {
      itemsFilter[i].style.display = "none";
    }
  }
};

document
  .querySelector(".filter__terrestrial-scanning")
  .addEventListener("click", (event) => showTag(event, "terrestrial-scanning"));
document
  .querySelector(".filter__aerial-photography")
  .addEventListener("click", (event) => showTag(event, "aerial-photography"));
document
  .querySelector(".filter__engineering-survey")
  .addEventListener("click", (event) => showTag(event, "engineering-survey"));
document
  .querySelector(".filter__cartography")
  .addEventListener("click", (event) => showTag(event, "cartography"));
document
  .querySelector(".filter__land-management")
  .addEventListener("click", (event) => showTag(event, "land-management"));
document
  .querySelector(".filter__all")
  .addEventListener("click", (event) => showTag(event, "all"));
