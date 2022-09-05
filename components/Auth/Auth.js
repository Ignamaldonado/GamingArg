import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm' 


export default function Auth({ show, setLogin, setRegister, setShowModal }) {

  return (
    <>
    {show ? <RegisterForm showLogin={setLogin} showModal={show}/> : <LoginForm showRegister={setRegister} setShowModal={setShowModal}/> }
    </>
  )
}
