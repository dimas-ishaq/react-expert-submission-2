//create action and action type
import api from '../../utils/api'
import { toast } from 'react-toastify'

const notifyError = (message) => {
  toast.error(message, {
    autoClose: 1500,
    theme: 'colored',
  })
}

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
}

const setAuthUserActionCreator = (authUser) => {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  }
}

const unsetAuthUserActionCreator = () => {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  }
}

const asyncSetAuthUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const token = await api.login({ email, password })
      api.putAccessToken(token)
      console.log(token)
      const authUser = await api.getOwnProfile()
      dispatch(setAuthUserActionCreator(authUser))
    } catch (error) {
      notifyError(error.message)
    }
  }
}

const asyncUnsetAuthUser = () => {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator())
    api.putAccessToken('')
  }
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
}
