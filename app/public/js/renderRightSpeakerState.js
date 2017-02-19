var noCountRight = 0;
var firstRight  = 0;
function renderRightSpeakerState(rootTag) {
  var
    paragraphText = 'Next we\'ll test your right ear.',
    paragraph = '<hr/> <p>' + paragraphText + '</p>',

    btnId = 'rightSpeakerStateBtn',
    btn = '<button type="button" class="btn btn-primary" id="' + btnId + '">OK</button>',

    buildComponent = function() {
      var
        paragraphText = 'Did you hear a sound in only your right ear?',
        paragraph = '<p>' + paragraphText + '</p>',

        confirmBtnText = 'yes',
        confirmBtnClickHandler = 'window.location="/puretonetest"';//'stateManager.update()',
        confirmBtn = '<button type="button" class="btn btn-primary btn-block" onclick=' + confirmBtnClickHandler + '>' + confirmBtnText + '</button>';

        denyBtnText = 'no',
        denyBtnClickHandler = 'replaySoundRightEar()',
        denyBtn = '<button type="button" class="btn btn-primary btn-block" onclick=' + denyBtnClickHandler +'>' + denyBtnText + '</button>';

      return '<hr/>'+ paragraph + '<div class="col-md-3">'+ denyBtn + confirmBtn + '</div>';
    },
    playSoundInRightEar = function() {
      var
        channels = 2,
        sampleRate = audioCtx.sampleRate,
        frameCount = sampleRate, // so 0.5s
        audioBuffer = audioCtx.createBuffer(channels, frameCount, sampleRate),
        left = audioBuffer.getChannelData(1),
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

    playSoundInRightEar();

    rootTag.html(buildComponent());
  });
}


function replaySoundRightEar() {
    noCountRight++;
    if(noCountRight >= 3 && firstRight== 0) {
        firstRight=1;
        $('#calibrateContainer p').append(" <span class='bg-danger'>Looks like your headphones aren't working properly. Please get another pair and try again.</span>");
    } else if(firstRight != 0){
        //error condition reached, do nothing
        
    } else {
    var
        channels = 2,
        sampleRate = audioCtx.sampleRate,
        frameCount = sampleRate, // so 0.5s
        audioBuffer = audioCtx.createBuffer(channels, frameCount, sampleRate),
        left = audioBuffer.getChannelData(1),
        bufferNode = audioCtx.createBufferSource();

      for (var i = 0; i < frameCount; i++)
        left[i] = Math.random() * 2 - 1;

      bufferNode.buffer = audioBuffer;
      bufferNode.connect(gain);
      bufferNode.start();
    }
}
