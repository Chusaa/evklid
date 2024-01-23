const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 500,
    direction: 'horizontal',
    loop: true,
    effect: "slide",
    allowTouchMove: false,
    autoplay: {
        delay: 3000000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  });

// accordion 

$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    heightStyle: "content",
    icons: false,
    active: false
  });
  
  $(".section-accordion").css({"marginBottom": "100px"});
  $(".accordion__item").css({ "backgroundColor": "white"});
  $(".accordion__header").css({"font-family": "var(--ff)", "color": "#000", "font-size": "24px", "font-weight": "700", "line-height": "32px", "paddingTop": "30px", "paddingBottom": "30px"});
  $(".accordion__item").css({"display": "flex", "align-items": "center", "justify-content": "space-between", "border": "none", "padding": "0"});
  $(".accordion__desc").css({"padding": "0", "border": "none"});
  $(".accordion__img").css({"marginTop": "31px", "marginBottom": "31px"});
  $(".accordion__text").css({"font-family": "var(--ff)", "color": "#000", "font-size": "16px", "font-weight": "400", "line-height": "32px", "marginBottom": "32px", });
} );


const accordionItems = document.querySelectorAll(".accordion__item");
const listImg = document.querySelectorAll(".accordion__img");
accordionItems.forEach(item => {
  item.addEventListener("click", () => {
    const itemId = item.getAttribute("data-item");
    listImg.forEach(img => {
      const imgId = img.getAttribute("data-item");
      if (itemId === imgId) {
        img.classList.toggle("is-active");
      }
  
    })

  });
});

window.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".how-we-work__btn").forEach(function(tabsBtn) {
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll(".tab-content").forEach(function(tabContent) {
        tabContent.classList.remove("tab-content-active");
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active");
    })
  })
});



document.querySelector(".header__burger").addEventListener("click", function() {
  document.querySelector(".header__burger-menu").classList.add("active-burger");

  document.querySelector(".body").classList.add("bodyOver");
})

document.querySelector(".burger-close").addEventListener("click", function() {
  document.querySelector(".header__burger-menu").classList.remove("active-burger");

  document.querySelector(".body").classList.remove("bodyOver");
})

const burgerItems = document.querySelectorAll(".burger__item").forEach(function(el) {
  el.addEventListener("click", function() {
    document.querySelector(".header__burger-menu").classList.remove("active-burger");
    document.querySelector(".body").classList.remove("bodyOver");
  })
})