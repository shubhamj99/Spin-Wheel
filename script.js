//Getting elements
const wheel = document.getElementById('wheel');
const marker = document.getElementById('marker');
const button = document.getElementById('button');
const result = document.getElementById('result');

//Animal Array
var animal = ['Frog', 'Snail', 'Dolphin', 'Lady Bug', 'Raccoon', 'Unicorn', 'Dragon', 'Snowman'];
// Rotation degree
let deg = 0;

button.addEventListener('click', () => {
    //Clear result
    result.textContent = '';
    //Disable Click
    button.style.pointerEvents = 'none';
    //Get degree between 5000 to 10000
    deg = Math.floor(5000 + (Math.random()*5000));
    //Adding transition
    wheel.style.transition = 'all 10s ease-out';
    //Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    //Adding a blur effect
    wheel.classList.add('blur');
});

wheel.addEventListener('transitionend', () => {
    //Removing the blur
    wheel.classList.remove('blur');
    //Reactivating click
    button.style.pointerEvents = 'auto';
    //Removing transition
    wheel.style.transition = 'none';
    //Getting actual degree between 0 to 360
    const actualDeg = deg % 360;
    //Rotate wheel to actual degree to avoid back spin
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    //Getting result
    result.textContent = 'You got ' + getAnimal(actualDeg) + '!';
});

function getAnimal(actualDeg){
    const i = Math.floor(actualDeg / 45);
    return animal[i];
}
