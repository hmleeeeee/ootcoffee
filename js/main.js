//flexslider 
$(window).load(function() {
    $('.flexslider').flexslider({
        pausePlay: true
    });
});


//product
$(document).ready(function(){
 
   var num = $('.productWrap li').size(); 
   var w = $('.productWrap li').width()+32; 
   
   $('.productWrap ul').width(num*w); 
   

   $('.productWrap li').last().prependTo('.productWrap ul');
   $('.productWrap ul').css('left',-w);
   
   
   $('.product .nextBtn').click(function(){
      $('.productWrap ul').animate({
         left: '-=' + w
      },'fast',function(){
         $('.productWrap li').first().appendTo('.productWrap ul');
         $('.productWrap ul').css('left',-w);
      });
   });
   
   $('.product .prevBtn').click(function(){
      $('.productWrap ul').animate({
         left: '+=' + w
      },'fast',function(){
         $('.productWrap li').last().prependTo('.productWrap ul');
         $('.productWrap ul').css('left',-w);
      });
   });



//wholeSale 

    $('.btnBox .over').fadeOut(0);

     $('.btnBox').hover(function(){
          $(this).find('.over').stop().fadeIn('fast');
         
     },function(){
          $(this).find('.over').stop().fadeOut('fast');
     });



    $('.imgBox .over').fadeOut(0);

     $('.btnBox').hover(function(){
          $('.imgBox').find('.over').stop().fadeIn('fast');
         
     },function(){
          $('.imgBox').find('.over').stop().fadeOut('fast');
     });


//instaBox
    $('.instaPhoto .over').fadeOut(0);

     $('.instaPhoto').hover(function(){
          $(this).find('.over').stop().fadeIn('fast');
     },function(){
          $(this).find('.over').stop().fadeOut('fast');
     });



    $('.instaPhoto02 .over02').fadeOut(0);

     $('.instaPhoto02').hover(function(){
          $(this).find('.over02').stop().fadeIn('fast');
     },function(){
          $(this).find('.over02').stop().fadeOut('fast');
     });




//eventWrap
    $('.eventWrap .over').fadeOut(0);
    $('.eventWrap .more').fadeOut(0);
    
    
    $('.eventWrap').hover(function(){
        $(this).find('.over').stop().fadeIn('fast');
        $(this).find('.more').stop().fadeIn('fast');
    },function(){
        $(this).find('.over').stop().fadeOut('fast');
        $(this).find('.more').stop().fadeOut('fast');
    });
});
