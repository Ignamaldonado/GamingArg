import React, { useMemo, useState, useEffect } from 'react'
import '../scss/global.scss'
import AuthContext from '../context/AuthContext'
import 'semantic-ui-css/semantic.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import jwtDecode from 'jwt-decode'
import { setToken, getToken } from '../api/token'

export default function MyApp({ Component, pageProps }) {

  const [auth, setAuth] = useState(undefined)
  const [reloadUser, setReloadUser] = useState(false)

  useEffect(() => {
    const token = getToken()
    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id
      })
    } else {
      setAuth(null)
    }
  }, [reloadUser])
  

  const login = (token) => {
    setToken(token)
    setAuth({
      token,
      idUser: jwtDecode(token).id
    })
  }

  const authData = useMemo(
    () => ({
      auth: auth,
      login: login,
      logout: () => null,
      setReloadUser: setReloadUser,
    }), [auth]
  )

    if(setAuth === undefined) return null

  return (
  <AuthContext.Provider value={authData}>
      <Component {...pageProps} />
      <ToastContainer position='top-right' 
      autoClose={5000} 
      hideProgressBar 
      closeOnClick rtl={false} 
      pauseOnFocusLoss={false} 
      draggable 
      pauseOnHover 
      />
  </AuthContext.Provider>
  )
}

