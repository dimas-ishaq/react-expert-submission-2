/* skenario userReducer
should return initialState when given by UNKNOWN action type
should return user when given by REGISTER_USER action type
*/

import { describe, expect, it } from 'vitest'
import userReducer from './reducer'

describe('userReducer function', () => {
  it('should return initialState when given by UNKNOWN action type', () => {
    // arrange
    const initialState = []
    const action = {
      type: 'UNKNOWN',
    }

    // action
    const nextstate = userReducer(initialState, action)

    // assert
    expect(nextstate).toEqual(initialState)
  })
  it('should return false when given by REGISTER_USER action type', () => {
    // arrange
    const initialState = []
    const action = {
      type: 'REGISTER_USER',
      payload: {
        user: {
          id: 'user-123',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    }

    // action
    const nextstate = userReducer(initialState, action)

    // assert
    expect(nextstate).toEqual(action.payload.user)
  })
})
