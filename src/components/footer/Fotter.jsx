import React from "react";
import { Row, Col } from "reactstrap";
import {Link} from 'react-router-dom'
import logo from "../../images/logo.png";

import "../../sass/footer.scss"
function Fotter() {
  return (
    <Row className = "footer">
      <Col xs="12" className = "logo_container">
        <img src={logo} alt="Logo" />
        <h1>Lo mejor siempre para ti</h1>
      </Col>
      <Col className = "list_container">
        <h1>Conoce mas</h1>
        <ul>
          <li><Link to ="/Acerca-De-Nosotros">Acerca de nosotros</Link></li>
          <li><Link to = "/Contactanos">Contactanos</Link></li>
          <li><Link to ="Terminos-Y-Condiciones">Terminos y condiciones</Link></li>
        </ul>
      </Col>
      <Col className = "social_container">
        <h1>Buscanos en </h1>
        <ul>
          <li>
            <a href="">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </Col>
      <Col lg ="12" className = "p-5 align-items-center">
        <span>Esto es una plantilla creada por FELIPE POLO aunque se tiene pasarela de pagos no efectue ninguno! , no se entregaran productos por compras realizadas.</span>
      </Col>
    </Row>
  );
}

export default Fotter;
