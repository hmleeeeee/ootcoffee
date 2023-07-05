// panel

$(document).ready(function(){
   
    var h = $(window).height(); 
    $('.panel').height(h+100);
    

    var w = $(window).width();
    $('.panelWrap').css('left',-w); 
    $('.panel').fadeOut(0); 

    

    $('.panelIcon').click(function(){
    
         $('.bodyWrap').css({
             width: w,
             height: h,
             overflow: 'hidden'
         });
        $('.mnav > ul >li').removeClass('on');
        
         $('.panel').fadeIn(0);
         $('.panelSide').fadeIn(0);
         $('.panelWrap').animate({ 
             left: 0
         },'fast');
    });
    
    
      $('.panelSide').click(function(){
         $(this).fadeOut(0);
         $('.panelWrap').animate({ 
             left: -w
         },'fast',function(){ 
            $('.panel').fadeOut(0); 
            $('.bodyWrap').css({
                 width: w,
                 height: 'inherit',
                 overflow: 'visible'
             });
             $('.snav').slideUp(0); 
             
            
         });
     });
});


//mnav
$(document).ready(function(){
    
    $('.snav').slideUp(0);
    
    
    $('.mnav > ul > li >a').click(function(){
        
        var is = $(this).next().is(':hidden');
       
        
        if(is){ 
             
            $('.snav').slideUp(0);
            $(this).next().slideDown('fast');

           
            $('.mnav > ul >li').removeClass('on');
            $(this).parent().addClass('on');
        }else{ 
            $(this).next().slideUp('fast');
            $('.mnav > ul >li').removeClass('on');
            
        }
    });
});


//searchBox
$(document).ready(function(){
    //초기실행 - 서치박스 안 보이게 처리
    $('.searchBox').slideUp(0);
    $('header .xBtn').fadeOut(0);
    
    var cnt= 0;
    
    $('.searchIcon').click(function(){
        if(cnt==0){
            $('header .xBtn').fadeIn(0);
            $('header .searchBtn').fadeOut(0);
            $('.searchBox').slideDown('fast');
            
            cnt=1;
        }else{
            $('header .xBtn').fadeOut(0);
            $('header .searchBtn').fadeIn(0);
            $('.searchBox').slideUp('fast');
             
            cnt=0;
        }
    });
    
});

