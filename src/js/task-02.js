const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector(`#ingredients`);

// const markup = ingredients.map(option => {
//   const item = document.createElement(`li`);
// item.classList.add(`item`);
// item.textContent = option;

// return item;

// });
// listEl.append(...markup);

const makeListEl = (options) => {
  return options.map((option) => {
    const item = document.createElement(`li`);
    item.classList.add(`item`);
    item.textContent = option;

    return item;
  });
};

const markup = makeListEl(ingredients);

listEl.append(...markup);
