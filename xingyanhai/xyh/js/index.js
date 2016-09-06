

/*---------------------------------banner图轮播----------------------------*/
$(function(){
	var $index=0;
	var $btnTimer=null;
	var $flashTimer=null;
	function play(i){			//轮播函数
		var obj=$(".bannerFalsh li").eq(i);
		obj.siblings().css("display","none");
		obj.fadeIn();
		$(".bannerbtns a").removeClass("active");
		$(".bannerbtns a").eq(i).addClass("active");
	}

	function autoplay(){
		$index++;
		if($index==$(".bannerFalsh li").length){
			$index=0;
		}
		play($index);
	}


	$(".bannerbtns a").on("click",function(){	//点击事件
		$index=$(this).index();
		play($index);
	})

	$(".bannerbtns a").hover(function(){		//hover事件

		var j=$(this).index();
		$btnTimer=setTimeout(function(){
			play(j);
		},300)
	},function(){
		clearInterval($btnTimer);
	})

	$flashTimer=setInterval(function(){			//自动播放
		autoplay();
	},2000);

	$(".bnnnerLT").hover(function(){		//移入清楚计时器
		clearInterval($flashTimer)
	},function(){							//移出开启定时器	
		$flashTimer=setInterval(function(){
			autoplay();
		},2000);
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





/*************************今日热播左边小轮播图*****************************/

$(function(){
	var $currentIndex=0;
	var $btn=true;
	var $timer=null;
	function rightPlay(){						//向左移动
		$btn=false;
		var $nextIndex=$currentIndex+1;
		if($nextIndex==$(".tLplay").length){
			$nextIndex=0;
		}

		$(".tLplay").eq($currentIndex).css("left",0);
		$(".tLplay").eq($nextIndex).css("left",$(".tLplay").outerWidth())
		$(".tLplay").eq($currentIndex).animate({left:-$(".tLplay").outerWidth()},200);
		$(".tLplay").eq($nextIndex).animate({left:0},200,function(){
			$btn=true;
		});

		$currentIndex++;
		if($currentIndex==$(".tLplay").length){
			$currentIndex=0;
		}

	}


	function leftPlay(){						//向右移动
		$btn=false;
		var $preIndex=$currentIndex-1;

		if($preIndex==-1){
			$preIndex=$(".tLplay").length-1
		}	

		$(".tLplay").eq($currentIndex).css("left",0);
		$(".tLplay").eq($preIndex).css("left",-$(".tLplay").outerWidth())
		$(".tLplay").eq($currentIndex).stop().animate({left:$(".tLplay").outerWidth()},200);
		$(".tLplay").eq($preIndex).stop().animate({left:0},200,function(){
			$btn=true;
		});

		$currentIndex--;
		if($currentIndex==-1){
			$currentIndex=$(".tLplay").length-1
		}
	
	}


	$timer=setInterval(function(){			//自动播放
		if($btn){
			rightPlay()
		}
	},2000)

	$(".tLplaybtn span").eq(0).on("click",function(){		//左边按钮
		if($btn){
			leftPlay()
		}
	})

	$(".tLplaybtn span").eq(1).on("click",function(){		//右边按钮
		if($btn){
			rightPlay()
		}
	})


	$(".todayHotLeft").hover(function(){
		clearInterval($timer)
	},function(){
		$timer=setInterval(function(){
			if($btn){
				rightPlay()
			}
		},2000)
	})
	
})



/*************************今日热播右边大轮播*****************************/

$(function(){
	var $currentIndex=0;
	var $btn=true;
	var $timer=null;
	function rightPlay(){						//向左移动
		$btn=false;
		var $nextIndex=$currentIndex+1;
		if($nextIndex==$(".tCplay").length){
			$nextIndex=0;
		}

		$(".tCplay").eq($currentIndex).css("left",0);
		$(".tCplay").eq($nextIndex).css("left",$(".tCplay").outerWidth())
		$(".tCplay").eq($currentIndex).animate({left:-$(".tCplay").outerWidth()},500);
		$(".tCplay").eq($nextIndex).animate({left:0},500,function(){
			$btn=true;
		});

		$currentIndex++;
		if($currentIndex==$(".tCplay").length){
			$currentIndex=0;
		}

	}


	function leftPlay(){						//向右移动
		$btn=false;
		var $preIndex=$currentIndex-1;

		if($preIndex==-1){
			$preIndex=$(".tCplay").length-1
		}	

		$(".tCplay").eq($currentIndex).css("left",0);
		$(".tCplay").eq($preIndex).css("left",-$(".tCplay").outerWidth())
		$(".tCplay").eq($currentIndex).stop().animate({left:$(".tCplay").outerWidth()},500);
		$(".tCplay").eq($preIndex).stop().animate({left:0},500,function(){
			$btn=true;
		});

		$currentIndex--;
		if($currentIndex==-1){
			$currentIndex=$(".tCplay").length-1
		}
	
	}


	$timer=setInterval(function(){			//自动播放
		if($btn){
			rightPlay()
		}
	},5000)

	$(".hotcenterBtn span").eq(0).on("click",function(){		//左边按钮
		if($btn){
			leftPlay()
		}
	})

	$(".hotcenterBtn span").eq(1).on("click",function(){		//右边按钮
		if($btn){
			rightPlay()
		}
	})


	$(".todayHotCenter").hover(function(){
		clearInterval($timer)
	},function(){
		$timer=setInterval(function(){
			if($btn){
				rightPlay()
			}
		},5000)
	})
	
})




