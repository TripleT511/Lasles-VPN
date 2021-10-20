/* carousel */
const backIcon = '<img src="./images/arrow-back.svg" alt="left">';
const nextIcon = '<img src="./images/arrow-next.svg" alt="right">';
$('.slider').slick({
    dots: true,
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
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
