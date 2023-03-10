
const toggleBtn = $('.toggle-btn')
const header = $('header.header_section');
const overlay = $('.overlay');
function minToggle(){
    header.toggleClass('active');
}

toggleBtn.on('click', minToggle)
overlay.on('click', minToggle)
$(window).on('scroll', function(){
    header.removeClass('active');
})

const testimonialSlider = $('.owl-carousel.testimonial-slide');

testimonialSlider.owlCarousel({
    item: 1,
    center: true,
    autoWidth: true,
    nav: false,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeoout: 1e4,
    autoplayHoverPause: true,
    smartSpeed: 700,
    loop: true,
    responsive: {
        0:{
            item:1,
            dots: true
        },
        768:{
            item:2
        },
        1024:{
            dots: false,
            item:3
        }
    }
});
