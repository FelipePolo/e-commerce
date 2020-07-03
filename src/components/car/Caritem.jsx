import React from 'react'
import {deleteToCardAction} from '../../redux/cardDuck'
import { useDispatch } from 'react-redux';

function Caritem(props) {
  const dispath = useDispatch()

  return (
    <div className="d-flex mt-1">
      <img
        src={props.img}
        alt={props.alt}
        style={{
          height: 160 + "px",
          width: 150 + "px",
          marginRight: 20 + "px",
        }}
      />
      <div>
        <h1 className="text-left" style={{ fontSize: 20 + "px" }}>
          {props.name}
        </h1>
        <p>{props.descrip}</p>
        <p>precio: ${props.price}</p>
        <p>cantidad: {props.cantidad}</p>
      </div>
      <div>
        <h1
          className="text-left"
          style={{ fontSize: 20 + "px", marginLeft: 20 + "px" }}
        >
          Total:${parseInt(props.price * props.cantidad)}
        </h1>
      </div>
      <div>
        <button
          className="btn btn-danger ml-5"
          onClick={() => dispath(deleteToCardAction(props))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Caritem
