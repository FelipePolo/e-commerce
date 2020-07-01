import React from 'react'
import {Col,Card,CardBody,CardImg,CardHeader,CardSubtitle,CardTitle,CardFooter} from 'reactstrap'
import {Link} from 'react-router-dom'

function Product(props) {
  return (
    <Col className="producto p-2" lg="3">
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
          <button className="badge-pill badge-primary">
            <i className="fas fa-shopping-cart" />
          </button>
        </CardFooter>
      </Card>
    </Col>
  );
}

export default Product
