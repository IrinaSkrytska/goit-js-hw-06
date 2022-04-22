const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const MainList = document.createElement("ul");

 ingredients.forEach((ingredient) => {
 const ingredientsList = document.createElement("li");
 ingredientsList.textContent = ingredient;
 const ProductList = ingredientsList.classList.add('item');
  MainList.append(ingredientsList);
  
});

console.log(MainList)

