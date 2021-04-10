
$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
         slidesToScroll: 1,
         arrows: true, 

    });
}); 


// Получаем элементы на странице
const kigdsan = document.querySelector("#kigdsan");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// Дата завершения акции
const deadline = new Date(`2021-08-21`);

function updateCounter() {
  const currentasdupog = new Date();
  const dist = deadline - currentasdupog;

  const toHours = Math.floor(dist / 1000 / 60 / 60) % 24;
  const toMinutes = Math.floor(dist / 1000 / 60) % 60;
  const toSeconds = Math.floor(dist / 1000) % 60;

 
  hours.innerText = toHours < 10 ? "0" + toHours : toHours;
  minutes.innerText = toMinutes < 10 ? "0" + toMinutes : toMinutes;
  seconds.innerText = toSeconds < 10 ? "0" + toSeconds : toSeconds;
}

updateCounter();

setInterval(updateCounter, 1000);

