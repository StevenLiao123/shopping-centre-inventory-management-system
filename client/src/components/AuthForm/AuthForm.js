import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

export const AuthForm = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
  }

  return (
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="username" sm={4} xs={6}>
            Username
          </Label>
          <Col sm={6}>
            <Input
              type="username"
              name="username"
              id="username"
              placeholder="your username"
              onChange={ (e) => handleUsernameChange(e) }
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={4} xs={6}>
            Password
          </Label>
          <Col sm={6}>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="your password"
              onChange={ (e) => handlePasswordChange(e) }
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 15, offset: 4 }}>
            <Button onClick={() => props.callback(username, password)}>{props.title}</Button>
          </Col>
        </FormGroup>
      </Form>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string,
  callback: PropTypes.func
};
