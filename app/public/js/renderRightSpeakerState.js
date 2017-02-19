function renderRightSpeakerState(rootTag) {
  var
    paragraphText = 'Next we\'ll play a sound through a single ear to check if each headphone works. We\'ll start with your left',
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
        denyBtnClickHandler = 'console.log("exit the app or something")',
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
