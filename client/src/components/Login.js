import React, { useState } from "react";

import Paragraph from "./Paragraph";
import Heading from "./Heading";
import Wrapper from "./Wrapper";
import Container from "./Container";
import Button from "./Button";
import TextInput from "./TextInput";

import { LoginProps } from "../utils/type";
import { generateListInput } from "../utils/init";

import "../assets/style/sass/components/login.sass";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ListInput = [generateListInput(), generateListInput()];

  const handleSetUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container className={props.className}>
      {error && (
        <Wrapper className={`login-error-wrapper`}>
          <Paragraph className={`login-error-message`} h2>
            {error}
          </Paragraph>
        </Wrapper>
      )}
      <Wrapper className={`login-heading-wrapper`}>
        <Heading className={`login-heading`}>Sign In</Heading>
      </Wrapper>
      <Wrapper className={`login-form-wrapper`}>
        <TextInput ListInput={ListInput} />
        <Button className={`login-btn`}>Continue</Button>
      </Wrapper>
    </Container>
  );
}

Login.propTypes = LoginProps;

export default React.memo(Login);
