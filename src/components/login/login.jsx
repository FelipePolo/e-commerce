import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, FormGroup, Form } from "reactstrap";
import { getuserfromdb, UpdateFailOnUser } from "../../redux/userDuck";
import { useDispatch, useSelector } from "react-redux";
import carrito from "../../images/carrito-compra.png";

import "../../sass/login.scss";

function Login() {
  const { handleSubmit, register, errors } = useForm();
  const [loginerror, setloginerror] = useState(null);
  const user = useSelector((store) => store.user);
  const dispath = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (user.fail) {
      setloginerror("este email no esta registrado!");
    }else{
      setloginerror(null);
    }

    return( () => {
      dispath(UpdateFailOnUser());
    })
  }, [user]);

  const onSubmit = (user) => {
    dispath(getuserfromdb(user));
  };

  return (
    <Row className="form_conten">
      <Col className="justify-content-center">
        <FormGroup>
          <div className="header">
            <img src={carrito} alt="" />
            <h1>Logeate ahora y empieza a comprar</h1>
            {loginerror ? (
              <div className="error_login">
                {" "}
                no estas registrado,{" "}
                <Link to="/Register">
                  registrate aqui
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
              Login
            </button>
          </Form>
        </FormGroup>
      </Col>
    </Row>
  );
}

export default Login;
