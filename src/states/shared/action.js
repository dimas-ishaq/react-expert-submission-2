import { receiveAllThreadsActionCreator } from '../threads/action';
import { receiveUserActionCreator } from '../users/action';
import { receiveLeaderboardsActionCreator } from '../leaderboard/action';
import api from '../../utils/api';

const asyncPopulateUsersAndThreads = () => async (dispatch) => {
  try {
    const users = await api.getAllUsers();
    const threads = await api.getAllThreads();
    const leaderboards = await api.getLeaderboards();

    dispatch(receiveLeaderboardsActionCreator(leaderboards));
    dispatch(receiveAllThreadsActionCreator(threads));
    dispatch(receiveUserActionCreator(users));
  } catch (error) {
    alert(error.message);
  }
};

export default asyncPopulateUsersAndThreads;
