$( document ).ready(function() {
  $('.tex4').delay(19000)
    $('.tex4').animate({opacity:'0'},1800,function(){
      $('.littlewheel').animate({opacity:'0'},500,function(){
       $('.littlewheel2').animate({opacity:'1'},500,function(){
         $('.tex5').animate({opacity:'1'},500,function(){
           $('.play').animate({opacity:'1'});
           })
         })
      })
    })
  $('.section1').delay(3000).fadeOut(500,'linear',function(){
    $('.section2').fadeIn(500,'linear', function(){
       $('.section2').delay(6000).fadeOut(500,'linear', function(){
         $('.section3').fadeIn('linear', function(){
           $('.section3').delay(6000).fadeOut(500,'linear', function(){
             $('.section4').fadeIn(500,'linear')
          })
        })
      })
    })
  })
});
