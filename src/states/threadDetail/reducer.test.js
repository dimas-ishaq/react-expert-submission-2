/* skenario threadDetailReducer
should return initialState when given by unknown action type
should return thread when given by RECEIVE_DETAIL_THREADS action type

*/

import { describe, it, expect } from 'vitest'
import threadDetailReducer from './reducer'

describe('threadDetailReducer function', () => {
  it('should return initialState when given by unknown action type', () => {
    // arrange
    const initialState = null
    const action = {
      type: 'UNKNOWN',
    }

    // action
    const nextstate = threadDetailReducer(initialState, action)

    // assert
    expect(nextstate).toEqual(initialState)
  })

  it('should return thread when given by RECEIVE_DETAIL_THREADS action type', () => {
    const initialState = null
    const action = {
      type: 'RECEIVE_DETAIL_THREADS',
      payload: {
        thread: {
          detailThread: {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg',
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [],
          },
        },
      },
    }
    // action
    const nextstate = threadDetailReducer(initialState, action)

    // assert
    expect(nextstate).toEqual(action.payload.thread)
  })
})
