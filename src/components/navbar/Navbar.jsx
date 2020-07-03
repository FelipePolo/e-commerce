import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "../../sass/navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../redux/userDuck";
import { deleteAllCardAction } from "../../redux/cardDuck";

function Navbar() {
  const cantidad = useSelector((store) => store.car.productos.length);
  const user = useSelector((store) => store.user);
  const dispath = useDispatch();
  
  return (
    <Row className="pt-2 fixed-top">
      <Col>
        <Link to="/" className="nav-link">
          <i className="fas fa-bars"></i> Tienda
        </Link>
      </Col>
      <Col className="nav justify-content-end">
        <Link to={user.id !== "" ? "/Car" : "/Login"} className="nav-link">
          {cantidad}
          <i className="fas fa-shopping-cart" />
          Card
        </Link>
        {user.id !== "" ? (
          <div className="d-flex">
            <p className="nav-link">{user.name}</p>
            <button
              className="btn btn-primary h-50 mt-2 p-1"
              onClick={() => {dispath(logOutAction());dispath(deleteAllCardAction())}}
            >
              LOG OUT
            </button>
          </div>
        ) : (
          <div className="d-flex">
            <Link to="/Login" className="nav-link">
              Login
            </Link>
            <Link to="/Register" className="nav-link">
              Register
            </Link>
          </div>
        )}
      </Col>
    </Row>
  );
}
export default Navbar;
