//full down
$(document).ready(function(){
   
   
    var box = $('<div></div>');
        
    box.addClass('mNavBg'); 
    
    box.appendTo('header');
    
    

    box.slideUp(0);
    $('.subNav').slideUp(0);
    

    $('.mNav').hover(function(){
      
        box.stop().slideDown('fast');
        $('.subNav').stop().slideDown('fast');
    },function(){

        box.stop().slideUp('fast');
        $('.subNav').stop().slideUp('fast');
        
    });
    

    $('.subNav').hover(function(){
        $(this).siblings().addClass('on');
    
    },function(){
        $(this).siblings().removeClass('on');
    });
    

    var index = $(this).parent().index();
    
    
    $('.mNav > ul > li').mouseenter(function(){
        var index = $(this).index();
        
       
        $('.bgImg img').attr('src','images/common/view0'+(index+1)+'.gif');
    });
    
    
//웹접근성 
    $('.mNav > ul > li > a').focus(function(){ 
        box.stop().slideDown('fast');
        $('.subNav, .mNavBg').stop().slideDown('fast');
        $('.mNav > ul > li > a').removeClass('on'); 
        $(this).addClass('on'); 
    });
    
//gnb
    $('.subNav a:last' ).blur(function(){ 
        box.stop().slideUp('fast');
        $('.subNav, .mNavBg').stop().slideUp('fast');
        $('.mNav').removeClass('on');
    });
    

//join
   $("#checkall").click(function(){
      if($("#checkall").prop("checked")){
         $("input[name=chk]").prop("checked",true);
      }else{
         $("input[name=chk]").prop("checked",false);
      }
   });

       
//colorbox
     $('.new01').colorbox({iframe:true, width:900, height:600});
     $('.new02').colorbox({iframe:true, width:900, height:1000});
     $('.new03').colorbox({iframe:true, width:900, height:730});
  

//scroll top
//    $().UItoTop({ easingType: 'easeOutQuart' });

    
 
    
});



//searchBox
$(document).ready(function(){
    var w = $(window).width();
    var h = $(window).height();

    $('.iframeBox form').width(w);
    $('.iframeBox form').height(h);

    
    $('.iframeBox').fadeOut(0);


    $('.searchIcon').click(function(){
        $('.iframeBox').fadeIn('fast');
        $('#searchBox').focus();
    });

    $('.seachBoxClose').click(function(){
        $('.iframeBox').fadeOut('fast');
    });
});


//storeInfo
$(document).ready(function(){
    $('.tab li').first().addClass('on');
    $('.conWrap > div').first().css('display','block');
    
   
    $('.tab li a').click(function(){
        $('.tab li').removeClass('on');
        $(this).parent().addClass('on');
        

        var index = $(this).parent().index();
        
        $('.conWrap > div').css('display','none');
        $('.conWrap > div').eq(index).css('display','block');
    });
    
});

//product
$(document).ready(function(){
    $('.product00 > ul .over').fadeOut(0);
    
    $('.product00 > ul').hover(function(){
        $(this).find('.over').stop().fadeIn('fast');
    },function(){
          $(this).find('.over').stop().fadeOut('fast');
    });
});



//journal
$(document).ready(function(){
    $('.eventWrap > div .over').fadeOut(0);
    
    $('.eventWrap > div').hover(function(){
        $(this).find('.over').stop().fadeIn('fast');
    },function(){
          $(this).find('.over').stop().fadeOut('fast');
    });
});



//coffeeClass
$(document).ready(function(){
    $('.classWrap > div .over').fadeOut(0);
    
    $('.classWrap > div').hover(function(){
        $(this).find('.over').stop().fadeIn('fast');
    },function(){
          $(this).find('.over').stop().fadeOut('fast');
    });
});



//brewingGuide
$(document).ready(function(){
    $('.brewWrap > div .over').fadeOut(0);
    
    $('.brewWrap > div').hover(function(){
        $(this).find('.over').stop().fadeIn('fast');
    },function(){
          $(this).find('.over').stop().fadeOut('fast');
    });
});


jQuery(function ($){ 

jQuery(document).ready(function (){  

 $(window).scroll(function () {
            if ($(this).scrollTop() > $(window).height() * 0.7) {
                $('.scrolltotop').fadeIn();
            } else {
                $('.scrolltotop').fadeOut();
            }

        }); //top_bt scroll

        //Click event to scroll to top
        $('.scrolltotop').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });

});//ready

});

