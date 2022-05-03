import React from "react";
import FormInput from "../components/FormInput";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useRef } from "react/cjs/react.development";

function form() {
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const input = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and should't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z][A-Za-z0-9_]{2,29}$",
      required: true,
    },
    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid e-mail adress",
      label: "Email",
      pattern: "^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$",
      required: true,
    },
    {
      id: 3,
      name: "Password",
      type: "text",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least one letter, number and character.",
      label: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{7,20}$",
      required: true,
    },
    {
      id: 4,
      name: "Confirm password",
      type: "text",
      placeholder: "Password",
      errorMessage: "Password don't match!",
      label: "Confirm password",
      pattern: value.password,
      required: true,
    },
  ];
  // const usernameRef = useRef();
  // console.log(usernameRef);
  console.log("re-rendered");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  console.log(value);
  return (
    <div>
      <Container>
        <h1>form</h1>
        <form className="firstForm" onSubmit={handleSubmit}>
          {input.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={value[input.name]}
              onChange={onChange}
            />
          ))}
          {/* test form */}
          {/* <FormInput
            name="username"
            refer={usernameRef}
            placeholder="Username"
          />
          <FormInput name="email" placeholder="E-mail" />
          <FormInput name="password" placeholder="Password" /> */}
          <button>Submit</button>
        </form>
      </Container>
    </div>
  );
}

export default form;
