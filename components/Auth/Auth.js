import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm' 


export default function Auth({ show, setLogin, setRegister }) {

  return (
    <>
    {show ? <RegisterForm showLogin={setLogin} /> : <LoginForm showRegister={setRegister}/> }
    </>
  )
}
