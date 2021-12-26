$(document).ready(function () {
  const discountSlider = new Swiper('.discount-slider', {
    loop:true,
    loopedSlides: 4,
watchOverflow: true,
    grabCursor:true,
    slidesPerView: "auto",

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },



  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  $("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts : {
          caption : 'First caption',
          thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });

  });

});

function show (name) {
	var elem = document.getElementById(name);
	var btn = document.getElementById("moreButton");
	if (elem)
    if (elem.style.display == "block") {
        elem.style.display = "none";
		
    }
    else {
		elem.style.display = "block";
		btn.style.display = "none"
    }
  
}
function hide(name) {
	var elem = document.getElementById(name);
	var btn = document.getElementById("moreButton");
	if (elem)
    if (elem.style.display == "block") {
		elem.style.display = "none";
		btn.style.display = "block"
    }
}