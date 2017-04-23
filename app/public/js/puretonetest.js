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
        scale = localStorage.getItem('volume'),
        roundToNearestHalf = function(num) {
          return Math.round(num*2)/2;
        }

      console.log('scaling sound by: ', scale);

      osc.frequency.value = freq;
      gain.gain.value = roundToNearestHalf(scale);

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
  gain.connect(audioDest);
  global_frequency_backup = global_frequency;
  global_frequency = frequency;
  adjustStateSound.burst(true);
  global_frequency = global_frequency_backup;

  setTimeout(function() {
  }, adjustStateSound.duration);
}

var global_counter = 0;
function setNewGainValue() {
    switch(global_counter++) {
        case 0:
            setVolumeInDb(10);
            break;
        case 1:
            setVolumeInDb(20);
            break;
        case 2:
            setVolumeInDb(30);
            break;
        case 3:
            setVolumeInDb(50);
            break;
        case 4:
            setVolumeInDb(60);
            break;
        case 5:
            setVolumeInDb(75);
            break;
        case 6:
            setVolumeInDb(95);
            break;
        default:
            break;
    }
}

function setVolumeInDb(decibel) {
    gain.gain.value = Math.pow(10, decibel/20);
}
