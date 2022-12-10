import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../../store/countReducer";
import ScoreButtons from "../../Components/ScoreButtons/ScoreButtons";
import { Row, Container, Col, Button } from "react-bootstrap";
import Tab from "../../Components/Table/Table";
import Trow from "../../Components/Trow/Trow";

const CountPoints = () => {
  const [tableData, setTableData] = useState([]);
  const [tableId, setTableId] = useState(1);
  const [firstShot, setFirstShot] = useState(0);
  const [secondShot, setSecondShot] = useState(0);
  const [thirdShot, setThirShot] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  //Getting value to state and dispatching
  const getScore = (val) => {
    if (!firstShot) setFirstShot(val);
    else if (!secondShot) setSecondShot(val);
    else setThirShot(val);
  };

  //Creating table rows
  const createRow = (event) => {
    event.preventDefault();

    setTableData([
      {
        nr: tableId,
        first: firstShot,
        second: secondShot,
        third: thirdShot,
      },
      ...tableData,
    ]);
    setTableId(tableId + 1);
    let sum = firstShot + secondShot + thirdShot;
    if (count < sum) {
    } else {
      dispatch(incrementByAmount(sum));
    }

    setFirstShot(0);
    setSecondShot(0);
    setThirShot(0);
  };

  return (
    <Container>
      <ScoreButtons getScore={getScore} />
      <Row xs={4}>
        <Col></Col>
        <Button onClick={() => getScore(25)} variant={"success"}>
          25
        </Button>
        <Button onClick={() => getScore(50)} variant={"danger"}>
          50
        </Button>
      </Row>
      <Row xs={5}>
        <Button onClick={(e) => createRow(e)}>Dodaj</Button>
        <h1 style={{ textAlign: "center" }}>{count}</h1>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs lg="2" align="center">
          <h1 onClick={() => setFirstShot(0)}>{firstShot}</h1>
        </Col>
        <Col xs lg="2" align="center">
          <h1 onClick={() => setSecondShot(0)}>{secondShot}</h1>
        </Col>
        <Col xs lg="2" align="center">
          <h1 onClick={() => setThirShot(0)}>{thirdShot}</h1>
        </Col>
      </Row>
      <Row>
        <Tab>
          {tableData.map((item, ids) => (
            <Trow
              key={ids}
              nr={item.nr}
              first={item.first}
              second={item.second}
              third={item.third}
            />
          ))}
        </Tab>
      </Row>
    </Container>
  );
};

export default CountPoints;
