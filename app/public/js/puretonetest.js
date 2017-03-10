var
  AudioContext = window.AudioContext || window.webkitAudioContext,
  audioCtx = new AudioContext(),
  audioDest = audioCtx.destination,
  gain = audioCtx.createGain(),
  adjustStateSound = {
    duration: 500,
    burst: function(firstCall) {
      var
        freq = global_frequency,
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
  
var global_frequency = 1000;

function playBeep(frequency) {
    gain.gain.value = 0.1;
  gain.connect(audioDest);
  global_frequency_backup = global_frequency;
  global_frequency = frequency;
  adjustStateSound.burst(true);
  global_frequency = global_frequency_backup;

  setTimeout(function() {
  }, adjustStateSound.duration);
}