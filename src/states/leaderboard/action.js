const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
}

const receiveLeaderboardsActionCreator = (leaderboards) => {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboards,
    },
  }
}

export { ActionType, receiveLeaderboardsActionCreator }
