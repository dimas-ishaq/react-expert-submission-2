import RegisterInput from '../components/RegisterInput'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { asyncRegisterUser } from '../states/users/action'

const RegisterPage = () => {
  const dispatch = useDispatch()

  const register = ({ username, email, password }) => {
    dispatch(asyncRegisterUser(username, email, password))
  }
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col w-full min-h-screen bg-blue-950/90 items-center justify-center">
        <div className="grid lg:grid-cols-2 container">
          <div className="flex flex-col items-center justify-center w-full">
            <img
              src="./images/phone.png"
              className="object-fit w-64"
              alt="phone"
            />
            <RegisterInput register={register} />
          </div>
          <div className="lg:flex flex-col hidden items-center justify-center">
            <img
              src="./images/register.png"
              className="object-fit w-11/12"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
