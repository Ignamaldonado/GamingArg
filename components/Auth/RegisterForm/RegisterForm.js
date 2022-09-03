import { Form, Button } from 'semantic-ui-react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { RegisterAPI } from '../../../api/user'

export default function RegisterForm({ showLogin }) {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            RegisterAPI(formData)
        }
    })

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
        name='userName'
        type='text'
        placeholder='Nombre de usuario'
        onChange={formik.handleChange}
        error={formik.errors.userName}
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
        placeholder='Contrasenia'
        onChange={formik.handleChange}
        error={formik.errors.password}
    />
    <div className='form-actions'>
        <Button type='button' basic>
            Inicia Sesion
        </Button>
        <Button type='submit' className='submit'>
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
        userName: '',
        email: '',
        password: ''
    }
}

function validationSchema() {
    return {
        name: Yup.string().required(true),
        lastName: Yup.string().required(true),
        userName: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true)
    }
}
