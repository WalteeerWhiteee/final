// Получить модальный
let modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
let btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



let modal2 = document.getElementById("myModal2");

// Получить кнопку, которая открывает модальный
let btn2 = document.getElementById("myBtn2");

// Получить элемент <span>, который закрывает модальный
let span2 = document.getElementsByClassName("close2")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn2.onclick = function() {
  modal2.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span2.onclick = function() {
  modal2.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

 
let swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});





$('.mobile-btn').on('click', function() {
  $('.mobile-btn').toggleClass('show-mobile-btn');
  $('.header_menu').toggleClass('show-menu');
  $('.header_link').toggleClass('show-header_link');
});

$('.header-menu nav a').on('click', function() {
  $('.mobile-btn').removeClass('show-mobile-btn');
  $('.header_menu').removeClass('show-menu');
  $('.header_link').removeClass('show-header_link');
});
