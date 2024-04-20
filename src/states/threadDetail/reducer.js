import { ActionType } from './action';

const threadDetailReducer = (thread = null, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_THREADS:
      return action.payload.thread;
    default:
      return thread;
  }
};

export default threadDetailReducer;
