///--------------------------1
    
// const categories = document.querySelector('#categories');
    // console.log(`Number of categories: ${categories.children.length}`);
    // const categoriesEl = document.querySelectorAll('li.item');
    // categoriesEl.forEach((category) => {
    //     console.log(`Category: ${category.firstElementChild.textContent}`);
    //     console.log(`Elements: ${category.lastElementChild.children.length}`);
    // });

///---------------------------2

const numberOfCategories = document.querySelectorAll("li.item").length;
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories}`);
categories.forEach((category) => {
      console.log(`Category: ${category.querySelector("h2").textContent}`);
      console.log(`Elements: ${category.querySelectorAll("li").length}`);
})