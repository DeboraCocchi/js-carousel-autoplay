const paintingsArray = [
  'vangogh.jpeg',
  'bruegel.jpeg',
  'dali.jpeg',
  'magritte.jpeg',
  'cabanel.jpeg',
];


let paintingsTags = '';
const paintings = document.querySelector('.paintings');

// costruisco le stringhe dei tag img da inserire nel div paintings
for(let i=0; i<paintingsArray.length;i++){
  paintingsTags += `
  <img class="item" src="img/${paintingsArray[i]}" alt="${paintingsArray[i]}">
  `;
}

// inserisco la maxi stringa concatenata di tag creati con literals
paintings.innerHTML=paintingsTags;



// miniature

let miniatureTag = '';

const miniatures = document.querySelector('.miniatures');
const miniPaintingsList =document.createElement('ul');
miniatures.append(miniPaintingsList);
const ShadowContainer = document.createElement('div');
ShadowContainer.className='shadow';


for (let i=0;i<paintingsArray.length;i++){
  miniatureTag = `<img src="img/${paintingsArray[i]}" alt="${paintingsArray[i]}"><div class="shadow active"></div>`;
  const miniCards = document.createElement('li');
  miniCards.className='mini-item';
  miniCards.append(ShadowContainer);
  miniPaintingsList.append(miniCards);
  miniCards.innerHTML=miniatureTag;
};


// // ciclo

// caratteristiche del default sul primo dipinto; inizializzo il contatore

let counterPainting = 0;
const items = document.getElementsByClassName('item');
items[counterPainting].classList.add('active');
const miniItems = document.getElementsByClassName('mini-item');
miniItems[counterPainting].classList.add('active');
const up = document.querySelector('.arrow.up');
const down = document.querySelector('.arrow.down');

down.addEventListener('click', function(){
  items[counterPainting].classList.remove('active');
  miniItems[counterPainting].classList.remove('active');
  if(counterPainting=== paintingsArray.length -1){
    counterPainting=0;
  }else{  
  ++counterPainting;}
  items[counterPainting].classList.add('active');
  miniItems[counterPainting].classList.add('active');

});

up.addEventListener('click', function(){
  items[counterPainting].classList.remove('active');
  miniItems[counterPainting].classList.remove('active');
  if(counterPainting===0){
    counterPainting=paintingsArray.length -1;
  }else{  
  --counterPainting;}
  items[counterPainting].classList.add('active');
  miniItems[counterPainting].classList.add('active');
});

let paintingAutoShow;
paintingAutoShow = setInterval(selfShow, 2000);


function selfShow(){
  items[counterPainting].classList.remove('active');
  miniItems[counterPainting].classList.remove('active');
  if(counterPainting=== paintingsArray.length -1){
    counterPainting=0;
  }else{  
  ++counterPainting;}
  items[counterPainting].classList.add('active');
  miniItems[counterPainting].classList.add('active');

  const activeElement = document.querySelector('.item.active');
  activeElement.addEventListener('mouseover', mouseover);
  activeElement.addEventListener('mouseout', mouseout);
}


function mouseover(){
  clearInterval(paintingAutoShow);
}

function mouseout(){
  paintingAutoShow = setInterval(selfShow, 2000);
}
