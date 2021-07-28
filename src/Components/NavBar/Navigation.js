import React from 'react';

import { Navbar,Nav, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';




const Navigation = () =>{

    let history = useHistory();

    const loginRedirect = () => {
        history.push('/login');
    }

    return(
        <div>
            <div className="row">
                <div className="col-md-12">
                 
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="/">DART</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                
                                </Nav>
                                <Nav>
                                    <div>
                                        <Button onClick={loginRedirect} variant="outline-success" >SIGN IN</Button>
                                        {' '}                          
                                        <Button variant="outline-danger" >SIGN UP</Button> 
                                    </div>                                   
                                </Nav>

                            </Navbar.Collapse>
                        </Navbar>
                
                </div>
            </div>
        </div>
    )  

}


export default Navigation;