// (function ($) {
//     "use strict";

//     // Spinner
//     var spinner = function () {
//         setTimeout(function () {
//             if ($('#spinner').length > 0) {
//                 $('#spinner').removeClass('show');
//             }
//         }, 1);
//     };
//     spinner();


//     // Initiate the wowjs
//     new WOW().init();


//     // Sticky Navbar
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 300) {
//             $('.sticky-top').css('top', '0px');
//         } else {
//             $('.sticky-top').css('top', '-100px');
//         }
//     });


//     // Dropdown on mouse hover
//     const $dropdown = $(".dropdown");
//     const $dropdownToggle = $(".dropdown-toggle");
//     const $dropdownMenu = $(".dropdown-menu");
//     const showClass = "show";

//     $(window).on("load resize", function () {
//         if (this.matchMedia("(min-width: 992px)").matches) {
//             $dropdown.hover(
//                 function () {
//                     const $this = $(this);
//                     $this.addClass(showClass);
//                     $this.find($dropdownToggle).attr("aria-expanded", "true");
//                     $this.find($dropdownMenu).addClass(showClass);
//                 },
//                 function () {
//                     const $this = $(this);
//                     $this.removeClass(showClass);
//                     $this.find($dropdownToggle).attr("aria-expanded", "false");
//                     $this.find($dropdownMenu).removeClass(showClass);
//                 }
//             );
//         } else {
//             $dropdown.off("mouseenter mouseleave");
//         }
//     });


//     // Back to top button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 300) {
//             $('.back-to-top').fadeIn('slow');
//         } else {
//             $('.back-to-top').fadeOut('slow');
//         }
//     });
//     $('.back-to-top').click(function () {
//         // instant scroll to top with no animation/delay
//         $('html, body').animate({ scrollTop: 0 }, 0);
//         return false;
//     });


//     // Header carousel
// <<<<<<< main
//     $(".header-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: window.innerWidth < 768 ? 2000 : 1500, // Slower on mobile
//         items: 1,
//         dots: false,
//         loop: true,
//         nav: true,
//         navText: [
//             '<i class="bi bi-chevron-left"></i>',
//             '<i class="bi bi-chevron-right"></i>'
//         ],
//         responsive: {
//             0: {
//                 smartSpeed: 2000  // Slower transition for mobile devices
//             },
//             768: {
//                 smartSpeed: 1500  // Normal speed for desktop
//             }
//         }
//     });


//     // Testimonials carousel
//     $(".testimonial-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: window.innerWidth < 768 ? 1500 : 1000, // Slower on mobile
//         center: true,
//         margin: 24,
//         dots: true,
//         loop: true,
//         nav: false,
//         responsive: {
//             0: {
//                 items: 1,
//                 smartSpeed: 1500  // Slower transition for mobile devices
//             },
//             768: {
//                 items: 2,
//                 smartSpeed: 1000  // Normal speed for tablet and desktop
//             },
//             992: {
//                 items: 3,
//                 smartSpeed: 1000  // Normal speed for desktop
// =======
//     // $(".header-carousel").owlCarousel({
//     //     autoplay: true,
//     //     smartSpeed: 1500,
//     //     items: 1,
//     //     dots: false,
//     //     loop: true,
//     //     nav: true,
//     //     navText: [
//     //         '<i class="bi bi-chevron-left"></i>',
//     //         '<i class="bi bi-chevron-right"></i>'
//     //     ]
//     // });

//     //     $(".header-carousel").owlCarousel({
//     //     autoplay: true,
//     //     smartSpeed: window.innerWidth < 768 ? 2000 : 1500,
//     //     items: 1,
//     //     dots: false,
//     //     loop: true,
//     //     nav: true,
//     //     navText: [
//     //         '<i class="bi bi-chevron-left"></i>',
//     //         '<i class="bi bi-chevron-right"></i>'
//     //     ]
//     // });

//     // Testimonials carousel
//     // $(".testimonial-carousel").owlCarousel({
//     //     autoplay: true,
//     //     smartSpeed: 1000,
// //         center: true,
// //         margin: 24,
// //         dots: true,
// //         loop: true,
// //         nav: false,
// //         responsive: {
// //             0: {
// //                 items: 1
// //             },
// //             768: {
// //                 items: 2
// //             },
// //             992: {
// //                 items: 3
// //             }
// //         }
// //     });

// // })(jQuery);

//     //header and testimonial corousel

//     (function ($) {
//     "use strict";

//     function initCarousels() {
//         const isMobile = window.innerWidth < 768;

//         $(".header-carousel").owlCarousel({
//             autoplay: true,
//             smartSpeed: isMobile ? 2000 : 1500,
//             items: 1,
//             dots: false,
//             loop: true,
//             nav: true,
//             navText: [
//                 '<i class="bi bi-chevron-left"></i>',
//                 '<i class="bi bi-chevron-right"></i>'
//             ]
//         });

//         $(".testimonial-carousel").owlCarousel({
//             autoplay: true,
//             smartSpeed: isMobile ? 1500 : 1000,
//             center: true,
//             margin: 24,
//             dots: true,
//             loop: true,
//             nav: false,
//             responsive: {
//                 0: { items: 1 },
//                 768: { items: 2 },
//                 992: { items: 3 }
// >>>>>>> main
//             }
//         });
//     }

//     $(document).ready(initCarousels);
//     $(window).on("resize", function () {
//         $(".header-carousel, .testimonial-carousel").trigger("destroy.owl.carousel");
//         initCarousels();
//     });

//     // Handle window resize to update carousel speeds dynamically
//     $(window).on('resize', function() {
//         // Update header carousel speed based on new viewport width
//         const headerCarousel = $('.header-carousel');
//         if (headerCarousel.length && headerCarousel.data('owl.carousel')) {
//             const newSpeed = window.innerWidth < 768 ? 2000 : 1500;
//             headerCarousel.trigger('destroy.owl.carousel');
//             headerCarousel.owlCarousel({
//                 autoplay: true,
//                 smartSpeed: newSpeed,
//                 items: 1,
//                 dots: false,
//                 loop: true,
//                 nav: true,
//                 navText: [
//                     '<i class="bi bi-chevron-left"></i>',
//                     '<i class="bi bi-chevron-right"></i>'
//                 ],
//                 responsive: {
//                     0: {
//                         smartSpeed: 2000
//                     },
//                     768: {
//                         smartSpeed: 1500
//                     }
//                 }
//             });
//         }

//         // Update testimonial carousel speed based on new viewport width
//         const testimonialCarousel = $('.testimonial-carousel');
//         if (testimonialCarousel.length && testimonialCarousel.data('owl.carousel')) {
//             const newSpeed = window.innerWidth < 768 ? 1500 : 1000;
//             testimonialCarousel.trigger('destroy.owl.carousel');
//             testimonialCarousel.owlCarousel({
//                 autoplay: true,
//                 smartSpeed: newSpeed,
//                 center: true,
//                 margin: 24,
//                 dots: true,
//                 loop: true,
//                 nav: false,
//                 responsive: {
//                     0: {
//                         items: 1,
//                         smartSpeed: 1500
//                     },
//                     768: {
//                         items: 2,
//                         smartSpeed: 1000
//                     },
//                     992: {
//                         items: 3,
//                         smartSpeed: 1000
//                     }
//                 }
//             });
//         }
//     });

// })(jQuery);


// // Dark Mode Toggle Functionality
// document.addEventListener('DOMContentLoaded', function() {
//     // Check for saved theme preference or default to light mode
//     const currentTheme = localStorage.getItem('theme') || 'light';

//     // Apply the saved theme on page load
//     if (currentTheme === 'dark') {
//         document.body.classList.add('dark-mode');
//     }

//     // Dark mode toggle button event listener
//     const darkModeToggle = document.getElementById('darkModeToggle');

//     if (darkModeToggle) {
//         darkModeToggle.addEventListener('click', function() {
//             // Toggle dark mode class on body
//             document.body.classList.toggle('dark-mode');

//             // Save the user's preference to localStorage
//             if (document.body.classList.contains('dark-mode')) {
//                 localStorage.setItem('theme', 'dark');
//             } else {
//                 localStorage.setItem('theme', 'light');
//             }
//         });
//     }
// });

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate WOW.js
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });

    // Dropdown on mouse hover with smooth transitions
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    let hoverTimeout;
    let isHovering = false;

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.off("mouseenter mouseleave");

            $dropdown.on("mouseenter", function () {
                const $this = $(this);
                isHovering = true;

                // Clear any existing timeout
                clearTimeout(hoverTimeout);

                // Add delay before showing dropdown
                hoverTimeout = setTimeout(function () {
                    if (isHovering) {
                        $this.addClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "true");
                        $this.find($dropdownMenu).addClass(showClass);
                    }
                }, 200); // 200ms delay
            });

            $dropdown.on("mouseleave", function () {
                const $this = $(this);
                isHovering = false;

                // Clear any existing timeout
                clearTimeout(hoverTimeout);

                // Add delay before hiding dropdown
                hoverTimeout = setTimeout(function () {
                    if (!isHovering) {
                        $this.removeClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "false");
                        $this.find($dropdownMenu).removeClass(showClass);
                    }
                }, 150); // 150ms delay (slightly shorter for better UX)
            });

            // Handle dropdown menu hover to keep it open
            $dropdownMenu.on("mouseenter", function () {
                isHovering = true;
                clearTimeout(hoverTimeout);
            });

            $dropdownMenu.on("mouseleave", function () {
                isHovering = false;
                clearTimeout(hoverTimeout);

                hoverTimeout = setTimeout(function () {
                    if (!isHovering) {
                        $dropdown.removeClass(showClass);
                        $dropdownToggle.attr("aria-expanded", "false");
                        $dropdownMenu.removeClass(showClass);
                    }
                }, 150);
            });
        } else {
            $dropdown.off("mouseenter mouseleave");
            $dropdownMenu.off("mouseenter mouseleave");
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 0);
        return false;
    });

    // Header and Testimonial Carousels
    function initCarousels() {
        const isMobile = window.innerWidth < 768;

        // Header carousel
        $(".header-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: isMobile ? 2000 : 1500,
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ]
        });

        // Testimonial carousel
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: isMobile ? 1500 : 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });
    }

    $(document).ready(initCarousels);
    $(window).on("resize", function () {
        $(".header-carousel, .testimonial-carousel").trigger("destroy.owl.carousel");
        initCarousels();
    });

})(jQuery);

// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
});