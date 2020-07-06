import axios from "axios";
import cookie from "js-cookie";
//data inicial
const datainicial = {
  id: cookie.getJSON("id") || "",
  email: cookie.getJSON("email") || "",
  name: cookie.getJSON("name") || "",
  isAdmin: cookie.getJSON("isAdmin") || false,
  fail: false,
};

//consts

const GET_USER_DATA = "GET_USER_DATA";
const GET_USER_DATA_FAIL = "GET_USER_DATA_FAIL";
const LOG_OUT_USER = "LOG_OUT_USER";
const REGISTER_NEW_USER_ERROR = "REGISTER_NEW_USER_ERROR";
//REDUCER

export default function userReducer(state = datainicial, action) {
  switch (action.type) {
    case REGISTER_NEW_USER_ERROR:
      return { ...state, error: action.payload.error };
    case LOG_OUT_USER:
      return {
        ...state,
        id: "",
        email: "",
        name: "",
        isAdmin: false,
      };
    case GET_USER_DATA:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        isAdmin: action.payload.isAdmin,
      };
    case GET_USER_DATA_FAIL:
      return { ...state, fail: action.payload.fail };
    default:
      return { ...state };
  }
}

//actions

export const getuserfromdb = (usuario) => async (dispath) => {
  try {
    const { data } = await axios.post("/api/users/login", {
      email: usuario.email,
      password: usuario.password,
    });
    const user = data;
    if (user) {
      dispath({
        type: GET_USER_DATA,
        payload: {
          id: user._id,
          email: user.email,
          name: user.name,
          isAdmin: user.isAdmin,
        },
      });
      cookie.set("id", user._id);
      cookie.set("email", user.email);
      cookie.set("name", user.name);
      cookie.set("isAdmin", user.isAdmin);
    }
  } catch (error) {
    console.log("error en userdata", error);
    dispath({
      type: GET_USER_DATA_FAIL,
      payload: {
        fail: true,
      },
    });
  }
};

export const logOutAction = () => (dispath) => {
  try {
    dispath({
      type: LOG_OUT_USER,
    });
    cookie.set("id", "");
    cookie.set("email", "");
    cookie.set("name", "");
    cookie.set("isAdmin", false);
  } catch (error) {}
};

export const RegisterNewUserAction = (name, email, password) => async (
  dispatch
) => {
  try {
    const { data } = await axios.post("/api/users/createuser", {
      name: name,
      email: email,
      password: password,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: REGISTER_NEW_USER_ERROR,
      payload: {
        error: error,
      },
    });
  }
};

export const UpdateFailOnUser = () => (dispath) => {
  dispath({
    type: GET_USER_DATA_FAIL,
    payload:{
      fail : false
    }
  });
}