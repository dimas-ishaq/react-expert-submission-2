/**
 * skenario
 *
 * - Votes thunk
 * - should dispatch setUpVoteThreadActionCreator when upVoteComment API call succeeds
 * - should dispatch setDownVoteThreadActionCreator when downVoteComment API call succeeds
 * - should dispatch setNeutralizeVoteThreadActionCreator when neutralizeVoteComment API call succeeds
*/

import {
  describe, vi, it, expect,
} from 'vitest';
import {
  asyncSetUpVote,
  asyncSetDownVote,
  asyncSetNeutralizeVote,
  setUpVoteThreadActionCreator,
  setDownVoteThreadActionCreator,
  setNeutralizeVoteThreadActionCreator,
} from './action';
import api from '../../utils/api';

describe('Votes thunk', () => {
  it('should dispatch setUpVoteThreadActionCreator when upVoteComment API call succeeds', async () => {
    // arrange
    const threadId = 'thread-1';
    const dispatch = vi.fn();
    const mockApiResponse = { status: 'success', data: { vote: {} } }; // Mocked API response

    // Mocking the API function
    api.upVoteThread = vi.fn().mockResolvedValue(mockApiResponse);

    // action
    await asyncSetUpVote(threadId)(dispatch);

    // assert
    expect(api.upVoteThread).toHaveBeenCalledWith(threadId); // Ensure API function is called with correct arguments
    expect(dispatch).toHaveBeenCalledWith(setUpVoteThreadActionCreator()); // Ensure setUpVoteThreadActionCreator is dispatched
  });

  it('should dispatch setDownVoteThreadActionCreator when downVoteComment API call succeeds', async () => {
    // arrange
    const threadId = 'thread-1';
    const dispatch = vi.fn();
    const mockApiResponse = { status: 'success', data: { vote: {} } }; // Mocked API response

    // Mocking the API function
    api.downVoteThread = vi.fn().mockResolvedValue(mockApiResponse);

    // action
    await asyncSetDownVote(threadId)(dispatch);

    // assert
    expect(api.downVoteThread).toHaveBeenCalledWith(threadId); // Ensure API function is called with correct arguments
    expect(dispatch).toHaveBeenCalledWith(setDownVoteThreadActionCreator()); // Ensure setUpVoteThreadActionCreator is dispatched
  });

  it('should dispatch setNeutralizeVoteThreadActionCreator when neutralizeVoteComment API call succeeds', async () => {
    // arrange
    const threadId = 'thread-1';
    const dispatch = vi.fn();
    const mockApiResponse = { status: 'success', data: { vote: {} } }; // Mocked API response

    // Mocking the API function
    api.neutralizeVoteThread = vi.fn().mockResolvedValue(mockApiResponse);

    // action
    await asyncSetNeutralizeVote(threadId)(dispatch);

    // assert
    expect(api.neutralizeVoteThread).toHaveBeenCalledWith(threadId); // Ensure API function is called with correct arguments
    expect(dispatch).toHaveBeenCalledWith(
      setNeutralizeVoteThreadActionCreator(),
    ); // Ensure setUpVoteThreadActionCreator is dispatched
  });
});
