/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */
import { MemoryRouter } from 'react-router-dom';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle username typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
        <RegisterInput register={() => {}} />
      </MemoryRouter>,
    );
    const usernameInput = await screen.getByPlaceholderText('Username');

    // Action
    await userEvent.type(usernameInput, 'Dimas');

    // Assert
    expect(usernameInput).toHaveValue('Dimas');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
        <RegisterInput register={() => {}} />
      </MemoryRouter>,
    );
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'dimas212@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('dimas212@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
        <RegisterInput register={() => {}} />
      </MemoryRouter>,
    );
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'dimas212');

    // Assert
    expect(passwordInput).toHaveValue('dimas212');
  });

  it('should call Register function when login button is clicked', async () => {
    // Arrange

    const mockRegister = vi.fn();
    render(
      <MemoryRouter>
        <RegisterInput register={mockRegister} />
      </MemoryRouter>,
    );
    const usernameInput = await screen.getByPlaceholderText('Username');
    await userEvent.type(usernameInput, 'Dimas');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'dimas212@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'dimas212');
    const registerButton = await screen.getByRole('button', {
      name: 'Daftar',
    });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      username: 'Dimas',
      email: 'dimas212@gmail.com',
      password: 'dimas212',
    });
  });
});
