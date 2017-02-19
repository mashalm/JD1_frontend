function renderInitialState(rootTag) {
  var
    warning = 'before we begin, we\'re going to play a short sound to make sure your headphones work.',
    paragraph = '<p>' + warning + '</p>',
    confirmation = 'OK',
    btnClickHandler = 'stateManager.update()',
    btn = '<button type="button" class="btn btn-primary btn-block" onclick=' + btnClickHandler + '>' + confirmation + '</button>',

    final = paragraph + btn;

  rootTag.html(final);
}
