import React from 'react'
import {Col,Card,CardBody,CardImg,CardHeader,CardSubtitle,CardTitle,CardFooter} from 'reactstrap'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addToCardAction} from '../../redux/cardDuck'

function Product(props) {
  const dispath = useDispatch()
  const user = useSelector(store => store.user)

  const addtocard = () => {
    const productocard = {
      ...props,
      cantidad: 1,
    };
    dispath(addToCardAction(productocard));
  };

  return (
    <Col className="producto p-2" lg="2">
      <Card>
        <CardHeader>
          <Link to={`/${props.id}`}>
            <CardImg
              src={props.img}
              alt={props.alt}
              style={{ height: 200 + "px" }}
            />
          </Link>
        </CardHeader>
        <CardBody>
          <CardTitle>
            <Link to={`/${props.id}`}>{props.name}</Link>
          </CardTitle>
          <CardSubtitle>{props.descrip}</CardSubtitle>
        </CardBody>
        <CardFooter className="d-flex justify-content-between">
          <span>
            <del>${props.oldprice} </del>
          </span>
          <span>${props.price}</span>
          {user.id !== "" ? (
            <button className="badge-pill badge-primary" onClick={addtocard}>
              <i className="fas fa-shopping-cart" />
            </button>
          ) : (
            <Link to="/Login" className="badge-pill badge-primary">
              <i className="fas fa-shopping-cart" />
            </Link>
          )}
        </CardFooter>
      </Card>
    </Col>
  );
}

export default Product
