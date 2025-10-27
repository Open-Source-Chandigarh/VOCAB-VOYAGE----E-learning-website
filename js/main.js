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

  // Throttle utility function to limit function execution frequency
  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };

  }

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate WOW.js
  new WOW().init();

  // Optimized Sticky Navbar with throttling and transform for better performance
  const handleStickyNavbar = throttle(function () {
    const navbar = $(".sticky-top");
    if ($(this).scrollTop() > 300) {
      navbar.css({
        transform: "translateY(0)",
        top: "0px",
      });
    } else {
      navbar.css({
        transform: "translateY(-100%)",
        top: "-100px",
      });
    }
  }, 16); // ~60fps throttling

  $(window).scroll(handleStickyNavbar);

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);

    spinner();

    // Initiate WOW.js
    new WOW().init();

    // Smart Navbar - Hide on scroll down, show on scroll up
    let lastScrollTop = 0;
    const navbar = $('.sticky-top');
    
    const handleSmartNavbar = throttle(function () {
        let scrollTop = $(this).scrollTop();
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide navbar
            navbar.css({
                'transform': 'translateY(-100%)',
                'transition': 'transform 0.3s ease-in-out'
            });
        } else {
            // Scrolling up - show navbar
            navbar.css({
                'transform': 'translateY(0)',
                'transition': 'transform 0.3s ease-in-out'
            });
        }
        
        lastScrollTop = scrollTop;
    }, 16); // ~60fps throttling

    $(window).scroll(handleSmartNavbar);

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Optimized Back to top button with throttling
    const handleBackToTop = throttle(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');

        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Optimized Back to top button with throttling
  const handleBackToTop = throttle(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  }, 100); // Less frequent updates for back-to-top as it's less critical

  $(window).scroll(handleBackToTop);
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 0);
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
        '<i class="bi bi-chevron-right"></i>',
      ],
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
        992: { items: 3 },
      },
    });
  }

  $(document).ready(initCarousels);
  $(window).on("resize", function () {
    $(".header-carousel, .testimonial-carousel").trigger(
      "destroy.owl.carousel"
    );
    initCarousels();
  });
})(jQuery);

// Dark Mode Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  const currentTheme = localStorage.getItem("theme") || "light";

  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }
});

let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (Math.abs(currentScroll - lastScroll) > 20) {
    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    lastScroll = currentScroll;
  }
});


const currentPage = window.location.pathname.split("/").pop(); // get current file name
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    const dropdowns = document.querySelectorAll('.navbar .dropdown');

dropdowns.forEach(drop => {
  let showTimeout, hideTimeout;

  drop.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); // cancel hiding if mouse comes back
    showTimeout = setTimeout(() => drop.classList.add('show'), 200); // show after 200ms
  });

  drop.addEventListener('mouseleave', () => {
    clearTimeout(showTimeout); // cancel showing if mouse leaves early
    hideTimeout = setTimeout(() => drop.classList.remove('show'), 200); // hide after 200ms
  });
});

