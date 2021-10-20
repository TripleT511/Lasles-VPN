/* carousel */
const backIcon = '<img src="./images/arrow-back.svg" alt="left">';
const nextIcon = '<img src="./images/arrow-next.svg" alt="right">';
$('#slider').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    navText: [
        backIcon,
        nextIcon
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1000: {
            items: 2.7,
        }
    }
})
