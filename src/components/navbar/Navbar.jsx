import React, { useState } from "react";
import {Col,Row} from "reactstrap";
import { Link } from "react-router-dom";
import "../../sass/navbar.scss";
function Navbar() {
  return (
    <Row className = "pt-2 fixed-top">
      <Col>
        <Link to="/" className="nav-link">
          <i className="fas fa-bars"></i> Tienda
        </Link>
      </Col>
      <Col className = "nav justify-content-end">
        <Link to="/Crad" className="nav-link">
          0
          <i class="fas fa-shopping-cart" />
          Card
        </Link>
        <Link to="/SingIn" className="nav-link">
          Sing In
        </Link>
      </Col>
    </Row>
  );
}
export default Navbar;
