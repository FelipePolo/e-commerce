import axios from "axios";
//data inicial
const datainicial = {
  productos: [],
  producto: {},
  loading: false,
};

//types
const GET_PRODUCTS_LIST = "GET_PRODUCTS_LIST";
const GET_PRODUCTS_LIST_SUCCESS = "GET_PRODUCTS_LIST_SUCCESS";
const GET_PRODUCT_LIST_ERROR = "GET_PRODUCT_LIST_ERROR";
const GET_PRODUCT = "GET_PRODUCT";

//reducer

export default function productReducer(state = datainicial, action) {
  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return { ...state, loading: true };
    case GET_PRODUCTS_LIST_SUCCESS:
      return { ...state, productos: action.payload.array, loading: false };
    case GET_PRODUCT_LIST_ERROR:
      return { ...state, error: "este producto no existe", loading: false };
    case GET_PRODUCT:
      return { ...state, producto: action.payload.producto, loading: false };

    default: {
      return { ...state };
    }
  }
}

//ACTIONS

export const GetProductListAction = () => async (dispath, getState) => {
  try {
    dispath({ type: GET_PRODUCTS_LIST });
    const { data } = await axios.get("/api/products");
    dispath({
      type: GET_PRODUCTS_LIST_SUCCESS,
      payload: {
        array: data,
      },
    });
  } catch (error) {
    console.log(error);
    dispath({
      type: GET_PRODUCT_LIST_ERROR,
      payload:{
        error: error
      }
    });
  }
};


export const GetProductAction = (id) => async (dispath,getState) => {
  try {
    dispath({
      type:GET_PRODUCTS_LIST,
    })
    const  {data} = await axios.get(`/api/products/${id}`);
    console.log("la data es " ,data)
    if(data){
      dispath({
        type: GET_PRODUCT,
        payload:{
          producto: data
        }
      });
    }
  } catch (error) {
    console.log("error obteniendo el product",error)
    dispath({
      type: GET_PRODUCT_LIST_ERROR,
    });
  }
}