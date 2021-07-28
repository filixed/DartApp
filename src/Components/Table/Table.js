import React from 'react'

import {Table} from 'react-bootstrap'

const Tab = (props) =>{
  return(
    <Table responsive striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>        
        </tr>
      </thead>
      <tbody>
          {props.children}
      </tbody>
    </Table>
  )
}

export default Tab
