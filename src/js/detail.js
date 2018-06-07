$(function(){
	
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
