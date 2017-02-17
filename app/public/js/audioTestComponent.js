var stateManager = ['adjust', 'left_speaker', 'right_speaker'];

stateManager.nextState = (function() {
  var index = 0;

  return function() {
    nextIndex = index == stateManager.length - 1 ? index : index++;
    return stateManager[nextIndex];
  };
}());

stateManager.update = function() {
  var
    rootTag = $('#calibrateContainer'),
    nextState = this.nextState();

  rootTag.empty();

  renderState(rootTag, nextState);
};

function initHearingTest() {
  stateManager.update();
}
