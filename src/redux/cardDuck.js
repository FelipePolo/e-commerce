//cdata inicial
import cookie from "js-cookie";

const datainicial = {
  productos: cookie.getJSON("products") || [],
  total: cookie.getJSON("total") || 0,
};

//types
const ADD_PRODUCT_CARD = "ADD_PRODUCT_CARD";
const DELE_PRODUCT_CARD = "DELE_PRODUCT_CARD";
const DELE_ALL_CARD = "DELE_ALL_CARD";
//reducer

export default function carReducer(state = datainicial, action) {
  switch (action.type) {
    case ADD_PRODUCT_CARD:
      return {
        ...state,
        productos: action.payload.array,
        total: action.payload.total,
      };
    case DELE_ALL_CARD:
      return {...state, productos: [],total:0}
    case DELE_PRODUCT_CARD:
      return {
        ...state,
        productos: action.payload.array,
        total: action.payload.total,
      };
    default:
      return state;
  }
}

//actions
export const addToCardAction = (product) => (dispath, getState) => {
  try {
    const state = getState()
    if(state.user.id !== ""){
      const car = getState().car.productos;
      let total = getState().car.total;
      let existe = false;
      car.forEach((x) => {
        if (x.id === product.id) {
          existe = true;
        }
      });
      if (!existe) {
        car.push(product);
        total += product.cantidad * product.price;
        dispath({
          type: ADD_PRODUCT_CARD,
          payload: {
            array: car,
            total: total,
          },
        });
        cookie.set("products", JSON.stringify(car));
        cookie.set("total", JSON.stringify(total));
      }
    }
  } catch (error) {
    console.log("hubo un error agregando al carrito ", error);
  }
};
export const deleteToCardAction = (product) => (dispath, getState) => {
  try {
    const car = getState().car.productos.filter((x) => {
      if(x.id !== product.id){
        return x
      }
    })
    const total = getState().car.total - (product.price * product.cantidad);
    dispath({
      type: DELE_PRODUCT_CARD,
      payload:{
        array:car,
        total:total
      }
    });
    cookie.set("products", JSON.stringify(car));
    cookie.set("total", JSON.stringify(total));
  } catch (error) {
    console.log(error)
  }
}
export const deleteAllCardAction = () => (dispath,getState) => {
  try {
    dispath({
      type: DELE_ALL_CARD
    });
    cookie.set("products", JSON.stringify([]));
    cookie.set("total", JSON.stringify(0));
  } catch (error) {
    console.log(error)
  }
}