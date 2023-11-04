document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /* Preloader */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }

    /* Sticky Header on Scroll */
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
        let headerOffset = selectHeader.offsetTop;
        let nextElement = selectHeader.nextElementSibling;

        const headerFixed = () => {
            if ((headerOffset - window.scrollY) <= 0) {
                selectHeader.classList.add('sticked');
                if (nextElement) nextElement.classList.add('sticked-header-offset');
            } else {
                selectHeader.classList.remove('sticked'); // Perbaikan di sini: menghapus spasi sebelum 'remove'
                if (nextElement) nextElement.classList.remove('sticked-header-offset');
            }
        };
        window.addEventListener('load', headerFixed);
        document.addEventListener('scroll', headerFixed);
    }

    /* Scroll top button */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        const togglescrollTop = function() {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        };
        window.addEventListener('load', togglescrollTop);
        document.addEventListener('scroll', togglescrollTop);
        scrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
$(function() {
    'use strict';
        // Form
    var JoinEvent = function() {
        if ($('#JoinEvent').length > 0) {
            $("#JoinEvent").validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    cv:"required",
                    AlasanJoin: {
                        required: true,
                        minlength: 5
                    }
                },
                messages: {
                    name: "Please enter your Name",
                    email: "Please enter a valid email address",
                    cv: "Please Input your CV",
                    AlasanJoin: "Please enter a Reason"
                }
            });
        }
    };
    JoinEvent();
    });
