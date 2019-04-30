'use strict';
//let timerId = setTimeout(sayHello, 3000); //setTimeout выведется через определенное время
//let timerId = setInterval(sayHello, 3000); //setInterval будет выводится постоянно через определенный промежуток времени
// clearTimeout(timerId); //clearTimeout остановить Timeout

// function sayHello () {
//     console.log('hello world!!!');
// }

//РЕКУРСИВНЫЙ МЕТОД setTimeout функция вызывает сама себя
// let timerId = setTimeout(function log(){
//     console.log('hello');
//     setTimeout(log, 2000);
// })

 
let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

      function myAnimation () {
        let pos = 0;

      let id = setInterval(frame, 10); //10 задержка в мс
       function frame () {
           if (pos == 300){
               clearInterval(id);
           } else {
               pos++;
               elem.style.top = pos + 'px';
               elem.style.left = pos + 'px';
           }
       }
   } 

   btn.addEventListener('click', myAnimation); //привязываем к кнопке событие клика

   let btnBlock = document.querySelector('.btn-block'),
        btns = document.getElementsByTagName('button');

        btnBlock.addEventListener('click', function(event) {
            //if(event.target && event.target.tagName == 'BUTTON') { //делегирование событий(с родителя на потомков), будет срабатывать эта функция
            if(event.target && event.target.matches('button.first')) {
                console.log('O DA'); // можем проверять на класс на ее родителя
            }
        });