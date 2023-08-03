document.addEventListener('DOMContentLoaded', function () {
    // recalling the matchHeight function
    matchHeight('.movieCard');

    wishlist();
})

// adjusting the height of mocieCard
function matchHeight(elements) {
    const target = Array.from(document.querySelectorAll(elements));
    const heightList = [];
    target.forEach(element => {
        const height = element.clientHeight;
        heightList.push(height);
    });

    const maxHeight = Math.max.apply(null, heightList);
    target.forEach(element => {
        element.style.height = maxHeight + 'px';
    });
}

let slides = document.querySelectorAll('.swiper-slide')
let loopControl = slides.length < 4 ? false : true

// swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 48,
    autoHeight: true,
    speed: 350,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    loop: loopControl,
    mousewheel: true,
    keyboard: true,
    autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        480: {
            // slidesPerView: ,
        },
        960: {
            // slidesPerView: ,
        }
    }
});

function wishlist() {
    const movieBtn = document.querySelectorAll('.movieBtn');

    for (let i = 0; i < movieBtn.length; i++) {
        movieBtn[i].addEventListener('click', function (e) {
            this.classList.toggle('is-active');
        })
    }
}


