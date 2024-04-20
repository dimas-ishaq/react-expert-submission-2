import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Button from './Button';

function RegisterInput({ register }) {
  const [username, onUsernameChange, setUsername] = useInput('');
  const [email, onEmailChange, setEmail] = useInput('');
  const [password, onPasswordChange, setPassword] = useInput('');

  const handleRegister = () => {
    register({ username, email, password });
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col w-full justify-center px-10">
      <form className="flex flex-col gap-y-2 w-full">
        <div className="flex flex-col gap-y-2">
          <label className="font-semibold text-white" htmlFor="username">
            Username
          </label>
          <input
            className="px-3 py-2 rounded"
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={onUsernameChange}
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="font-semibold text-white" htmlFor="email">
            Email
          </label>
          <input
            className="px-3 py-2 rounded"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onEmailChange}
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="font-semibold text-white" htmlFor="password">
            Password
          </label>
          <input
            className="px-3 py-2 rounded"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
          />
        </div>
        <div className="mt-2 w-full">
          \
          <Button
            variant="blue"
            label="Daftar"
            onClick={handleRegister}
          />
        </div>
      </form>
      <p className="text-white text-left text-xs mt-5">
        Sudah mempunyai akun ?
        {' '}
        <Link to="/" className="underline">
          Masuk disini
        </Link>
      </p>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
