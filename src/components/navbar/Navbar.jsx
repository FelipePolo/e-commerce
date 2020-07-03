import React,{useState} from "react";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link,useHistory } from "react-router-dom";
import "../../sass/navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../redux/userDuck";
import { deleteAllCardAction } from "../../redux/cardDuck";

//assets
import logo from '../../images/logo.png'

function Navbar() {
  const history = useHistory()
  const cantidad = useSelector((store) => store.car.productos.length);
  const user = useSelector((store) => store.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispath = useDispatch();
  
  return (
    <Row className="pt-2 fixed-top mynavbar">
      <Col className="logo_container">
        <Link to="/" className="nav-link logo">
          <img src={logo} alt="Logo" />
        </Link>
      </Col>
      <Col className="form_container">
        <Form inline>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="|Buscar"
            />
            <Button className="btn btn-primary ml-2">
              <i class="fas fa-search"></i>
            </Button>
          </FormGroup>
        </Form>
      </Col>

      <Col className="nav justify-content-end">
        <Link
          to={user.id !== "" ? "/Car" : "/Login"}
          className="nav-link badge-pill"
        >
          <span>{cantidad}</span>
          <i className="fas fa-shopping-cart" />
        </Link>
        {user.id !== "" ? (
          // <div className="d-flex usercontainer align-items-center ">
          //   <p className="nav-link badge-pill ">{user.name}</p>
          //   <button
          //     className="badge-pill logoutbtn"
          //     onClick={() => {
          //       dispath(logOutAction());
          //       dispath(deleteAllCardAction());
          //     }}
          //   >
          //     LOG OUT
          //   </button>
          // </div>
          <Dropdown
            isOpen={dropdownOpen}
            toggle={() => setDropdownOpen(!dropdownOpen)}
          >
            <DropdownToggle caret className="badge-pill">
              <p>{user.name}</p>
              <i class="fas fa-tools"></i>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Tienes un problema?</DropdownItem>
              <DropdownItem onClick = {
                () => history.replace("/Contactanos")
              }>Contactanos</DropdownItem>
              <DropdownItem divider />
              <DropdownItem header>Configuracion</DropdownItem>
              <DropdownItem onClick = {
                () => history.replace("/Configuracion")
              }>Actualizar Perfil</DropdownItem>
              <DropdownItem onClick = {
                () => {
                dispath(logOutAction());
                dispath(deleteAllCardAction());
              }
              }>
                Deslogearme <i class="fas fa-sign-in-alt"></i>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <Link to="/Login" className="nav-link badge-pill">
              Login
            </Link>
            <Link to="/Register" className="nav-link badge-pill">
              Register
            </Link>
          </>
        )}
      </Col>
    </Row>
  );
}
export default Navbar;
