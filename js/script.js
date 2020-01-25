let btnCreateNewGrid = document.createElement('button');
btnCreateNewGrid.textContent = 'Create New Grid';
document.body.appendChild(btnCreateNewGrid);

let btnRandomColor = document.createElement('button');
btnRandomColor.textContent = 'Random Color';
document.body.appendChild(btnRandomColor);
        
let btnBlack = document.createElement('button');
btnBlack.textContent = 'Black Color';
document.body.appendChild(btnBlack);

let btnErase = document.createElement('button');
btnErase.textContent = 'Erase/White';
document.body.appendChild(btnErase);

let restartBtn = document.createElement('button');
restartBtn.textContent = 'reset';
document.body.appendChild(restartBtn);
        
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
wrapper.style.width = '30rem';
wrapper.style.height = '30rem';
wrapper.style.margin = '2rem auto';
wrapper.style.border = '1px solid gray';
document.body.appendChild(wrapper);
        
let num = 16;

function createItems(){
  for(let i = 0; i < num*num; i++) {
    let item = document.createElement('div');
    wrapper.appendChild(item);
    item.style.width = ((30/num)*100)/30 + '%';
    item.style.height = ((30/num)*100)/30 + '%';
    item.style.border = '1px solid lightgray';
    
  }
}

let fields = wrapper.childNodes;
        

function addBlackColor(){
  fields.forEach((fields) => {
    fields.addEventListener('mouseover', function(){
      fields.style.backgroundColor = 'black';
    })
  })
}

function addRandomColor(){
  fields.forEach((fields) => {
    fields.addEventListener('mouseover', function(){
      let getRandomColorHex = function(){
          let red = Math.floor(Math.random() * 256);
          let green = Math.floor(Math.random() * 256);
          let blue = Math.floor(Math.random() * 256);
          return `rgb(${red}, ${green}, ${blue})`;
      };
      fields.style.backgroundColor = getRandomColorHex();
    })
  })
}

function erase() {
  fields.forEach((fields) => {
    fields.addEventListener('mouseover', function(){
      fields.style.backgroundColor = 'white';
    })
  })
}


function black10Per(){
  
  fields.forEach((field) => {
    
    field.addEventListener('mouseover', function(){  
      if(field.style.backgroundColor === '') {
        field.style.backgroundColor = 'rgb(230, 230, 230)';
      } else if(field.style.backgroundColor === 'rgb(230, 230, 230)') {
        field.style.backgroundColor = 'rgb(204, 204, 204)';
      } else if(field.style.backgroundColor === 'rgb(204, 204, 204)') {
        field.style.backgroundColor = 'rgb(179, 179, 179)';
      } else if(field.style.backgroundColor === 'rgb(179, 179, 179)') {
        field.style.backgroundColor = 'rgb(153, 153, 153)';
      } else if(field.style.backgroundColor === 'rgb(153, 153, 153)') {
        field.style.backgroundColor = 'rgb(128, 128, 128)';
      } else if(field.style.backgroundColor === 'rgb(128, 128, 128)') {
        field.style.backgroundColor = 'rgb(102, 102, 102)';
      } else if(field.style.backgroundColor === 'rgb(102, 102, 102)') {
        field.style.backgroundColor = 'rgb(77, 77, 77)';
      } else if(field.style.backgroundColor === 'rgb(77, 77, 77)') {
        field.style.backgroundColor = 'rgb(51, 51, 51)';
      } else if(field.style.backgroundColor === 'rgb(51, 51, 51)') {
        field.style.backgroundColor = 'rgb(26, 26, 26)';
      } else {
        field.style.backgroundColor = 'black';
      }
    });
  });
}        

//on page load       
function createGrid() {
  createItems();
  black10Per();          
}

btnBlack.addEventListener('click', addBlackColor);

btnRandomColor.addEventListener('click', addRandomColor);

btnErase.addEventListener('click', erase);
        
btnCreateNewGrid.addEventListener('click', function(){
  //clears previous grid
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }

  num = prompt('any number betwen 16 and 64');
  if(num > 16 && num <= 64) {
    createGrid();
  } else {
    num = 16;
    createGrid();
  }   
});

createGrid();

restartBtn.addEventListener('click', function(){
  window.location.reload(true);
})

let message = document.createElement('p');
message.textContent = 'Please open in desktop browser.'
document.body.appendChild(message);
message.classList.add('message');

let newStyles = document.createElement('style');
document.head.append(newStyles);
newStyles.innerHTML = '.message { display: none; }'+
"@media only screen and (max-width: 600px) {" +
  'body>* {' +
    "display: none !important;"+
  "}"+
  ".message{"+
    "display: block !important;"+
    "text-align: center"+
  "}"+
"}";