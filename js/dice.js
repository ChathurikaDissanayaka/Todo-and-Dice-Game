const d1 = document.querySelector('.d1');
const d2 = document.querySelector('.d2');

const status = document.querySelector('#status');
const reset = document.querySelector('#reset');

const dice1 = document.querySelector('#dice1');
const dice2 = document.querySelector('#dice2');
const status1 = document.querySelector('#status1');

let roll1 = 0;
let roll2 = 0;

d1.addEventListener('click', function () {
    roll1 = Math.floor(Math.random()*6) + 1;
    console.log(roll1);
    d1.classList.add('cls1');
})

d2.addEventListener('click', function () {
    roll2 = Math.floor(Math.random()*6) + 1;
    console.log(roll2);
    d2.classList.add('cls2');
})

status.addEventListener('click', function () {
   if (roll1 > 0 && roll2 > 0) {
       dice1.innerText = ": "+ roll1;
       dice2.innerText = ": "+ roll2;

       if (roll1 == roll2) {
           status1.innerText = "=> You Won :)";
       } else {
           status1.innerText = "=> You lost :(";
       }
   }
   else {
       alert("Click on cards!")
   }
})

reset.addEventListener('click', function () {
    window.location.reload();
})