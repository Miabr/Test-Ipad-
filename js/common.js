$(document).ready(function() {

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        parallax: true,
        speed: 600
    });

    swiper.on('onTransitionEnd', function () {
        $('.page-one__next').show();
    });

    swiper.on('sliderMove', function () {
        $('.page-one__next').hide();
    });

    $(function() {
        var handle = $("#custom-handle");
        $("#slider").slider({
            range: "min",
            value: 100,
            min: 1,
            max: 100,
            slide: function(event, ui) {

                var a = 67;
                var b = 33;
                var c =  0;

                if ($(this).slider("value") > a ) {
                    $(".page-three__section").css('left', '-2048px');
                } else if ($(this).slider("value") < a && $(this).slider("value") > b) {
                    $(".page-three__section").css('left', '-1024px');
                }

                if ($(this).slider("value") > c && $(this).slider("value") < b) {
                    $(".page-three__section").css('left', '0px');
                }

            }
        });
    });

  $('#slider').bind('touchmove',  function(event) {
      event.stopPropagation();
  });

});
