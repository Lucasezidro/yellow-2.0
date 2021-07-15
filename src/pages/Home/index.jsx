import {
    ErrorMessage,
    Formik,
    Form,
    Field
} from 'formik'

import * as yup from 'yup'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { history } from '../../history'
import { useState } from 'react'
import SignWithGoogle from '../../components/Auth/SignWithGoogle'


import { Container } from './styles'

export default function Home(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    
    
    function handleLogin(){
        const data = {
            email: email,
            password: password
        }
        
        if(email && password === '') {
            alert('E-mail and Password is required.')
        } else {
            history.push('/dashboard')
        }

        console.log(data)
    }

    async function handleSignWithGoogle(){
        await SignWithGoogle()

        history.push('/dashboard')
    }

    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/auth', values)
        .then(resp => {
            const { data } = resp 
            
            if(data) {
                localStorage.setItem('app-token', data)

                history.push('/dashboard')
            }
        })
    }


    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })

    return(
        <Container>

            <Formik 
                initialValues={ {} }
                onSubmit={handleSubmit}
                validationSchema={ validations }
                >
                <Form className="container">
                    <div>
                        <h1>Welcome</h1>

                        <Field 
                        id="email" 
                        type="email" 
                        className="input"
                        placeholder="Your best e-mail" 
                        name="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}

                        />
                        <ErrorMessage 
                            component="span" 
                            name="email"
                            className="error"
                            
                            />

                        <Field
                            id="password" 
                            type="password" 
                            className="input"
                            placeholder="Password" 
                            name="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}

                        />

                        <ErrorMessage 
                            component="span" 
                            name="password"
                            className="error"
                            
                            />  

                        <button 
                            type="button"
                            className="login-google"
                            onClick={handleSignWithGoogle}
                            
                            >
                            continue with google
                        </button>


                        <button 
                        type="submit"
                        className="btn-submit"
                        onClick={handleLogin}

                        >
                            Sign up
                            
                        </button>
                    </div> 
                </Form>
            </Formik>

            <div className="account">
                <Link to="/createAccount" className="link" target="_blank">
                    Or create your account
                </Link>
            </div>

    </Container>
    )
}