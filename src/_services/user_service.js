import Axios from "./caller.services";

let login = (credentials) => {
  return Axios.post("/login", credentials);
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let getToken = () => {
  return localStorage.getItem("token");
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

let logout = () => {
  localStorage.removeItem("token");
};

export const LoginService = {
  login,
  getToken,
  saveToken,
  isLogged,
  logout,
};
