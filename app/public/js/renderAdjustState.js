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
    initialGain = 0.25,
    buildComponent = function() {
      var
        paragraphText = 'Was that too loud? Adjust the volume with the slider and click "play" to try again.\n\n Choose the lowest volume level that still allows you to hear the sound, then click "next" to proceed',
        paragraph = '<p>' + paragraphText + '</p>',

        playBtnClickHandler = 'adjustStateSound.burst()',
        playBtnText = 'play',
        playBtn = '<button type="button" class="btn btn-primary btn-block" onclick=' + playBtnClickHandler + '>' + playBtnText + '</button>',

        sliderId = 'adjustStateSlider',
        sliderFunctionCall = '$(function() {' +
          '$("#' + sliderId +'").slider({' +
            'step: 0.05,' +
            'value: ' + initialGain + ',' +
            'max: 2' +
          '});' +
        '})',
        sliderScript = '<script type="text/javascript">' + sliderFunctionCall + '</script>',
        slider = '<div id="' + sliderId + '"></div>',

        nextBtnText = 'next',
        nextBtnHandlerFunction = '$(function() {' +
          '$("#nextBtn").click(function() {' +
            'var val = $("#' + sliderId + '").slider( "value" );' +
            'localStorage.setItem("volume", val);' +
            'stateManager.update();' +
          '});' +
        '});',
        nextBtnHandlerScript = '<script type="text/javascript">' + nextBtnHandlerFunction + '</script>',
        nextBtn = '<button type="button" id="nextBtn" class="btn btn-primary btn-block">' + nextBtnText + '</button>';

      return '<hr/>'+ paragraph + slider + sliderScript + '<BR><div class="col-md-3">' + playBtn + nextBtn + nextBtnHandlerScript + '</div></div>';
    };

    $('head').append('<style>' +
//        '#adjustStateSlider { float: left; clear: left; width: 300px; margin: 15px;}' +
        '#adjustStateSlider {background: #5bc0de;}' +
//        '#adjustStateSlider .ui-slider-range {background: #000;}' +
        '#adjustStateSlider .ui-slider-handle {border-color: #428bca;}' +
    '</style>');

  gain.gain.value = initialGain;
  gain.connect(audioDest);

  adjustStateSound.burst(true);

  setTimeout(function() {
    rootTag.html(buildComponent());
  }, adjustStateSound.duration);
}
