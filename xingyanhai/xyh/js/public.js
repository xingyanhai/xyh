

/************************头部下拉菜单***********************/
$(function(){
	$(".lastTop").hover(function(){
		$(".lastcon").css("display","block");
	})
	$(".lastcon").hover(null,function(){
		$(".lastcon").css("display","none");
	})
})