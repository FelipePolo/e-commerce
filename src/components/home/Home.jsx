import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import Producto from "./product";
import "../../sass/home.scss";
import { GetProductListAction } from "../../redux/producDuck";
import { useDispatch, useSelector } from "react-redux";

import introimg from "../../images/background.jpg";
import combo1 from "../../images/combo1.jpg";
import combo2 from "../../images/combo2.jpg";
import combo3 from "../../images/combo3.jpg";

function Home() {
  const dispath = useDispatch();

  const productlist = useSelector((store) => store.products);
  const { productos, error, loading } = productlist;

  useEffect(() => {
    dispath(GetProductListAction());
  }, []);

  return (
    <Row className="home">
      <Col className="home_intro p-1">
        <img src={introimg} alt="Imagendeintro" />
        <Row>
          <Col>
            <h1>Nuevos productos cada dia.</h1>
            <h2>20% de descuento durante 24h !</h2>
            <button>Ir a la oferta</button>
          </Col>
        </Row>
      </Col>
      <Col className="productos w-100 p-5" xs="12">
        <Row>
          <h1>Todos nuestros productos.</h1>
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
