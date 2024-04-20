/**
 * skenario testing
 *
 * - ThreadInputComments component
 *   - should handle comments typing correctly
 *   - should call addThread function when buat button is clicked
 */
import { describe, it, expect, afterEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import ThreadInputComments from './ThreadInputComments'

expect.extend(matchers)

describe('ThreadInputComments component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle comment typing correctly', async () => {
    // Arrange
    const threadId = 'thread-1'
    render(<ThreadInputComments id={threadId} addCommentThread={() => { }} />)

    const commentInput = await screen.getByTestId('comment')

    await fireEvent.input(commentInput, {
      target: {
        innerHTML: 'Pasti aman dung bang',
      },
    })

    const newValue = commentInput.innerHTML

    // Lakukan asersi terhadap nilai yang diperbarui
    expect(newValue).toBe('Pasti aman dung bang')
  })

  it('should call addCommentThread function when Kirim button is clicked', async () => {
    // Arrange

    const mockAddCommentThread = vi.fn()
    const threadId = 'thread-1'
    render(
      <ThreadInputComments
        id={threadId}
        addCommentThread={mockAddCommentThread}
      />
    )
    const commentInput = await screen.getByTestId('comment')

    await fireEvent.input(commentInput, {
      target: {
        innerHTML: 'Pasti aman dung bang',
      },
    })

    const newValue = await commentInput.innerHTML

    // Temukan tombol 'Kirim'
    const addCommentThreadButton = await screen.getByRole('button', {
      name: 'Kirim',
    })

    // Action: Klik tombol 'Kirim'
    await userEvent.click(addCommentThreadButton)

    // Assert: Pastikan bahwa mockAddCommentThread dipanggil dengan argumen yang benar
    expect(mockAddCommentThread).toBeCalledWith(threadId, newValue)
  })
})
