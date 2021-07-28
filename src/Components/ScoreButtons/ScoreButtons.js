import React from 'react';
import Butt from '../Buttons/Button'
import {Container, ButtonGroup, Row} from 'react-bootstrap'

const ScoreButtons = (props) =>{
    const getButtonsUsingMap = (arr) => {
        const array = arr
        return array.map((number) => {
          return  <Butt clicked={() => props.getScore(number) } click={() => props.getScore(number*2)}
          clic={() => props.getScore(number*3)}
           key={number} value ={ number } double = {number*2} triple = {number*3} />
        })
    
      }

    const createButtonsGroup = () => {
        const array = [1,2,3,4,5]

        return array.map((number) => {
          return  <ButtonGroup key={number} vertical style={{padding:'1px' }} >             
                      { getButtonsUsingMap([number,number+5,number+10,number+15])}
                  </ButtonGroup>
        })
    }

    //Getting value to state and dispatching

    return(        
        <Container>
            <Row xs={5}>            
            {createButtonsGroup()}
            </Row>
        </Container>
    )
}

export default ScoreButtons;