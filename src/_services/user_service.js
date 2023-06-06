import Axios from "./caller.services";
import { reactive } from "vue";

let login = (credentials) => {
  return Axios.post("/auth/login", credentials);
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let getToken = () => {
  return localStorage.getItem("token");
};

// let isLogged = () => {
//   let token = localStorage.getItem("token");
//   return !!token;
// };

const state = reactive({
  isLoggedIn: false,
});

export function isLogged() {
  return state.isLoggedIn;
}

export function setLoggedIn(value) {
  state.isLoggedIn = value;
}

let logout = () => {
  localStorage.removeItem("token");
};
export const LoginService = {
  login,
  getToken,
  saveToken,
  isLogged,
  logout,
  setLoggedIn,
};
