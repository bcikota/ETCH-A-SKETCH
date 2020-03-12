let btnCreateNewGrid = document.createElement('button');
btnCreateNewGrid.textContent = 'Create New Grid';
document.body.appendChild(btnCreateNewGrid);

let btnRandomColor = document.createElement('button');
btnRandomColor.textContent = 'Random Color';
document.body.appendChild(btnRandomColor);

let btnBlack = document.createElement('button');
btnBlack.textContent = 'Black Color';
document.body.appendChild(btnBlack);

let btn10Black = document.createElement('button');
btn10Black.textContent = '10% Black';
document.body.appendChild(btn10Black);

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

function createItems() {
  for (let i = 0; i < num * num; i++) {
    let item = document.createElement('div');
    wrapper.appendChild(item);
    item.style.width = ((30 / num) * 100) / 30 + '%';
    item.style.height = ((30 / num) * 100) / 30 + '%';
    item.style.border = '1px solid lightgray';

  }
}

let fields = wrapper.childNodes;


function addBlackColor() {
  fields.forEach((fields) => {
    fields.addEventListener('mouseover', function () {
      fields.style.backgroundColor = 'black';
      fields.style.opacity = '1';
    })
  })
}

function addRandomColor() {
  fields.forEach((fields) => {
    fields.addEventListener('mouseover', function () {
      let getRandomColorHex = function () {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
      };
      fields.style.backgroundColor = getRandomColorHex();
      fields.style.opacity = '1';
    })
  })
}

function erase() {
  fields.forEach((fields) => {
    fields.addEventListener('mouseover', function () {
      fields.style.backgroundColor = 'white';
      fields.style.opacity = '1';
    })
  })
}


function black10Per() {

  fields.forEach((field) => {
    let opacityCreator = () => {
      let opacityValue = 0.1;
      return () => {
        field.style.backgroundColor = "black";
        field.style.opacity = `${opacityValue}`;
        opacityValue = opacityValue + 0.1;
      }
    };

    let opacity = opacityCreator();

    field.addEventListener('mouseover', function () {
      opacity();
    });
  });
}

//on page load       
function createGrid() {
  createItems();
  addBlackColor();
}

btnBlack.addEventListener('click', addBlackColor);

btnRandomColor.addEventListener('click', addRandomColor);

btn10Black.addEventListener('click', black10Per);

btnErase.addEventListener('click', erase);

btnCreateNewGrid.addEventListener('click', function () {
  //clears previous grid
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }

  num = prompt('any number betwen 16 and 64');
  if (num > 16 && num <= 64) {
    createGrid();
  } else {
    num = 16;
    createGrid();
  }
});

createGrid();

restartBtn.addEventListener('click', function () {
  window.location.reload(true);
})

let message = document.createElement('p');
message.textContent = 'Please open in desktop browser.'
document.body.appendChild(message);
message.classList.add('message');

let newStyles = document.createElement('style');
document.head.append(newStyles);
newStyles.innerHTML = '.message { display: none; }' +
  "@media only screen and (max-width: 600px) {" +
  'body>* {' +
  "display: none !important;" +
  "}" +
  ".message{" +
  "display: block !important;" +
  "text-align: center" +
  "}" +
  "}";