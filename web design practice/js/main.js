$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false
    });
    // Typed Js
    var typed = new Typed(".typed", {
  // Waits 1000ms after typing "First"
    strings: ["Make fun but stick on your dream",
                "This is the motto of my life"],
            loop: true,
            showCursor:false,
            typeSpeed:40,
            startDelay:1000
  });
        // Owl Carousel
        $('.owl-carousel').owlCarousel({
        loop: true,
       
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
        
            
            
            // Scroll Animation
            $("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});
        
        
});

$(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#gallery").fadeTo(100, 0.1);
$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#gallery").fadeTo(300, 1);
}, 300);
});
});












