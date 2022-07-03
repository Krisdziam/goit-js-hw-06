const listEl = document.querySelector(`#categories`);
console.log(`Number of categories:`, listEl.children.length)



const itemEl = document.querySelectorAll('.item');


itemEl.forEach(event => {
    console.log('Category:', event.firstElementChild.textContent);
    console.log('Elements:', event.lastElementChild.children.length);
  });




