/**
 *  skenario
 *
 * -leaderboardsReducer function
 * -should return initialState when given by UNKNOWN action type
 * -should return leaderboards when given by RECEIVE_LEADERBOARD action type
*/

import { describe, expect, it } from 'vitest';
import leaderboardsReducer from './reducer';

describe('leaderboardsReducer function', () => {
  it('should return initialState when given by UNKNOWN action type', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextstate = leaderboardsReducer(initialState, action);

    // assert
    expect(nextstate).toEqual(initialState);
  });
  it('should return leaderboards when given by RECEIVE_LEADERBOARD action type', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'RECEIVE_LEADERBOARD',
      payload: {
        leaderboards: [
          {
            user: {
              id: 'users-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 10,
          },
        ],
      },
    };

    // action
    const nextstate = leaderboardsReducer(initialState, action);

    // assert
    expect(nextstate).toEqual(action.payload.leaderboards);
  });
});
