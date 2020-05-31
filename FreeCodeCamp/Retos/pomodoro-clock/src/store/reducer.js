import { INCREMENT, PLAY, PAUSE, CHANGE_COUNT_DOWN, RESET } from './actionCreators';

const defaultState = {
  countDown: 25*60,
  countDownType: "Session",
  countDownState: 0,
  sessionValue: 25,
  breakValue: 5,
};
export const reducer = (state = defaultState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case INCREMENT:
      if (!stateCopy.countDownState) {
        stateCopy[`${action.option}Value`] += action.factor;
        stateCopy.countDown = stateCopy.sessionValue * 60;
      }
      return stateCopy;
    case PLAY:
    case PAUSE:
      stateCopy.countDownState = !stateCopy.countDownState ? 1 : 0;
      return stateCopy;
    case CHANGE_COUNT_DOWN:
      stateCopy.countDown -= stateCopy.countDownState;
      if (!stateCopy.countDown) {
        if (stateCopy.countDownType === 'Session') {
          stateCopy.countDownType = 'Break';
          stateCopy.countDown = stateCopy.breakValue * 60;
        } else {
          stateCopy.countDownType = 'Session';
          stateCopy.countDown = stateCopy.sessionValue * 60;
        }
      }
      return stateCopy;
    case RESET:
      return defaultState;
    default:
      return state;
  }
};
