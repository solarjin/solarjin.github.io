
$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true, // бесконечная прокрутка слайдов
        slidesToShow: 3, // показывать по 3 слайда
         slidesToScroll: 1, // прокручивать по 3 слайда за раз
         arrows: true, // не показывать стрелки

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

  // Перевод в часы, с учетом остатка деления на 24
  const toHours = Math.floor(dist / 1000 / 60 / 60) % 24;
  // Перевод в минуты, с учетом остатка деления на 60
  const toMinutes = Math.floor(dist / 1000 / 60) % 60;
  // Перевод в секунды, с учетом остатка деления на 60
  const toSeconds = Math.floor(dist / 1000) % 60;

  /* days.innerText = toDays; */
  hours.innerText = toHours < 10 ? "0" + toHours : toHours;
  minutes.innerText = toMinutes < 10 ? "0" + toMinutes : toMinutes;
  seconds.innerText = toSeconds < 10 ? "0" + toSeconds : toSeconds;
}

updateCounter();

// Запускаем функцию каждую секунду
setInterval(updateCounter, 1000);

