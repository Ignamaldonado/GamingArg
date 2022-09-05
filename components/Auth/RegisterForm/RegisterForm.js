import {useState} from 'react'
import { Form, Button } from 'semantic-ui-react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {toast} from 'react-toastify'
import { RegisterAPI } from '../../../api/user'

export default function RegisterForm({ showLogin }) {
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: initialValues(),
        validateOnChange:false,
        validateOnBlur: false,
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true)
            const response = await RegisterAPI(formData)
            if(response?.jwt) {
                showLogin()
                toast.success('Usuario creado!')
            } else {
                toast.error('Error al registrar usuario, intentar mas tarde')
            }
            setLoading(false)
        }
    })

    console.log(formik.errors)

  return (
   <Form className='login-form' onSubmit={formik.handleSubmit}>
    <Form.Input 
        name='name'
        type='text'
        placeholder='Nombre'
        onChange={formik.handleChange}
        error={formik.errors.name}
    />
    <Form.Input 
        name='lastName'
        type='text'
        placeholder='Apellidos'
        onChange={formik.handleChange}
        error={formik.errors.lastName}
    />
    <Form.Input 
        name='username'
        type='text'
        placeholder='Nombre de usuario'
        onChange={formik.handleChange}
        error={formik.errors.username}
    />
    <Form.Input 
        name='email'
        type='text'
        placeholder='Correo Electronico'
        onChange={formik.handleChange}
        error={formik.errors.email}
    />
    <Form.Input 
        name='password'
        type='password'
        placeholder='Contraseña'
        onChange={formik.handleChange}
        error={formik.errors.password}
    />
    <div className='password-instructions'> • El email tiene que contener minimo una letra y numero</div>
    <div className='form-actions'>
        <Button type='button' basic onClick={showLogin}>
            Inicia Sesion
        </Button>
        <Button type='submit' className='submit' loading={loading}>
            Registrar
        </Button>
    </div>
   </Form>
  )
}


function initialValues() {
    return {
        name: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    }
}

function validationSchema() {
    return {
        name: Yup.string().required(true),
        lastName: Yup.string().required(true),
        username: Yup.string().required(true).min(4, 'Nombre muy corto').max(16, 'Nombre muy largo').matches(/[a-z\d]*_?[a-z\d]+/, 'Nombre de usuario solo puede contener numeros y letras'),
        email: Yup.string().email('Tiene que ser un email valido').required(true),
        password: Yup.string().required(true).min(8, 'Contraseña muy corta').max(16, 'Contraseña muy larga').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/, 'La contraseña debe tener un numero y una letra minimo')
    }
}
