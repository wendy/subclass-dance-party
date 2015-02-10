var makeBlueBlinkyDancer = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blueBlinky');
};

makeBlueBlinkyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeBlueBlinkyDancer.prototype.constructor = makeBlueBlinkyDancer;
makeBlueBlinkyDancer.prototype.step = function() {
  makeBlinkyDancer.prototype.step.call(this);
  // dance moves below:

}
