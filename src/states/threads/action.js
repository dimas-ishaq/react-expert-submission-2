import { toast } from 'react-toastify';
import api from '../../utils/api';

const notifySuccess = () => {
  toast.success('Thread berhasil dibuat', {
    autoClose: 1500,
    theme: 'colored',
  });
};
const notifyError = (message) => {
  toast.error(message, {
    autoClose: 1500,
    theme: 'colored',
  });
};

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
};

const receiveAllThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREAD,
  payload: {
    thread,
  },
});

const asyncAddThread = ({ title, body, category }) => async (dispatch) => {
  try {
    const thread = await api.createThread({ title, body, category });
    dispatch(addThreadActionCreator(thread));
    notifySuccess();
  } catch (error) {
    notifyError(error.message);
  }
};

export {
  ActionType,
  addThreadActionCreator,
  receiveAllThreadsActionCreator,
  asyncAddThread,
};
