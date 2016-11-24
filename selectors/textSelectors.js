import leftPad from 'left-pad'
import { createSelector } from 'reselect';

import { getOptions as getState } from './rootSelectors'

export const paddedText = createSelector(
  getState,
  state => leftPad(state.text, state.width, state.char)
);
