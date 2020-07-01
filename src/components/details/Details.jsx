import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import Carousel from "./Carousel";
import { GetProductAction } from "../../redux/producDuck";
import { useDispatch, useSelector } from "react-redux";
import {useForm} from 'react-hook-form'

function Details() {
  const { id } = useParams();
  const dispath = useDispatch();
  const { producto, loading, error } = useSelector((store) => store.products);
  useEffect(() => {
    dispath(GetProductAction(id));
  }, []);
  
  const {handleSubmit,register} = useForm()
  const [cantidad, setcantidad] = useState(1)
  
  console.log(cantidad)
  const onSubmit = (data,e) => {
    console.log(data)
  }


  return (
    <Row>
      <Col xs="12">
        <Row>
          {loading ? (
            <h1>Cargando...</h1>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <>
              <Col xs={"6"} className="pl-5">
                <Carousel images={producto.img} />
              </Col>
              <Col xs={"6"} className="pl-5">
                <div>
                  <h1>{producto.name}</h1>
                  <h2>Starts ({producto.starts})</h2>
                  <p>{producto.descrip}</p>
                  <span><del>{producto.oldprice}</del></span>
                  <span>{producto.price}</span>
                </div>
                <Form inline onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup>
                    <Input
                      type="select"
                      name="cantidad"
                      placeholder="1"
                      defaultValue="1"
                      style={{ width: 60 + "px" }}
                      onChange = {(e) => setcantidad(e.target.value)}
                    >
                      {
                        [...Array(producto.stock).keys()].map((x) =>
                        <option>{x+1}</option>)
                      }
                    </Input>
                    <Button className="ml-2" style={{ width: 300 + "px" }}>
                      Comprar ahora!
                    </Button>
                    <Button className="ml-2">
                      <i className="fas fa-shopping-cart" />
                    </Button>
                  </FormGroup>
                </Form>
              </Col>
            </>
          )}
        </Row>
      </Col>
      <Col xs="12"></Col>
    </Row>
  );
}

export default Details;
