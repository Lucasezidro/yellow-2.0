import { Formik, Form, Field } from 'formik'

import * as yup from 'yup'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// import { history } from '../../history'
import SignWithGoogle from '../../components/Auth/SignWithGoogle'

import { Container } from './styles'

export default function CreateAccount(){
    const history = useHistory()

    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/user', values)
        .then(resp => {
            const { data } = resp 
            
            if(data) {
                localStorage.setItem('app-token', data)

                history.push('/')
            }
        })
    }


    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })

    async function handleSignWithGoogle(){
        await SignWithGoogle()

        history.push('/dashboard')
    }


    return(
        <Container>

            <div>
            <h1 className="title">Create your Account</h1>
            <span>Your account <strong>Yellow</strong></span>
                <Formik
                    initialValues={ {} }
                    onSubmit={handleSubmit}
                    validationSchema={ validations }
                >
                    <Form className="container">
                        <div>
                            <Field 
                                id="email" 
                                type="email" 
                                className="input"
                                placeholder="Your best e-mail" 
                                name="email" 
                                required

                            />
                            

                            <Field
                                id="password" 
                                type="password" 
                                className="input"
                                placeholder="Password" 
                                name="password" 
                                required

                            />

                         

                            <Field
                                id="confirm" 
                                type="password" 
                                className="input"
                                placeholder="Confirm Password" 
                                name="confirm" 
                                required

                            />

                          

                            <button 
                                type="submit"
                                className="btn-submit"

                            >
                                Sign up
                                
                            </button>
                            </div>
                    </Form>
                </Formik>

                <button 
                    type="button" 
                    className="btn-google"
                    onClick={handleSignWithGoogle}
                    >
                        Or login with Google
                
                </button>

            </div>
        </Container>
    )
}