
 $('.slider ').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.main_head  '
});
$('.main_head ').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});


// $('.main_head').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 1000,
// });

// $(document).ready(function(){
//   $('.slider').slick({
//     arrows:true,
//     dots:true,
//     slidesToShow:3,
//     autoplay:true,
//     speed:1000,
    
//     responsive:[
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow:2
//         }
//       },
//       {
//         breakpoint: 550,
//         settings: {
//           slidesToShow:1
//         }
//       }
//     ]
//   });
// });

