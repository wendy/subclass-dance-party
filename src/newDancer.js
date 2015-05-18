var MonoChromeDancer = function (top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('white');
};

MonoChromeDancer.prototype = Object.create(BlinkyDancer.prototype);
MonoChromeDancer.prototype.constructor = MonoChromeDancer;
MonoChromeDancer.prototype.step = function(){
  BlinkyDancer.prototype.step.call(this);

  if( this.$node.hasClass('white') ){
    this.$node.removeClass('white');
    this.$node.addClass('black');
  } else {
    this.$node.removeClass('black');
    this.$node.addClass('white');
  }
};