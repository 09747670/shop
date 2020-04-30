
var slider = $("#slider");

slider.slick({
    arrows: false,
    dots: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 1,
  });

$('#slider-arrow-prev').on('click', function(event){
    event.preventDefault();
    slider.slick('slickPrev');
});

$('#slider-arrow-next').on('click', function(event){
  event.preventDefault();
  slider.slick('slickNext');
});