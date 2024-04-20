/**
 * skenario test
 *
 *  - authUserReducer function
 *  - should return initialState when given by UNKNOWN action type
 *  - should return user when given by SET_AUTH_USER action type
 *  - should return null when given by UNSET_AUTH_USER action type
 */

import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';

describe('authUser function', () => {
  it('should return initialState when given by UNKNOWN action type', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action

    const nextstate = authUserReducer(initialState, action);

    // assert
    expect(nextstate).toEqual(initialState);
  });

  it('should return user when given by SET_AUTH_USER action type', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: {
          id: 'john_doe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };
    // action

    const nextstate = authUserReducer(initialState, action);

    // assert
    expect(nextstate).toEqual(action.payload.authUser);
  });

  it('should return null when given by UNSET_AUTH_USER action type', () => {
    // arrange

    const initialState = null;
    const action = {
      type: 'UNSET_AUTH_USER',
      payload: {
        authUser: null,
      },
    };

    // action
    const nextstate = authUserReducer(initialState, action);

    // assert
    expect(nextstate).toBeNull();
  });
});
