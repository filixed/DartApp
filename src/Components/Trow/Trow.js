import React from 'react';

const Trow = (props) => {
    return(
        <tr>
            <td>{props.nr}</td>      
            <td><h2>{props.first}</h2></td>
            <td><h2>{props.second}</h2></td>
            <td><h2>{props.third}</h2></td>
        </tr>
    )
}

export default Trow

// <Row xs={5}>            
//<ScoreButtons getScore={getScore} />
//</Row>