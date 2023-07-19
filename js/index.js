const body = document.querySelector(".body");
const allSwipers = document.querySelectorAll(".swiper");
const popup = document.querySelector(".slider-alumni-comments-popup");
const popupTextContainer = document.querySelector(".popup__text-container");
const popupClose = document.querySelector(".popup__button");
const popupOpen = document.querySelectorAll(
  ".slider-alumni-comments__text_fullInformation"
);
const allSliderNext = document.querySelectorAll(".button_type_next");
const allSliderPrev = document.querySelectorAll(".button_type_prev");
const allSwiperSlide = document.querySelectorAll(".swiper-slide");
const burgerButton = document.querySelector(".header__burger-menu");
const navigation = document.querySelector(".header__navigation-wrapper");
const headerTopMenu = document.querySelector(".header__top");

console.log(allSwiperSlide);

allSwiperSlide.forEach((elem) => {
  elem.style.height = "unset";
});

for (i = 0; i < allSwipers.length; i++) {
  allSwipers[i].classList.add("swiper-" + i);
  allSliderNext[i].classList.add("button_type_next-" + i);
  allSliderPrev[i].classList.add("button_type_prev-" + i);

  const swiper = new Swiper(".swiper-" + i, {
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
      nextEl: ".button_type_next-" + i,
      prevEl: ".button_type_prev-" + i,
    },

    breakpoints: {
      1024: {
        slidesPerView: 3,
      },

      767: {
        slidesPerView: 2,
      },

      390: {
        slidesPerView: 1  
      }
    },
  });

  if (i === 2) {
    const swiper = new Swiper(".swiper-" + i, {
      slidesPerView: 2,
      spaceBetween: 20,

      navigation: {
        nextEl: ".button_type_next-" + i,
        prevEl: ".button_type_prev-" + i,
      },

      breakpoints: {
        1024: {
          slidesPerView: 2,
        },

        767: {
          slidesPerView: 1,
        },

        390: {
          slidesPerView: 1  
        }
      },
    });
  }
}

if (burgerButton) {
  burgerButton.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    burgerButton.classList.toggle("_active");
    navigation.classList.toggle("_active");
    headerTopMenu.classList.toggle("_active");
  });
}

function onNavigationClick(e) {
  document.body.classList.remove("_lock");
  burgerButton.classList.remove("_active");
  navigation.classList.remove("_active");
  headerTopMenu.classList.remove("_active");
}

navigation.addEventListener("click", onNavigationClick);

popupOpen.forEach((element) => {
  element.addEventListener("click", function (e) {
    console.log(element.parentElement);
    const content = element.parentElement.querySelector(
      ".slider-alumni-comments__text-wrapper"
    );
    const hiddenText = element.parentElement.querySelector(
      ".slider-alumni-comments__main-text"
    );
    console.log(hiddenText.innerHTML);
    hiddenText.style.webkitLineClamp = "unset";
    popupTextContainer.innerHTML = content.innerHTML;
    popup.style.display = "block";
    body.style.overflowY = "hidden";
  });
});

popupClose.addEventListener("click", function (e) {
  document
    .querySelectorAll(".slider-alumni-comments__main-text")
    .forEach((elem) => {
      elem.style.webkitLineClamp = 6;
    });
  popup.style.display = "none";
  body.style.overflowY = "auto";  
});
