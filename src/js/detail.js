$(function(){
	//放大镜
	const $SmallPic = $('.small_pic');
	const $Mark = $('.mark');
	const $Float = $('.float_layer');
	const $BigPic = $('.big_pic');
	const $BigImg = $('.big_pic img');
	$Mark.mouseenter(function(){
		//$Float.css('display','block');
		$BigPic.css('display','block');
	});
	$Mark.mouseleave(function(){
		$Float.css('display','none');
		$BigPic.css('display','none');
	});
	$Mark.mousemove(function(evt){
		let e = evt || window.event;		
		let left = e.pageX - $Mark.offset().left - parseInt($Float.css('width')) / 2;		
		let top = e.pageY - $Mark.offset().top - parseInt($Float.css('height')) / 2;	
		if(left <= $Mark.offset().left){
			left = $Mark.offset().left;
		}else if(left >= (parseInt($Mark.css('width')) - parseInt($Float.css('width'))){
			left = parseInt($Mark.css('width')) - parseInt($Float.css('width'));
		}
		if(top <= $Mark.offset().top){
			top = $Mark.offset().top;
		}else if(top >= (parseInt($Mark.css('height')) - parseInt($Float.css('height'))){
			top = parseInt($Mark.css('height')) - parseInt($Float.css('height'))
		}
		let pX = left / (parseInt($Mark.css('width')) - parseInt($Float.css('width')));		
		let pY = top / (parseInt($Mark.css('height')) - parseInt($Float.css('height')));
		let Pleft = - pX * (parseInt($BigImg.css('width')) - parseInt($BigPic.css('width')));			
		let Ptop = - pY * (parseInt($BigImg.css('height')) - parseInt($BigPic.css('height')));		
		$BigImg.css({"left": Pleft + 'px',"top" : Ptop + 'px'});
		//console.log($BigImg.css({"left": Pleft ,"top" : Ptop}))
});
})
//通过class属性获取对象
function byClassName(obj,className){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(className);
	}else{
		var arr = [];
		var ele = obj.getElementsByTagName('*');
		for(var i = 0,len = ele.length;i < len;i ++){
			if(ele[i].className == className){
				arr.push(ele[i]);
			}
		}
		return arr;
	}
}
