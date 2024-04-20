import LoginInput from '../components/LoginInput'
import { useDispatch } from 'react-redux'
import { asyncSetAuthUser } from '../states/authUser/action'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginPage = () => {
  const dispatch = useDispatch()
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }))
  }
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col bg-blue-950/90 min-h-screen w-full justify-center items-center">
        <div className="grid lg:grid-cols-2 container w-full">
          <div className="flex flex-col w-full items-center justify-center ">
            <img
              src="./images/phone.png"
              className="object-fit w-64"
              alt="phone"
            />
            <LoginInput login={onLogin} />
          </div>
          <div className="lg:flex hidden flex-col items-center justify-center">
            <img
              src="./images/login.png"
              className="object-fit w-9/12"
              alt="login"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
