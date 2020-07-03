import React from "react";
import { Row, Col } from "reactstrap";
import Caritem from "./Caritem";
import { useSelector } from "react-redux";

function Car() {
  const products = useSelector((state) => state.car.productos);
  const total = useSelector((state) => state.car.total);
  return (
    <Row>
      <Col xs="8 p-4">
        {products.length === 0 ? (
          <h1>NO HAY ITEMS EN EL CARRITO</h1>
        ) : (
          products.map((x) => {
            return (
              <Caritem
                key={x.id}
                img={x.img}
                name={x.name}
                id = {x.id}
                descrip={x.descrip}
                alt={x.alt}
                price={x.price}
                cantidad={x.cantidad}
              />
            );
          })
        )}
      </Col>
      <Col xs="4">
        <div>
          <h1>Precio completo:</h1>
          <p>${total}</p>
          <button className = "btn btn-primary" disabled = {total=== 0}>
            Pagar ${total} ahora!
          </button>
        </div>
      </Col>
    </Row>
  );
}

export default Car;
