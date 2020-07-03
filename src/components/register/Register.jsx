import React from 'react'
import { useForm } from "react-hook-form";
import { Row, Col, FormGroup, Form, Input } from "reactstrap";

function Register() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = () => {
    console.log("hola mundo!!")
  }
  return (
    <Row>
      <Col className="justify-content-center">
        <FormGroup>
          <Form onSubmit={handleSubmit(onSubmit)} className = "d-flex flex-column">
            <input 
            type="text" 
            name="name" 
            placeholder="ingresa tu nombre"
            />
            <input
              type="email"
              name="email"
              placeholder="ingresa tu email"
              ref={register({
                required: {
                  value: true,
                  message: "email requerido",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email",
                },
              })}
            />
            {errors?.email?.message}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="tu contraseña"
              ref={register({
                required: {
                  value: true,
                  message: "contraseña requerida!",
                },
              })}
            />
            {errors?.password?.message}
            <button className="btn btn-primary" type="submit">
              Registrarme
            </button>
          </Form>
        </FormGroup>
      </Col>
    </Row>
  );
}

export default Register
