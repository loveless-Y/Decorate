$(function() {

	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('.header').addClass('on');
		} else {
			$('.header').removeClass('on');
		}
	});

	var $hei = $(window).scrollTop();
	if($hei > 600) {
		$('.backTop').show()
	}
	$('.backTop').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	})
});

$(".list_qq").mouseenter(function() {
	$(".box1").css("display", "block");
});
$(".list_qq").mouseleave(function() {
	$(".box1").css("display", "none");
});
$(".list_wechat").mouseenter(function() {
	$(".box2").css("display", "block");
});
$(".list_wechat").mouseleave(function() {
	$(".box2").css("display", "none");
});

$(document).ready(function() {
	$(".backTop").hide();
	$(function() {
		$(window).scroll(function() {
			if($(window).scrollTop() > 100) {
				$(".backTop").fadeIn(1500);
			} else {
				$(".backTop").fadeOut(1500);
			}
		});

		$(".backTop").click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	})
});
$('.about_main_nar').load('loadpage/about1.html',function(){});
$('.about').click(function(){
		$('.about_main_menu a').removeClass('act');
		$(this).addClass('act');
		$('.about_main_nar').load('loadpage/about1.html');
	});
$('.countwe').click(function(){
		$('.about_main_menu a').removeClass('act');
		$(this).addClass('act');
		$('.about_main_nar').load('loadpage/countwe.html');
	});	
$('.news').click(function(){
		$('.about_main_menu a').removeClass('act');
		$(this).addClass('act');
		$('.about_main_nar').load('loadpage/news.html');
	});	

$(".servertab ul li").mouseenter(function(){
	$(this).addClass("planeonlink");
});
$(".servertab ul li").mouseleave(function(){
	$(this).removeClass("planeonlink");
});