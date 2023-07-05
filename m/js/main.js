//mSlider

  $(window).load(function() {
    $('.flexslider').flexslider();
  });


// product swipe
$(document).ready(function(){
	//다른데에도 사용할거면 mySwipe1 => 다른이름으로 변경 => mySwipe2
	window.mySwipe1 = $('.productWrap').Swipe().data('Swipe');
	$('.productWrap .prevBtn').click(function(){
		mySwipe1.prev();
	});
	$('.productWrap .nextBtn').click(function(){
		mySwipe1.next();
	});
});


//notice
$(document).ready(function(){
	setInterval(function(){
		$('.notice ul').fadeOut(0);
		$('.notice ul').fadeIn('fast');
		$('.notice li').first().appendTo('.notice ul');
	},5000);
});

