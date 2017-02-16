// JavaScript Document

function goto(id) 
{
	$("#" + id).ScrollTo(400);
 }
 
 
 $(function(){
	/*首页浮动定位*/
	$('.float_list li').hover(function(){
		var float_text = $(this).attr('data-name')
		$(this).find('a').html(float_text)
		$(this).find('a').css({"opacity":"0"})
		$(this).find('a').stop().animate({"opacity":"1"},450)
		},function(){
		var float_less = $(this).attr('data-text')
		$(this).find('a').html(float_less)
		//$(this).find('a').css({"background-color":"#000","opacity":"0.7"})
		$(this).find('a').stop().animate({"opacity":"0"},450)
		
		})		
	$('.float_list li').click(function(){
		$(this).addClass('floag_on').siblings().removeClass('floag_on')
		})	
})	

/*滚动触发动画 */
function revealOnScroll() {
  var scrolled = $(window).scrollTop();

  // 视窗，即viewport，页面可视范围的窗口

  $(".fu-idx").each(function() {
    var current = $(this), // 当前元素
      w_height = $(window).outerHeight(), //视窗高度
      offsetTop = current.offset().top; //当前元素离顶部的高度

    // 计算高度差（此处预留50是为了看效果）scrolled + w_height - 50
    // 当元素进入视窗时，添加class
    if (w_height+scrolled - 100 > offsetTop) {
      current.addClass("animation");
    } else {
      //current.removeClass("animation");
    }
  });
}
$(window).on("scroll", revealOnScroll);