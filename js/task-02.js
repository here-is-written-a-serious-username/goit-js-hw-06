const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ulEl = document.querySelector("#ingredients");

ingredients.map(el => { 

  const liEl = document.createElement("li");
  liEl.textContent = el;
  ulEl.append(liEl);
})

// const liEl = document.createElement("li");
// liEl.textContent = 'Potatoes';

// ulEl.append(liEl);

