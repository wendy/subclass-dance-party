describe("otherDancer", function() {

  var otherDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    otherDancer = new makeOtherDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(otherDancer.$node).to.be.an.instanceof(jQuery);
  });

  // it("should have a step function that makes its node blink", function() {
  //   sinon.spy(otherDancer.$node, 'toggle');
  //   otherDancer.step();
  //   expect(otherDancer.$node.toggle.called).to.be.true;
  // });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(otherDancer, "step");
      expect(otherDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(otherDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(otherDancer.step.callCount).to.be.equal(2);
    });
  });
});
