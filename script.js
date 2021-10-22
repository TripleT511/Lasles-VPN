/* carousel */
const backIcon = '<img src="./images/arrow-back.svg" alt="left">';
const nextIcon = '<img src="./images/arrow-next.svg" alt="right">';
$('.slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: `<button type='button' class='slick-prev pull-left'><img src='./images/arrow-back.svg'></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><img src='./images/arrow-next.svg'></button>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

// toggle menu mobile

const menuBtn = document.querySelector(".toggle__btn");
const navMenu = document.querySelector(".nav__list--mobile");
const overlay = document.querySelector(".overlay");
const navItem = document.querySelectorAll(".nav__item");
const auth = document.querySelectorAll(".nav__auth--mobile .btn");

menuBtn.addEventListener("click", () => {
    overlay.classList.add("show");
    navMenu.classList.add("show");
    navItem.forEach(item => item.addEventListener("click", () => {
        navMenu.classList.remove("show");
        overlay.classList.remove("show");
    }))
    auth.forEach(item => item.addEventListener("click", () => {
        navMenu.classList.remove("show");
        overlay.classList.remove("show");
    }))
})

overlay.addEventListener("click", () => {
    navMenu.classList.remove("show");
    overlay.classList.remove("show");
})
