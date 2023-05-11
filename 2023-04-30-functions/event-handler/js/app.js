const body = document.querySelector('body');

const moveHandler = (event) => {
  console.log('X: ', event.x);
  console.log('Y: ', event.y);
}  
body.addEventListener('mousemove', moveHandler);

// Destructured event with anonymous function
body.addEventListener('click', ({x, y}) => {
  console.log('X: ', x);
  console.log('Y: ', y);
});