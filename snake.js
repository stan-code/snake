function Snake(){
  this.x = 0;
  this.y = 0;
  this.xSpeed = 10;
  this.ySpeed = 0

  this.draw = function() {
    ctx.fillStyle = "black"
    ctx.fillRect(this.x, this.y, scale, scale)
  }
  this.update = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
}