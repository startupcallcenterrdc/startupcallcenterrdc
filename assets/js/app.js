const backToTopButton = document.querySelector('.back-to-top');
const bottomBar = document.querySelector('.bottom-bar');

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.querySelector('nav').classList.replace('transparent', 'background-blur')
        document.querySelector('nav').classList.replace('z-depth-0', 'z-depth-1')
        bottomBar.classList.replace("hidden", "visible");
    } else {
        bottomBar.classList.replace("visible", "hidden");
        document.querySelector('nav').classList.replace('background-blur', 'transparent')
        document.querySelector('nav').classList.replace('z-depth-1', 'z-depth-0')
    }
}

function doScrollTo(selector) {
    const ELEMENT = getElement(selector);
    const ELEMENT_POSITION = ELEMENT.offsetTop;
    const FROM_POSITION = document.documentElement.scrollTop || document.body.scrollTop;
    let lastPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollToTop = () => {
        const ACTUAL_POSITION = document.documentElement.scrollTop || document.body.scrollTop;
        if (ACTUAL_POSITION < ELEMENT_POSITION && FROM_POSITION < ELEMENT_POSITION && lastPosition <= ACTUAL_POSITION) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, ACTUAL_POSITION + (ELEMENT_POSITION - ACTUAL_POSITION) / 8 + 1);
        } else if (ACTUAL_POSITION > ELEMENT_POSITION && FROM_POSITION > ELEMENT_POSITION && lastPosition >= ACTUAL_POSITION) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, ACTUAL_POSITION - (ACTUAL_POSITION - ELEMENT_POSITION) / 8);
        }
        lastPosition = ACTUAL_POSITION;
    };
    scrollToTop();
}

function getElement(selector) {
    return document.querySelector(selector);
}

function getAllElements(selector) {
    return document.querySelectorAll(selector);
}
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById("users-data")) {
        const users = JSON.parse(document.getElementById("users-data").textContent);
        console.log('__________________users________________')
        console.log(users)
        let usersData = {};
        for (user of users) {
            usersData[user.first_name + ' ' + user.last_name + ' ' + user.username] = user.avatar
        }
        console.log(usersData)
        $('input.autocomplete').autocomplete({
            data: usersData
                /* {
                            "Apple": null,
                            "Microsoft": null,
                            "Google": 'https://placehold.it/250x250'
                        } */
                ,
        });
    }
    const sidenavInstances = M.Sidenav.init(getAllElements('.sidenav'), {});
    const modalInstances = M.Modal.init(getAllElements('.modal'), {});
    const dropdwonInstances = M.Dropdown.init(getAllElements('.dropdown-trigger'), {});
    const collapsibleInstances = M.Collapsible.init(getAllElements('.collapsible'), {});
    const selectInstances = M.FormSelect.init(getAllElements('select'), {});
    const datepickerInstances = M.Datepicker.init(getAllElements('.datepicker'), {});
    const instance = M.Tabs.init(getAllElements('.tabs'), {});
    const instancesAutocomplete = M.Autocomplete.init(getAllElements('.autocomplete k'), {
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
    });

    window.onscroll = function() { scrollFunction() };
    backToTopButton.addEventListener('click', () => {
        doScrollTo('body');
    });

    var preloaderFadeOutTime = 500;

    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        setTimeout(function() {
            preloader.fadeOut(preloaderFadeOutTime);
        }, 500);
    }
    hidePreloader();
    //document.getElementById().innerHTML
    getAllElements('.count').forEach((el) => {
        let count = el.getAttribute('data-count');
        const step = Math.round(count / el.getAttribute('data-step')) || 1;

        const timer = () => setTimeout(() => {
            el.innerHTML = el.getAttribute('data-count') - count;
            if (count > 0) {
                timer();
            } else {
                el.innerHTML = el.getAttribute('data-count');
            }
            console.log('timer', count);
            count -= step;
        }, 100);
        timer();

        anime({
            targets: '.anime-svg svg path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function(el, i) { return i * 250 },
            loop: true
        });

        var swiper = new Swiper(".mySwiper", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });

        /* Image Slider 2 - Swiper */
        /* var imageSliderOne = new Swiper('.image-slider-1', {
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            speed: 1500,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: ".swiper-pagination",
            },
        });
        var imageSliderTwo = new Swiper('.image-slider-2', {
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            loop: true,
            spaceBetween: 30,
            slidesPerView: 5,
            breakpoints: {
                // when window is <= 580px
                580: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window is <= 768px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window is <= 992px
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // when window is <= 1200px
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },

            }
        });
        var textSlider = new Swiper('.text-slider', {
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            spaceBetween: 70,
            slidesPerView: 2,
            breakpoints: {
                // when window is <= 1199px
                1199: {
                    slidesPerView: 1,
                },
            }
        }); */
    })
});
/* #26a69a 1976D2 */