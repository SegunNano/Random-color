// console.log('How are you?');
const button = document.querySelector('button');
const h1 = document.querySelector('h1')
button.addEventListener('click', function() {
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 255);
   const b = Math.floor(Math.random() * 255);
   const newColor = `rgb(${r}, ${g}, ${b})`;
   document.body.style.backgroundColor = newColor;
   button.style.color = newColor
   h1.innerText = newColor
   if (r < 60 || g < 60 || b < 60) {
    h1.style.color = 'white'
    button.style.backgroundColor = 'white'
   } else {
    h1.style.color = 'black'
    button.style.backgroundColor = 'black'
   }
})