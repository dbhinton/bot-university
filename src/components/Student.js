import React, { useState } from "react";
import {
  Card,
  Col,
  Image,
  Row,
  Button,
  ListGroup,
  Badge,
} from "react-bootstrap";

export default function Student({
  img,
  firstName,
  lastName,
  email,
  company,
  skill,
  average,
  grades,
  student,
  studentTagCreator,
}) {
  const [showTestScores, setshowTestScores] = useState(false);
  const [newTagName, setNewTagName] = useState("");

  function handleClick() {
    setshowTestScores(!showTestScores);
  }

  function handleChange(e) {
    setNewTagName(e.target.value);
  }

  function handleKeyUp(e) {
    if (e.key === "Enter") {
      studentTagCreator(student, newTagName);
      e.target.value = "";
    }
  }

  return (
    <>
      <Card className="my-3 p-4">
        <Row>
          <Col md={2}>
            <Image
              src={img}
              className="img"
              alt="avatar"
              width="200"
              height="200"
            />
          </Col>

          <Col md={9}>
            <h1> {`${firstName} ${lastName}`}</h1>
            <ListGroup variant="flush">
              <ListGroup.Item className="info"> Email: {email} </ListGroup.Item>
              <ListGroup.Item className="info">
                {" "}
                Company: {company}{" "}
              </ListGroup.Item>
              <ListGroup.Item className="info"> Skill: {skill} </ListGroup.Item>
              <ListGroup.Item className="info">
                {" "}
                Average Test Score: {average.toFixed(2)}%
              </ListGroup.Item>
            </ListGroup>

            <div>
              {showTestScores &&
                grades.map((grade, index) => {
                  return (
                    <div key={index}>
                      <div>
                        {" "}
                        Test {index} : {grade}%
                      </div>
                    </div>
                  );
                })}
            </div>
            <Row>
              {" "}
              {student.tags.map((tag) => {
                return (
                  <Badge
                    bg="dark"
                    className="m-2 p-2"
                    style={{ width: "fit-content", textAlign: "center" }}
                    key={student.id + " " + tag}
                  >
                    {tag}
                  </Badge>
                );
              })}
            </Row>

            <input
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              type="text"
              placeholder="Add a tag"
            />
          </Col>
          <Col md={1}>
            <Button variant="light" className="button" onClick={handleClick}>
              {showTestScores ? "-" : "+"}
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}
