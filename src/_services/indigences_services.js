/**Import des modules néccessaires */
import Axios from "./caller.services";

let getAllindigences = () => {
  return Axios.get("/indigeances");
};

let getIndigences = (id) => {
  return Axios.get("/indigences/" + id);
};

let getIndigence = (indigence) => {
  return Axios.get("/indigences/" + indigence.id, indigence);
};

let addIndigences = (credentials) => {
  return Axios.post("/indigences", credentials);
};

let updateIndigence = (indigence) => {
  return Axios.put("/indigences/" + indigence.id, indigence);
};

let deleteIndigence = (id) => {
  return Axios.delete("/indigences/" + id);
};

export const indigenceService = {
  getAllindigences,
  getIndigence,
  getIndigences,
  addIndigences,
  updateIndigence,
  deleteIndigence,
};
