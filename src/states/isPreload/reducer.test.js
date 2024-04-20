/**
 * skenario
 *
 * -  isPreloadReducer function
 * -  should return initialState when given by UNKNOWN action type
 * -  should return false when given by SET_IS_PRELOAD action type
*/

import { describe, expect, it } from 'vitest';
import isPreloadReducer from './reducer';

describe('isPreloadReducer function', () => {
  it('should return initialState when given by UNKNOWN action type', () => {
    // arrange
    const initialState = true;
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextstate = isPreloadReducer(initialState, action);

    // assert
    expect(nextstate).toBe(true);
  });
  it('should return false when given by SET_IS_PRELOAD action type', () => {
    // arrange
    const initialState = true;
    const action = {
      type: 'SET_IS_PRELOAD',
      payload: {
        isPreload: false,
      },
    };

    // action
    const nextstate = isPreloadReducer(initialState, action);

    // assert
    expect(nextstate).toBe(false);
  });
});
