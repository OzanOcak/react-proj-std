import axios from "axios";

// process.env.REACT_APP_API; process is not defined cz process is only in node env.
const URI = "http://localhost:5001/data";

export const getNames = async () => {
  return await axios.get(`${URI}`);
};

export const createName = async (name) => {
  return await axios.post(`${URI}`, name);
};

export const getName = async (id) => {
  return await axios.get(`${URI}/${id}`);
};

export const removeName = async (id) => {
  return await axios.delete(`${URI}/${id}`);
};

export const updateName = async (id, name) => {
  return await axios.put(`${URI}/${id}`, name);
};
