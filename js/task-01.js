

// варіант 1
const listOfCategories = document.querySelectorAll('.item');
// console.log(listOfCategories);
console.log(`Number of categories: ${listOfCategories.length}`);


// // варіант 2
// const ulCategoriesEl = document.querySelector("#categories");
// const listOfCategoriesV2 = ulCategoriesEl.children;
// // console.log(item2);
// console.log(`Number of categories: ${listOfCategoriesV2.length}`);


const fff = listOfCategories.forEach((El) => {

    console.log(
        `Category: ${ El.firstElementChild.textContent }`);
    console.log(
        `Elements: ${ El.lastElementChild.querySelectorAll("li").length}`);

});