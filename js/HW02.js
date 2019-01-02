$(function(){
	$(".plus").click(function(){
		$(this).parent().next().next().show(500);
		$(this).css("display","none");
		$(this).siblings().css("display", "inline-block");
	});
});
$(function(){
	$(".minus").click(function(){
		$(this).parent().next().next().hide(500);
		$(this).css("display","none");
		$(this).siblings().css("display", "inline-block ");
	});
});