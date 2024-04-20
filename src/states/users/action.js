import { toast } from 'react-toastify';
import api from '../../utils/api';

const notifySuccess = (message) => {
  toast.success(message, {
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
  REGISTER_USER: 'REGISTER_USER',
};

const receiveUserActionCreator = (user) => ({
  type: ActionType.REGISTER_USER,
  payload: {
    user,
  },
});

const asyncRegisterUser = (name, email, password) => async () => {
  try {
    await api.register({ name, email, password });
    notifySuccess('Berhasil mendaftar');
  } catch (error) {
    notifyError(error.message);
  }
};

export { ActionType, receiveUserActionCreator, asyncRegisterUser };
