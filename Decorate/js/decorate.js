$(".case-item").mouseenter(function() {
	$(this).children(".case-item-tit").css("bottom", "0");
	$(this).children(".case-item img").css("transform", "scale(1.2)")
});
$(".case-item").mouseleave(function() {
	$(this).children(".case-item-tit").css("bottom", "-50px");
	$(this).children(".case-item img").css("transform", "scale(1)")
});

$(".case-i").hover(function() {
	$(this).find("p").css({
		color: "white"
	});
	$(this).find(".case-word").css({
		backgroundColor: "#70BEC5"
	});

	$(this).find(".div_eye span").css({
		color: "white"
	})
}, function() {
	$(this).find(".name").css({
		color: "#333333"
	});
	$(this).find(".intro").css({
		color: "#3D8E96"
	});
	$(this).find(".case-word").css({
		backgroundColor: "white"
	});

	$(this).find(".div_eye span").css({
		color: "#3D8E96"
	})
});

var PageIndex1 = 1;
var PageMax1 = 1;

var PageIndex2 = 4;
var PageMax2 = 1;

var Mask = false;

function init() {
	PageMax2 = $("#DesignerUlSlider2 li").size();
	$("#DesignerUlSlider2").css({
		width: PageMax2 * (288 + 12) + "px"
	});
}
$(function() {
	init()
	$("#left2").click(function() {
		if(PageIndex2 > 4) {
			PageIndex2--;
			$("#DesignerUlSlider2").animate({
				marginLeft: -(PageIndex2 - 4) * (288 + 12) + "px"
			}, 300);
		}
	});
	$("#right2").click(function() {
		if(PageIndex2 < PageMax2) {
			PageIndex2++;
			$("#DesignerUlSlider2").animate({
				marginLeft: -(PageIndex2 - 4) * (288 + 12) + "px"
			}, 300);
		}
	});
});

$('.about_main_nar').load('include/conpany-info.html',function(){});
$('.about').click(function(){
		$('.about_main_menu a').removeClass('act');
		$(this).addClass('act');
		$('.about_main_nar').load('include/conpany-info.html');
	});
$('.countwe').click(function(){
		$('.about_main_menu a').removeClass('act');
		$(this).addClass('act');
		$('.about_main_nar').load('include/contactus.html');
	});	
$('.yijian').click(function(){
		$('.about_main_menu a').removeClass('act');
		$(this).addClass('act');
		$('.about_main_nar').load('include/yijian.html');
	});	