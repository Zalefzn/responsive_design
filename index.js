$(document).ready(function() {
    var currentIndex = 0;
    var cards = $('.slider-wrapper .card');
    var dots = $('.footerdot');
    var slideInterval;

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