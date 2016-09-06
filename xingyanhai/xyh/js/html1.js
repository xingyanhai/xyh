/*全部商品累下啦菜单*/
$(function(){
	$(".allgoods").hover(function(){
		$("#navList").css("display","block");
	},function(){
		$("#navList").css("display","none");
	})
})



/********************************nav选项卡******************************/
$(function(){
	$("#navList>li").hover(function(){			//mouseenter
		if($(this).index()<7){
			$(".listCon").css("display","none");
			$(".listCon").eq($(this).index()).css("display","block")
		}
	},function(){								//mouseleave
		$(".listCon").css("display","none");
	})
})



/*发货地址选择选项卡*/
$(function(){
	$(".detadd").hover(function(){
		$(".detaddcon").css("display","block")
	},function(){
		$(".detaddcon").css("display","none")
	})

	$(".detaddconnav>li").on("click",function(){
		$(this).siblings().removeClass("detaddconnavactive");
		$(this).addClass("detaddconnavactive");
		$(".area-list").eq($(this).index()).css("display","block");
		$(".area-list").eq($(this).index()).siblings().css("display","none")
	})

	$(".area-list").on("click",$(".area-list li a"),function(e){
		if(e.target.tagName.toLowerCase()=="a"){
			//console.log($(e.target).html())
			console.log($(e.target).index())
		}

	})

})




