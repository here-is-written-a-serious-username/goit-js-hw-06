const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ulEl = document.querySelector("#ingredients");

const liArray = [];

ingredients.map(el => { 

  const liEl = document.createElement("li");
  liEl.textContent = el;
  liArray.push(liEl);
})

ulEl.append(...liArray);

// const liEl = document.createElement("li");
// liEl.textContent = 'Potatoes';

// ulEl.append(liEl);

