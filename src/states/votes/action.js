import api from '../../utils/api'

const ActionType = {
  UP_VOTE_TREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRALIZE_VOTE_THREAD: 'NEUTRALIZE_VOTE_THREAD',
}

const setUpVoteThreadActionCreator = () => {
  return {
    type: ActionType.UP_VOTE_TREAD,
  }
}
const setDownVoteThreadActionCreator = () => {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
  }
}

const setNeutralizeVoteThreadActionCreator = () => {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD,
  }
}

const asyncSetUpVote = (threadId) => {
  return async (dispatch) => {
    try {
      await api.upVoteThread(threadId)
      dispatch(setUpVoteThreadActionCreator())
    } catch (error) {
      console.log(error.messagr)
    }
  }
}
const asyncSetDownVote = (threadId) => {
  return async (dispatch) => {
    try {
      await api.downVoteThread(threadId)
      dispatch(setDownVoteThreadActionCreator())
    } catch (error) {
      console.log(error.messagr)
    }
  }
}
const asyncSetNeutralizeVote = (threadId) => {
  return async (dispatch) => {
    try {
      await api.neutralizeVoteThread(threadId)
      dispatch(setNeutralizeVoteThreadActionCreator())
    } catch (error) {
      console.log(error.messagr)
    }
  }
}

export {
  asyncSetUpVote,
  asyncSetDownVote,
  asyncSetNeutralizeVote,
  setUpVoteThreadActionCreator,
  setDownVoteThreadActionCreator,
  setNeutralizeVoteThreadActionCreator,
}
