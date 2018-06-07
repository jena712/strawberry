$(function(){
	//登录
	$('#register').click(function(){
		location.href = 'register.html';
	})
	//倒计时
	setInterval(function(){
				var date = new Date();
				var h = 31 - date.getHours();
				var m = 60 - date.getMinutes();
				var s = 60 - date.getSeconds();
				//17：07：34
				var arr = [
					h < 10 ? 0 : Math.floor(h / 10),h % 10,
					m < 10 ? 0 : Math.floor(m / 10),m % 10,
					s < 10 ? 0 : Math.floor(s / 10),s % 10
				];
				var is = $(".seckill h4 span i");
				for(var i = 0,len = is.length;i < len;i ++){
					is[i].innerHTML =  arr[i];
				}
			},1000)
	//品牌
	$(".brand").mouseover(function(){
		$(".menu").css("display","block");
	})
	$(".menu").mouseout(function(){
		$(".menu").css("display","none");
	})
	//注册关注
	$("#attention_icon").click(function(){
		$(this).parent().remove();
	})
	//扫码下载
	$("#footer_cn span").click(function(){
		$(this).parent().remove();
	})
})