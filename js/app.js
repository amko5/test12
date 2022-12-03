$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
      // items: 5 ,
      autoplay: true,
      slideTransition: 'linear',
      autoplaySpeed: 2000,
      loop: true,
      autoplayHoverPause: false,
      responsiveClass:true,
      responsive: {
         0:{
            items:1,
         },
         500:{
         items:2,
         },
         700:{
            items:3,
         },
         1100:{
            items:4,
         },
         1400:{
         items:5,
         },
      }
   }); 
});
