var noCount = 0;
var first  = 0;

function renderLeftSpeakerState(rootTag) {
  var
    paragraphText = 'Next we\'ll play a sound through a single ear to check if each headphone works. We\'ll start with your left',
    paragraph = '<hr/> <p>' + paragraphText + '</p>',

    btnId = 'leftSpeakerStateBtn',
    btn = '<button type="button" class="btn btn-primary" id="' + btnId + '">OK</button>',

    buildComponent = function() {
      var
        paragraphText = 'Did you hear a sound in only your left ear?',
        paragraph = '<p>' + paragraphText + '</p>',

        confirmBtnText = 'yes',
        confirmBtnClickHandler = 'stateManager.update()',
        confirmBtn = '<button type="button" class="btn btn-primary btn-block"  onclick=' + confirmBtnClickHandler + '>' + confirmBtnText + '</button>';

        denyBtnText = 'no',
        denyBtnClickHandler = 'replaySoundLeftEar()',
        denyBtn = '<button type="button" class="btn btn-primary btn-block" onclick=' + denyBtnClickHandler +'>' + denyBtnText + '</button>';

      return '<hr/>'+ paragraph + '<div class="col-md-3">' + denyBtn + confirmBtn + '</div>';
    },
    playSoundInLeftEar = function() {
      var
        channels = 2,
        sampleRate = audioCtx.sampleRate,
        frameCount = sampleRate, // so 0.5s
        audioBuffer = audioCtx.createBuffer(channels, frameCount, sampleRate),
        left = audioBuffer.getChannelData(0),
        bufferNode = audioCtx.createBufferSource();

      for (var i = 0; i < frameCount; i++)
        left[i] = Math.random() * 2 - 1;

      bufferNode.buffer = audioBuffer;
      bufferNode.connect(gain);
      bufferNode.start();
    };

  rootTag.html(paragraph + btn);

  $('#' + btnId).click(function() {
    rootTag.empty();

    playSoundInLeftEar();

    rootTag.html(buildComponent());
  });
}


function replaySoundLeftEar() {
    noCount++;
    if(noCount >= 3 && first== 0) {
        first=1;
        $('#calibrateContainer p').append(" <span class='bg-danger'>Looks like your headphones aren't working properly. Please get another pair and try again.</span>");
    } else if(first != 0){
        //error condition reached, do nothing
        
    } else {
        var
        channels = 2,
        sampleRate = audioCtx.sampleRate,
        frameCount = sampleRate, // so 0.5s
        audioBuffer = audioCtx.createBuffer(channels, frameCount, sampleRate),
        left = audioBuffer.getChannelData(0),
        bufferNode = audioCtx.createBufferSource();

      for (var i = 0; i < frameCount; i++)
        left[i] = Math.random() * 2 - 1;

      bufferNode.buffer = audioBuffer;
      bufferNode.connect(gain);
      bufferNode.start();
    };
}