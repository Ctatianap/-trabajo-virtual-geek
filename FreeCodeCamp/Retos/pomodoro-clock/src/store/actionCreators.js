export const INCREMENT = 'INCREMENT';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const RESET = 'RESET';
export const CHANGE_COUNT_DOWN = 'CHANGE_COUNT_DOWN';

export const increment = ({ option, factor }) => {
  return {
    type: INCREMENT,
    option,
    factor
  }
};
export const play = () => {
  return {
    type: PLAY,
  }
};
export const pause = () => {
  return {
    type: PAUSE,
  }
};
export const reset = () => {
  return {
    type: RESET,
  }
};
export const changeCountDown = () => {
  return {
    type: CHANGE_COUNT_DOWN,
  }
};