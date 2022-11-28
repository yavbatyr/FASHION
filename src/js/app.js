import * as modulesFunctions from "./modules/functions.js";

modulesFunctions.isWebp();

// Импортируем swiper
import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 0,
        speed: 1000
    },
    // Responsive breakpoints
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //     }
    // }
})


