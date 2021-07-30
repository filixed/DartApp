import React from 'react';

import { Button, Form } from 'react-bootstrap';
import classes from '../Login/Login.module.css'

const Register = () => {
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
                Register
                </Button>
            </Form>
        </div>
    )
}

export default Register;
