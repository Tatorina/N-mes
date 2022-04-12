const sliderDiv = document.querySelector('.slider__list');
const sliderLength = sliderDiv.children.length - 1;
const sliderImg = document.querySelectorAll('.slider__list--item');


sliderImg.forEach(item => {
  item.addEventListener('click', (event) => {
    classChange(+document.querySelector('._big').id, event.target.id);
  })
});

// sliderDiv.addEventListener('click', (event) =>  {
//   if (event.target.id){
//     classChange(+document.querySelector('._big').id, event.target.id);
//   }   
// });

function slider(str) {
  let j;
  let activeId = +document.querySelector('._big').id;
  if (str === "left"){
    j = (sliderLength + activeId) % (sliderLength + 1);
  } else if (str === "right") {
    j = (activeId + 1) % (sliderLength + 1);
  }
  classChange(activeId, j);
};

function classChange(i, j) {
  if (i != j){
    sliderDiv.children[j].classList.add('_big');
    sliderDiv.children[i].classList.remove('_big');
  }
};

