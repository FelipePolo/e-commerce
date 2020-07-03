import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import {useHistory,Link} from 'react-router-dom'
import {Row,Col,FormGroup,Form,Input} from 'reactstrap'
import {getuserfromdb} from '../../redux/userDuck'
import {useDispatch,useSelector} from 'react-redux'

function Login() {
  const {handleSubmit,register,errors} = useForm()
  const [loginerror,setloginerror] = useState("")
  const user = useSelector(store => store.user)
  const dispath = useDispatch()
  const history = useHistory()
  useEffect(() => {
    if(user.fail){
      setloginerror("este email no esta registrado!")
    }else if(user.id !== "" && !user.fail){
      if (user.isAdmin) {
        history.replace("/admin");
      } else {
        history.replace("/");
      }
    }
  },[user])

  const onSubmit = (user,e) => {
    dispath(getuserfromdb(user))
  }

  return (
    <Row>
      <Col className="justify-content-center">
        <FormGroup>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column w-25"
          >
            <p className="bg-danger">
              {loginerror !== "" ?  <div> no estas registrado!! <Link to="/Register">registrate aqui</Link></div> : ""}
            </p>
            <input
              type="email"
              name="email"
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
              Login
            </button>
          </Form>
        </FormGroup>
      </Col>
    </Row>
  );
}

export default Login
