import React from "react";
import { useForm } from "react-hook-form";
import { Row, Col, FormGroup, Form, Input } from "reactstrap";
import "../../sass/login.scss";
import carrito from "../../images/carrito-compra.png";
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {RegisterNewUserAction} from '../../redux/userDuck'

function Register() {
  const { handleSubmit, register, errors } = useForm();
  const dispath = useDispatch()
  const history = useHistory()
  const onSubmit = (data) => {
    dispath(RegisterNewUserAction(data.name,data.email,data.password));
    history.replace("/Login")
  };
  return (
    <Row className="form_conten">
      <Col className="justify-content-center">
        <FormGroup>
          <div className="header">
            <img src={carrito} alt="" />
            <h1>Registrate ahora y se parte de nosotros!</h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              ref={register({
                required: {
                  value: true,
                  message: "Nombre requerido",
                },
              })}
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
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
              placeholder="Tu contraseña"
              ref={register({
                required: {
                  value: true,
                  message: "contraseña requerida!",
                },
              })}
            />
            {errors?.password?.message}
            <button className="btn btn-primary" type="submit">
              Registrate
            </button>
          </Form>
        </FormGroup>
      </Col>
    </Row>
  );
}

export default Register;
