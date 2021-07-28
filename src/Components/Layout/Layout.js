import React from 'react'
import Navbar from '../NavBar/Navigation'
import Auxil from '../../hoc/Auxil/Auxil'

import {Container} from 'react-bootstrap'

const Layout = (props) => {

    return(
        <Auxil>
            <Container fluid="true">
                <Navbar />            
            <main>
                {props.children}
            </main>
            </Container>
        </Auxil>
    )
}

export default Layout;