import { ActionType } from './action';

const leaderboardsReducer = (leaderboards = null, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARD:
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
};

export default leaderboardsReducer;
