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
    breakpoints: {
        1919: {
        slidesPerView: 6,
        spaceBetween: 10
        },
        1023: {
        slidesPerView: 3.2,
        spaceBetween: 10
        },
        // when window width is >= 640px
        833: {
        slidesPerView: 2.5,
        spaceBetween: 30
        },
        427: {
        slidesPerView: 1.9,
        spaceBetween: 10
        },
        374: {
        slidesPerView: 1.2,
        spaceBetween: 10
        },
        359: {
        slidesPerView: 1.2,
        spaceBetween: 10
        }
    }
})


