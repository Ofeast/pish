var FISH_SIZE=[
	null,
	{w: 55, h: 37, collR: 17},
	{w: 78, h: 64, collR: 24},
	{w: 72, h: 56, collR: 20},
	{w: 77, h: 59, collR: 22},
	{w: 107, h: 122, collR: 29}
];

function Fish(type){
	this.type=type;
	this.x=0;
	this.y=0;
	this.move();
	this.cur=0;
	this.rotate=0;
	this.speed=1;
	this.timer1=null;
	this.timer2=null;
	this.collR=FISH_SIZE[this.type].collR;
}

Fish.prototype.move=function(){
	var _this=this;
	this.timer1=setInterval(function(){
		_this.cur++
		if(_this.cur==4)_this.cur=0;
	},150)
	this.timer2=setInterval(function(){
		_this.x+=Math.cos(d2a(_this.rotate))*_this.speed;
		_this.y+=Math.sin(d2a(_this.rotate))*_this.speed;
	},30)
}
Fish.prototype.draw=function(gd){
	var w=FISH_SIZE[this.type].w;
	var h=FISH_SIZE[this.type].h;
	gd.save();
	gd.translate(this.x,this.y);
	gd.rotate(d2a(this.rotate));
	gd.drawImage(json['fish'+this.type],0,this.cur*h,w,h,-w/2,-h/2,w,h);
	gd.restore();
}
Fish.prototype.close=function(){
	clearInterval(this.timer1);
	clearInterval(this.timer2);
}
Fish.prototype.isIn=function(x,y){
	var a=x-this.x;
	var b=y-this.y;
	
	var c=Math.sqrt(a*a+b*b);
	
	if(c<this.collR){
		return true;	
	}else{
		return false;
	}
};