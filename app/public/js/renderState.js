function renderState(rootTag, state) {
  switch(state) {
    case 'initial':
      renderInitialState(rootTag);
      break;

    case 'adjust':
      renderAdjustState(rootTag);
      break;

    case 'left_speaker':
      renderLeftSpeakerState(rootTag);
      break;

    case 'right_speaker':
      renderRightSpeakerState(rootTag);
      break;
  }
}
