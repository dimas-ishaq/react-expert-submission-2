/**
 * skenario testing
 *
 * - ThreadInput component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle body typing correctly
 *   - should call addThread function when buat button is clicked
 */
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, afterEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import ThreadInput from './ThreadInput'
import { Provider } from 'react-redux'
import store from '../states'

expect.extend(matchers)

describe('ThreadInput component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle title typing correctly', async () => {
    // Arrange
    render(<ThreadInput addThread={() => { }} />)
    const titleInput = await screen.getByPlaceholderText('Title')

    // Action
    await userEvent.type(titleInput, 'Bagaimana cara membuat thread?')

    // Assert
    expect(titleInput).toHaveValue('Bagaimana cara membuat thread?')
  })

  it('should handle category typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ThreadInput addThread={() => { }} />
        </Provider>
      </MemoryRouter>
    )
    const categoryInput = await screen.getByPlaceholderText('Category')

    // Action
    await userEvent.type(categoryInput, 'pertanyaan')

    // Assert
    expect(categoryInput).toHaveValue('pertanyaan')
  })

  it('should handle content typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ThreadInput addThread={() => { }} />
        </Provider>
      </MemoryRouter>
    )
    const contentInput = await screen.getByPlaceholderText('Content')

    // Action
    await userEvent.type(
      contentInput,
      'Untuk membuat thread baru, kita bisa mengklik tombol buat thread dan mengisi judul, category dan content isi'
    )

    // Assert
    expect(contentInput).toHaveValue(
      'Untuk membuat thread baru, kita bisa mengklik tombol buat thread dan mengisi judul, category dan content isi'
    )
  })

  it('should call addThread function when Buat button is clicked', async () => {
    // Arrange

    const mockCreateThread = vi.fn()
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ThreadInput addThread={mockCreateThread} />
        </Provider>
      </MemoryRouter>
    )
    const titleInput = await screen.getByPlaceholderText('Title')
    await userEvent.type(titleInput, 'Bagaimana cara membuat thread?')
    const categoryInput = await screen.getByPlaceholderText('Category')
    await userEvent.type(categoryInput, 'pertanyaan')
    const contentInput = await screen.getByPlaceholderText('Content')
    await userEvent.type(
      contentInput,
      'Untuk membuat thread baru, kita bisa mengklik tombol buat thread dan mengisi judul, category dan content isi'
    )
    const addThreadButton = await screen.getByRole('button', {
      name: 'Buat',
    })

    // Action
    await userEvent.click(addThreadButton)

    // Assert
    expect(mockCreateThread).toBeCalledWith({
      title: 'Bagaimana cara membuat thread?',
      body: 'Untuk membuat thread baru, kita bisa mengklik tombol buat thread dan mengisi judul, category dan content isi',
      category: 'pertanyaan',
    })
  })
})
