import React from 'react';
import { Form, Button } from 'react-bootstrap';
import classes from './Login.module.css'

const Login = () => {
    return (
        <div className={classes.Auth}>
            <Form >
                <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"                    
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"                  
                />
                </Form.Group>
                <Button block size="lg" type="submit" >
                Login
                </Button>
            </Form>
        </div>
    )
}

export default Login;