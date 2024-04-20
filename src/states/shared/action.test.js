/**
 * skenario test
 *
 * - asyncPopulateUsersAndThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { describe, expect, vi, it, beforeEach, afterEach } from 'vitest'
import api from '../../utils/api'
import asyncPopulateUsersAndThreads from './action'
import { receiveAllThreadsActionCreator } from '../threads/action'
import { receiveLeaderboardsActionCreator } from '../leaderboard/action'
import { receiveUserActionCreator } from '../users/action'

const fakeThreadResponse = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
]

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
]

const fakeLeaderboardsResponse = [
  {
    id: 'users-1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
]

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers
    api._getAllThreads = api.getAllThreads
    api._getLeaderboards = api.getLeaderboards
  })
  afterEach(() => {
    api.getAllUsers = api._getAllUsers
    api.getAllThreads = api._getAllThreads
    api.getLeaderboards = api._getLeaderboards

    delete api._getAllUsers
    delete api._getAllThreads
    delete api._getLeaderboards
  })

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange

    // stub implementation
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse)
    api.getAllThreads = () => Promise.resolve(fakeThreadResponse)
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse)

    // mock dispatch

    const dispatch = vi.fn()

    // action
    await asyncPopulateUsersAndThreads()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      receiveAllThreadsActionCreator(fakeThreadResponse)
    )
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse)
    )
    expect(dispatch).toHaveBeenCalledWith(
      receiveUserActionCreator(fakeUsersResponse)
    )
  });


  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse)
    api.getAllThreads = () => Promise.reject(fakeErrorResponse)
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse)
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch)


    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
})
