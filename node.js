// console.log('How are you?');
const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
button.addEventListener('click', function() {
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 255);
   const b = Math.floor(Math.random() * 255);
   const newColor = `rgb(${r}, ${g}, ${b})`;
   document.body.style.backgroundColor = newColor;
   button.style.color = newColor
   red.style.backgroundColor = `rgb(${r}, 0, 0)`;
   green.style.backgroundColor = `rgb(0, ${g}, 0)`;
   blue.style.backgroundColor = `rgb(0, 0, ${b})`;
   h1.innerText = newColor.toUpperCase()
   if (r < 70 || g < 70 || b < 70) {
    h1.style.color = 'white'
    button.style.backgroundColor = 'white'
   } else {
    h1.style.color = 'black'
    button.style.backgroundColor = 'black'
   }
})