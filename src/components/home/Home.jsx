import React, { useEffect } from "react";
import { Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Producto from "./product";

import { GetProductListAction } from "../../redux/producDuck";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispath = useDispatch();

  const productlist = useSelector((store) => store.products);
  const { productos, error, loading } = productlist;

  useEffect(() => {
    dispath(GetProductListAction());
  }, []);

  return (
    <Row className="area">
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
          {error ? (
            <h1>ERROR CARGANDO LOS PRODUCTOS</h1>
          ) : loading ? (
            <h1>Cargando</h1>
          ) : (
            productos.map((product) => {
              return (
                <Producto
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  descrip={product.descrip}
                  img={product.img[0]}
                  alt={product.alt}
                  oldprice={product.oldprice}
                  price={product.price}
                />
              );
            })
          )}
        </Row>
      </Col>
    </Row>
  );
}

export default Home;
