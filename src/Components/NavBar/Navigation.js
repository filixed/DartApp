import React from 'react'

  import { Navbar,Nav} from 'react-bootstrap'



const Navigation = () =>{
    return(
        <div>
            <div className="row">
                <div className="col-md-12">
                 
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="/">DART</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link href="/">Strona główna</Nav.Link>
                                
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                
                </div>
            </div>
        </div>
    )  

}


export default Navigation;