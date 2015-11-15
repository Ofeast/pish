function Coin(){
	this.x=0;
	this.y=0;
	this.cur=0;
	this.move();
}

Coin.prototype.draw=function(gd){
	gd.save();
	gd.translate(this.x,this.y);
	gd.drawImage(json['coinAni1'],0,this.cur*60,60,60,30,30,60,60);

	gd.restore();
}
Coin.prototype.move=function(){
	var _this=this;
	setInterval(function(){
		_this.cur++;
		if(_this.cur==10) _this.cur=0;
	},30)

	setInterval(function(){
		_this.x+=(0-_this.x)/5;
		_this.y+=(650-_this.y)/5;
	},30);
}