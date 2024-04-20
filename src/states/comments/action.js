import api from '../../utils/api';

const ActionType = {
  SET_VOTE_UP_COMMENT: 'SET_VOTE_UP_COMMENT',
  SET_VOTE_DOWN_COMMENT: 'SET_VOTE_DOWN_COMMENT',
  SET_NEUTRALIZE_COMMENT: 'SET_NEUTRALIZE_COMMENT',
  ADD_COMMENT: 'ADD_COMMENT',
};

const setVoteUpCommentActionCreator = () => ({
  type: ActionType.SET_VOTE_UP_COMMENT,
});
const setVoteDownCommentActionCreator = () => ({
  type: ActionType.SET_VOTE_DOWN_COMMENT,
});

const setNeutralizeCommentActionCreator = () => ({
  type: ActionType.SET_NEUTRALIZE_COMMENT,
});

const addCommentActionCreator = () => ({
  type: ActionType.ADD_COMMENT,
});

const asyncSetVoteUpComment = (threadId, commentId) => async (dispatch) => {
  try {
    await api.upVoteComment(threadId, commentId);
    dispatch(setVoteUpCommentActionCreator());
  } catch (error) {
    console.log(error.message);
  }
};
const asyncSetVoteDownComment = (threadId, commentId) => async (dispatch) => {
  try {
    await api.downVoteComment(threadId, commentId);
    dispatch(setVoteDownCommentActionCreator());
  } catch (error) {
    console.log(error.message);
  }
};

const asyncSetNeutralizeComment = (threadId, commentId) => async (dispatch) => {
  try {
    await api.neutralizeVoteComment(threadId, commentId);
    dispatch(setNeutralizeCommentActionCreator());
  } catch (error) {
    console.log(error.message);
  }
};

const asyncAddComment = (threadId, content) => async (dispatch) => {
  try {
    await api.createComment(threadId, content);
    dispatch(addCommentActionCreator());
  } catch (error) {
    console.log(error.message);
  }
};

export {
  asyncAddComment,
  asyncSetNeutralizeComment,
  asyncSetVoteDownComment,
  asyncSetVoteUpComment,
  setVoteUpCommentActionCreator,
  setVoteDownCommentActionCreator,
  setNeutralizeCommentActionCreator,
  addCommentActionCreator,
};
