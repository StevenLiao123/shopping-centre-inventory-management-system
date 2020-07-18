import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

export const CreateOrUpdateForm = props => {
  const [name, setName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [postCode, setPostCode] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleStreetNameChange = (event) => {
    setStreetName(event.target.value);
  }

  const handleSuburbChange = (event) => {
    setSuburb(event.target.value);
  }

  const handleStateChange = (event) => {
    setState(event.target.value);
  }

  const handlePostCodeChange = (event) => {
    setPostCode(event.target.value);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
  }

  return (
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="name" sm={4} xs={6}>
            Name
          </Label>
          <Col sm={6}>
            <Input
              type="text"
              name="name"
              defaultValue={props.id ? props.name : null}
              id={props.id ? props.id : "name"}
              onChange={ (e) => handleNameChange(e) }
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="streetName" sm={4} xs={6}>
            Street Name
          </Label>
          <Col sm={6}>
            <Input
              type="text"
              name="streetName"
              defaultValue={props.id ? props.streetName : null}
              id={props.id ? props.id : "streetName"}
              onChange={ (e) => handleStreetNameChange(e) }
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="suburb" sm={4} xs={6}>
            Suburb
          </Label>
          <Col sm={6}>
            <Input
              type="text"
              name="suburb"
              defaultValue={props.id ? props.suburb : null}
              id={props.id ? props.id : "suburb"}
              onChange={ (e) => handleSuburbChange(e) }
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="state" sm={4} xs={6}>
            State
          </Label>
          <Col sm={6}>
            <Input
              type="text"
              name="state"
              defaultValue={props.id ? props.state : null}
              id={props.id ? props.id : "state"}
              onChange={ (e) => handleStateChange(e) }
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="postCode" sm={4} xs={6}>
            Post Code
          </Label>
          <Col sm={6}>
            <Input
              type="number"
              name="postCode"
              defaultValue={props.id ? props.postCode : null}
              id={props.id ? props.id : "postCode"}
              onChange={ (e) => handlePostCodeChange(e) }
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 15, offset: 4 }}>
            <Button onClick={() => props.id ? props.callback(props.id, name, streetName, suburb, state, postCode) : props.callback(name, streetName, suburb, state, postCode)}>{props.title}</Button>
          </Col>
        </FormGroup>
      </Form>
  );
};

