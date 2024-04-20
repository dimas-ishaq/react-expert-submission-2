// configure store
import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './authUser/reducer'
import userReducer from './users/reducer'
import threadsReducer from './threads/reducer'
import leaderboardsReducer from './leaderboard/reducer'
import isPreloadReducer from './isPreload/reducer'
import threadDetailReducer from './threadDetail/reducer'
import { loadingBarReducer } from 'react-redux-loading-bar'

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    user: userReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    leaderboards: leaderboardsReducer,
    threadDetail: threadDetailReducer,
    loadingBar: loadingBarReducer,
  },
})

export default store
