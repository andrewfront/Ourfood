import $ from "jquery";
import slick from "slick-carousel";
const slider = () => {
    $('.header__slick').slick({
        infinite: true,
        slidesToShow: 1,
        vertical: true,
        arrows: true,
        appendArrows: $('.header__button-container'),
        prevArrow: '<div class="header__slick-button-prev"><img src="images/header/arrowright.svg" alt="arrow"></div>',
        nextArrow: '<div class="header__slick-button-next"><img src="images/header/arrowleft.svg" alt="arrow"></div>',
        responsive: [
            {
              breakpoint: 481,
              settings: {
                  slidesToShow: 1,
                vertical: false,
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
}
export default slider