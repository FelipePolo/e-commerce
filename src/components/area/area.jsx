import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Producto from "./product";

//temporal
import data from "../../data";

function Area() {
  return (
    <Row className="area">
      <Col xs={"3"} className="w-100">
        <div className="pt-2">
          <ul className=" d-flex flex-column">
            <Link>TIPO 1 </Link>
            <Link>TIPO 4 </Link>
            <Link>TIPO 5 </Link>
            <Link>TIPO 6 </Link>
          </ul>
        </div>
      </Col>
      <Col className="w-100">
        <Row>
          <Col className="d-flex">
            <Dropdown />
            <Dropdown />
            <Dropdown />
          </Col>
          <Col>
            <Form inline>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Busca lo que te interese"
                />
                <Button className="btn btn-primary ml-2">Buscar</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          {data.productos.map((product) => {
            return <Producto 
            key={product.id} 
            id={product.id} 
            name={product.name}
            descrip = {product.descrip}
            img = {product.img}
            alt = {product.alt}
            oldprice = {product.oldprice}
            price = {product.price}  
            />;
          })}
        </Row>
      </Col>
    </Row>
  );
}

export default Area;
