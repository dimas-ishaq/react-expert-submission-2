/**
 * skenario test
 *
 *  - AsyncPreloadProcess thunk
 *  - should dispatch setVoteUpCommentActionCreator when upVoteComment API call succeeds
 *  - should dispatch setVoteDownCommentActionCreator when downVoteComment API call succeeds'
 *  - should dispatch setNeutralizeCommentActionCreator when neutralizeVoteComment API call succeeds'
 *  - should dispatch addCommentActionCreator when createComment API call succeeds
 */

import {
  describe, vi, it, expect, beforeEach, afterEach,
} from 'vitest';
import { setAuthUserActionCreator } from '../authUser/action';
import { asyncPreloadProcess, setIsPreloadActionCreator } from './action';
import api from '../../utils/api';

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeErrorResponse = () => { throw new Error('Ups something wrong'); };

describe('AsyncPreloadProcess thunk', () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile;
    delete api._getOwnProfile;
  });

  it('should dispatch setAuthUserActionCreator when getOwnProfile API call succeeds', async () => {
    // arrange

    // stub implementation
    api.getOwnProfile = () => Promise.resolve(fakeUsersResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeUsersResponse)); // Ensure setVoteUpCommentActionCreator is dispatched
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false)); // Ensure setVoteUpCommentActionCreator is dispatched
  });

  it('should dispatch setAuthUserActionCreator with argument null when getOwnProfile API call failed', async () => {
    // arrange

    // stub implementation
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null)); // Ensure setVoteUpCommentActionCreator is dispatched
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false)); // Ensure setVoteUpCommentActionCreator is dispatched
  });
});
