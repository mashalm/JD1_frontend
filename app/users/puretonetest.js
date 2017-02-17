var
      AudioContext = window.AudioContext || window.webkitAudioContext,
      audioCtx = new AudioContext(),
      audioDest = audioCtx.destination,
      gain = audioCtx.createGain(),
      adjustStateSound = {
          duration: 500,
          burst: function() {
          var
              freq = 10000,
              osc = audioCtx.createOscillator(),
              roundToNearestHalf = function(num) {
              return Math.round(num*2)/2;
              }

          osc.frequency.value = freq;
          
          gain.gain.value = roundToNearestHalf(0.5);
          

          osc.connect(gain);
          osc.start();

          setTimeout(function() {
              osc.stop();
              osc.disconnect(gain);
          }, adjustStateSound.duration);
          }
      };
  function puretonetestwrapper() {
      adjustStateSound.burst();
  }

module.exports = puretonetest;