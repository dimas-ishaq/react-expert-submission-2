import {
  asyncSetVoteUpComment,
  asyncAddComment,
  addCommentActionCreator,
  asyncSetVoteDownComment,
  asyncSetNeutralizeComment,
  setVoteUpCommentActionCreator,
  setVoteDownCommentActionCreator,
  setNeutralizeCommentActionCreator,
} from './action'
import { describe, vi, it, expect } from 'vitest'
import api from '../../utils/api'

describe('Comment thunk', () => {
  it('should dispatch setVoteUpCommentActionCreator when upVoteComment API call succeeds', async () => {
    // arrange
    const threadId = 'thread-1'
    const commentId = 'comment-1'
    const dispatch = vi.fn()
    const mockApiResponse = { status: 'success', data: { vote: {} } } // Mocked API response

    // Mocking the API function
    api.upVoteComment = vi.fn().mockResolvedValue(mockApiResponse)

    // action
    await asyncSetVoteUpComment(threadId, commentId)(dispatch)

    // assert
    expect(api.upVoteComment).toHaveBeenCalledWith(threadId, commentId) // Ensure API function is called with correct arguments
    expect(dispatch).toHaveBeenCalledWith(setVoteUpCommentActionCreator()) // Ensure setVoteUpCommentActionCreator is dispatched
  })

  it('should dispatch setVoteDownCommentActionCreator when downVoteComment API call succeeds', async () => {
    // arrange
    const threadId = 'thread-1'
    const commentId = 'comment-1'
    const dispatch = vi.fn()
    const mockApiResponse = { status: 'success', data: { vote: {} } } // Mocked API response

    // Mocking the API function
    api.downVoteComment = vi.fn().mockResolvedValue(mockApiResponse)

    // action
    await asyncSetVoteDownComment(threadId, commentId)(dispatch)

    // assert
    expect(api.downVoteComment).toHaveBeenCalledWith(threadId, commentId) // Ensure API function is called with correct arguments
    expect(dispatch).toHaveBeenCalledWith(setVoteDownCommentActionCreator()) // Ensure setVoteUpCommentActionCreator is dispatched
  })

  it('should dispatch setNeutralizeCommentActionCreator when neutralizeVoteComment API call succeeds', async () => {
    // arrange
    const threadId = 'thread-1'
    const commentId = 'comment-1'
    const dispatch = vi.fn()
    const mockApiResponse = { status: 'success', data: { vote: {} } } // Mocked API response

    // Mocking the API function
    api.neutralizeVoteComment = vi.fn().mockResolvedValue(mockApiResponse)

    // action
    await asyncSetNeutralizeComment(threadId, commentId)(dispatch)

    // assert
    expect(api.neutralizeVoteComment).toHaveBeenCalledWith(threadId, commentId) // Ensure API function is called with correct arguments
    expect(dispatch).toHaveBeenCalledWith(setNeutralizeCommentActionCreator()) // Ensure setVoteUpCommentActionCreator is dispatched
  })

  it('should dispatch addCommentActionCreator when createComment API call succeeds', async () => {
    // arrange
    const threadId = 'thread-1'
    const content = 'Ini adalah komentar'
    const dispatch = vi.fn()
    const mockApiResponse = { status: 'success', data: { comment: {} } } // Mocked API response

    // Mocking the API function
    api.createComment = vi.fn().mockResolvedValue(mockApiResponse)

    // action
    await asyncAddComment(threadId, content)(dispatch)

    // assert
    expect(api.createComment).toHaveBeenCalledWith(threadId, content) // Ensure API function is called with correct arguments
    expect(dispatch).toHaveBeenCalledWith(addCommentActionCreator()) // Ensure setVoteUpCommentActionCreator is dispatched
  })
})
