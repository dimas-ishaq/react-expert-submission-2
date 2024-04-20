import useInput from '../hooks/useInput'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

  return (
    <>
      <div className="flex flex-col w-full px-10">
        <form className="flex flex-col w-full justify-center items-center gap-y-2">
          <div className="flex flex-col w-full gap-y-2">
            <label className="text-white font-semibold" htmlFor="email">
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
          <div className="flex flex-col w-full gap-y-2">
            <label className="text-white font-semibold" htmlFor="password">
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
            <Button variant={'blue'} label={'Masuk'} onClick={(e) => {
              login({ email, password });
              e.preventDefault()
            }} />
          </div>
        </form>
        <p className="text-left mt-5 text-white text-xs ">
          Belum memiliki akun ?{' '}
          <Link to={'/register'} className="underline">
            Daftar disini
          </Link>
        </p>
      </div>
    </>
  )
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput
