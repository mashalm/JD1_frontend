var
  AudioContext = window.AudioContext || window.webkitAudioContext,
  audioCtx = new AudioContext(),
  audioDest = audioCtx.destination,
  gain = audioCtx.createGain(),
  adjustStateSound = {
    duration: 500,
    burst: function(firstCall) {
      var
        freq = 10000,
        osc = audioCtx.createOscillator(),
        roundToNearestHalf = function(num) {
          return Math.round(num*2)/2;
        }

      osc.frequency.value = freq;
      if (!firstCall) {
        var sliderVal = $('#adjustStateSlider').slider('value');
        gain.gain.value = roundToNearestHalf(sliderVal);
      }

      osc.connect(gain);
      osc.start();

      setTimeout(function() {
        osc.stop();
        osc.disconnect(gain);
      }, adjustStateSound.duration);
    }
  };

function renderAdjustState(rootTag) {
  var
    initialGain = 0.1,
    buildComponent = function() {
      var
        paragraphText = 'Was that too loud? Adjust the volume with the slider and click "play" to try again.\n\nWhen you\'re comfortable with the volume, click "next" to proceed',
        paragraph = '<p>' + paragraphText + '</p>',

        playBtnClickHandler = 'adjustStateSound.burst()',
        playBtnText = 'play',
        playBtn = '<button type="button" class="btn btn-primary btn-block" onclick=' + playBtnClickHandler + '>' + playBtnText + '</button>',

        sliderId = 'adjustStateSlider',
        sliderFunctionCall = '$(function() {' +
          '$("#' + sliderId +'").slider({' +
            'step: 0.05,' +
            'value: 0.1,' +//' + initialGain + ',' +
            'max: 2' +
          '});' +
        '})',
        sliderScript = '<script type="text/javascript">' + sliderFunctionCall + '</script>',
        slider = '<div id="' + sliderId + '"></div>',

        nextBtnText = 'next',
        nextBtnClickHandler = 'stateManager.update()',
        nextBtn = '<button type="button" class="btn btn-primary btn-block" onclick=' + nextBtnClickHandler + '>' + nextBtnText + '</button>';

      return '<hr/>'+ paragraph + slider + sliderScript + '<div class="col-md-3">' + playBtn + nextBtn + '</div>';
    };

  gain.gain.value = initialGain;
  gain.connect(audioDest);

  adjustStateSound.burst(true);

  setTimeout(function() {
    rootTag.html(buildComponent());
  }, adjustStateSound.duration);
}
