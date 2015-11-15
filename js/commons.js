var json={};
var fishs=['fish1.png','fish2.png','fish3.png','fish4.png','fish5.png','bottom.png','cannon1.png','cannon2.png','cannon3.png','cannon4.png','cannon5.png','cannon6.png','cannon7.png','bullet.png','coinAni1.png'];



function d2a(n){
	return n*Math.PI/180;
}
function a2d(n){
	return n*180/Math.PI;
}
function rnd(n,m){
	return Math.floor(Math.random()*(m-n)+n);
}
function loadImages(arr,callback){
	for (var i = 0; i < arr.length; i++) {
		var oImg=new Image();
		oImg.src='img/'+arr[i];
		~function(index){
			oImg.onload=function(){
				var name=arr[index].split('.')[0];
				json[name]=this;
				if(index==arr.length-1){
					callback && callback();
				}
			}
		}(i);
		
	};
}