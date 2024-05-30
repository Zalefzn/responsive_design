$(document).ready(function() {
    var currentIndex = 0;
    var cards = $('.slider-wrapper .card');
    var dots = $('.footerdot');
    var slideInterval;

    function toggleDarkMode() {
        $('body').toggleClass('dark-mode');
        $('header').toggleClass('dark-mode');
        $('nav ul li').toggleClass('dark-mode');
        $('a').toggleClass('dark-mode')
        $('.hero-section').toggleClass('dark-mode');
        $('.service').toggleClass('dark-mode');
        $('.about-us').toggleClass('dark-mode');
        $('.footer-content').toggleClass('dark-mode');
        $('.card').toggleClass('dark-mode');
        $('.cards').toggleClass('dark-mode');
        $('.logo').toggleClass('dark-mode')
        $('.dot-section .footerdot').toggleClass('dark-mode');

        var newLogoSrc = $('body').hasClass('dark-mode') ? './assets/logo2.png' : './assets/logo.png';
        var newBgSrc = $('body').hasClass('dark-mode') ? './assets/background2.png' : './assets/background.png';
        $('#logo-image').attr('src', newLogoSrc);
        $('#logo-services').attr('src', newLogoSrc);
        $('#logo-card1').attr('src', newLogoSrc);
        $('#logo-card2').attr('src', newLogoSrc);
        $('#logo-card3').attr('src', newLogoSrc);
        $('#logo-about').attr('src', newLogoSrc);
        $('#logo-footer').attr('src', newLogoSrc);
        $('#bg').css('background-image', 'url(' + newBgSrc + ')');

        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }

        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    if (localStorage.getItem('darkMode') === 'enabled') {
        toggleDarkMode();
    }

    $('#dark-mode-toggle').click(toggleDarkMode);

    function showSlide(index) {
        var offset = -index * 100 + '%';
        $('.slider-wrapper').css('transform', 'translateX(' + offset + ')');
        dots.removeClass('active');
        dots.eq(index).addClass('active');
    }

    function activeSlide(index) {
        if (index >= 0 && index < cards.length) {
            currentIndex = index;
            showSlide(currentIndex);
        }
    }

    function startSlider() {
        slideInterval = setInterval(function() {
            currentIndex = (currentIndex + 1) % cards.length;
            showSlide(currentIndex);
        }, 3000);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    dots.each(function(index) {
        $(this).click(function() {
            stopSlider();
            activeSlide(index);
            startSlider();
        });
    });

    $('.slider-wrapper').hover(stopSlider, startSlider);

    showSlide(currentIndex);
    startSlider();
});