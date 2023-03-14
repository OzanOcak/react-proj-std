import axios from "axios";

export const getNames = async () => {
  return await axios.get(" http://localhost:5000/data");
};
