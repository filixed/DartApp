import React from 'react';

import {Button, ButtonGroup, Dropdown, DropdownButton} from 'react-bootstrap'


const Butt = (props) => {


   return(
       
            <DropdownButton size="lg" style={{padding: '1px'}} variant={'secondary'} as={ButtonGroup} menuAlign={{ lg: 'right' }}  id="dropdown-menu-align-responsive-1"  title={props.value}>
                <Dropdown.Item as="button" onClick={props.clicked} > {props.value} </Dropdown.Item>
                <Dropdown.Item as="button" onClick={props.click} > {props.double} </Dropdown.Item>
                <Dropdown.Item as="button" onClick={props.clic} > {props.triple} </Dropdown.Item>
            </DropdownButton>
       
   )
}

export default Butt;