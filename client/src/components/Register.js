import React, { useState } from "react";

import TextInput from "./TextInput";
import Container from "./Container";
import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Button from "./Button";

import { generateListInput } from "../utils/init";
import { RegisterProps } from "../utils/type";

import "../assets/style/sass/components/register.sass";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const ListInput = [
    generateListInput("email"),
    generateListInput("pwrd"),
    generateListInput("confirm-pwrd"),
  ];

  return (
    <Container className={`register-container`}>
      <Wrapper className={`register-heading-wrapper`}>
        <Heading className={`register-heading`}>Sign Up</Heading>
      </Wrapper>
      <Wrapper className={`register-form-wrapper`}>
        <TextInput ListInput={ListInput} />
        <Button className={`register-btn`}>Continue</Button>
      </Wrapper>
    </Container>
  );
}

Register.propTypes = RegisterProps;

export default React.memo(Register);
