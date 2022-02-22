import myName from './myName';

function component() {
  const element = document.createElement('div');

  //use the function
  element.textContent = myName('Cody');

  return element;
}

document.body.appendChild(component());
