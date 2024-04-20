import api from '../../utils/api'

const ActionType = {
  RECEIVE_DETAIL_THREADS: 'RECEIVE_DETAIL_THREADS',
}

const setReceiveDetailThreadActionCreator = (thread) => {
  return {
    type: ActionType.RECEIVE_DETAIL_THREADS,
    payload: {
      thread,
    },
  }
}

const asyncSetReceiveDetailThread = (threadId) => {
  return async (dispatch) => {
    try {
      const thread = await api.getThreadById(threadId)
      dispatch(setReceiveDetailThreadActionCreator(thread))
    } catch (error) {
      console.log(error.message)
    }
  }
}

export {
  ActionType,
  setReceiveDetailThreadActionCreator,
  asyncSetReceiveDetailThread,
}
