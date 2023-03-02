const categoriesList = document.querySelector('#categories');
const cotegoriesCounter = categoriesList.querySelectorAll('li.item').length;

console.log(`Number of categories: ${cotegoriesCounter}`);

categoriesList.querySelectorAll('li.item').forEach(category => {
  const cotegoryHeading = category.querySelector('h2').textContent;
  const elementCount = category.querySelectorAll('li').length;

  console.log(`Category: ${cotegoryHeading}`);
  console.log(`Elements: ${elementCount}`);
});
