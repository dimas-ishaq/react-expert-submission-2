/* skenario thread
should return initialState when given by unknown action type
should return thread when given by RECEIVE_THREADS action type
should return thread when given by ADD_THREAD action type

*/

import { describe, it, expect } from 'vitest'
import threadsReducer from './reducer'

describe('threadReducer function', () => {
  it('should return initialState when given by unknown action type', () => {
    // arrange
    const initialState = []
    const action = {
      type: 'UNKNOWN',
    }

    // action
    const nextstate = threadsReducer(initialState, action)

    // assert
    expect(nextstate).toEqual(initialState)
  })

  it('should return thread when given by RECEIVE_THREADS action type', () => {
    // arrange
    const initialState = []
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
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
        ],
      },
    }

    // action
    const nextstate = threadsReducer(initialState, action)

    // assert
    expect(nextstate).toEqual(action.payload.threads)
  })

  it('should return thread when given by ADD_THREAD action type', () => {
    // arrange
    const initialState = [
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
    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Kedua',
          body: 'Ini adalah thread kedua',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    }

    // action
    const nextstate = threadsReducer(initialState, action)

    // assert
    expect(nextstate).toEqual([action.payload.thread, ...initialState])
  })
})
