let comic = document.getElementById('comic');
let title = document.getElementById('title');
let output = document.querySelector('.output');

fetch('./comics.json')
  .then((response) => response.json())
  .then((comics) => {

    //comic covers
    //Avengers
    a1.src = comics[0].img;
    a2.src = comics[1].img;
    a3.src = comics[2].img;
    a4.src = comics[3].img;
    a5.src = comics[4].img;
    a6.src = comics[5].img;
    a7.src = comics[6].img;
    a8.src = comics[7].img;
    a9.src = comics[8].img;
    a10.src = comics[9].img;
    a11.src = comics[10].img;
    a12.src = comics[11].img;

    output.innerHTML = '';
  });