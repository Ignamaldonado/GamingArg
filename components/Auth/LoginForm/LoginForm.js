import {useState} from 'react'
import {Form, Button} from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {toast} from 'react-toastify'
import {LoginApi, resetPasswordApi } from '../../../api/user'
import useAuth  from '../../../hooks/useAuth'

export default function LoginForm({ showRegister, setShowModal }) {

  const [loading, setLoading] = useState(false)
  const { login } = useAuth()


  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true)
      const response = await LoginApi(formData)
      if(response?.jwt) {
        login(response.jwt)
        setShowModal()
        toast.success('Ingresaste con exito!')
      } else {
        toast.error('Usuario o contraseña incorrectos')
      }
      setLoading(false)
    }
  })

  const resetPassword = () => {
    formik.setErrors({})
    const validateEmail = Yup.string().email().required()

    if(!validateEmail.isValidSync(formik.values.identifier)) {
      formik.setErrors({
        identifier: true
      })
      toast.error('Tienes que colocar un email valido')
    } else {
      resetPasswordApi(formik.values.identifier)
    }
  }

  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <Form.Input 
      name='identifier' 
      type="text" 
      placeholder='Correo Electronico' 
      onChange={formik.handleChange} 
      error={formik.errors.identifier}
      />
      <Form.Input 
      name='password' 
      type="password" 
      placeholder='Contraseña' 
      onChange={formik.handleChange} 
      error={formik.errors.password}
      />
      <div className="form-actions">
        <Button type='button' basic onClick={showRegister}>Registrarse</Button>
        <div>
          <Button type='submit' className='submit' loading={loading}>Ingresar</Button>
          <Button type='button' onClick={resetPassword}>Olvidaste la contraseña?</Button>
        </div>
      </div>
    </Form>
  )
}


function initialValues () {
  return {
    identifier: '',
    password: '',
  }
}

function validationSchema () {
  return {
    identifier: Yup.string().email('Tiene que ser un email valido').required(true),
    password: Yup.string().required(true)
  }
}