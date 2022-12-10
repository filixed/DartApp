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
        const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

        return array.map((number) => {
          return  <ButtonGroup size='sm' key={number} vertical style={{padding:'6px, 1px, 1px, 1px' }} >             
                      { getButtonsUsingMap([number])}
                  </ButtonGroup>
        })
    }

    //Getting value to state and dispatching

    return(        
        <Container>
            <Row xs={2} md={4} lg={5}>          
            {createButtonsGroup()}
            </Row>
        </Container>
    )
}

export default ScoreButtons;