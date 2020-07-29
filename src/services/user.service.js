import axios from "axios";
import authHeader from "./auth-header";
import moment from "moment";

const API_URL = "http://localhost:5000/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

// const getUserBoard = async (id) => {
//   return axios.get(API_URL + `/user/find/post/${id}`, {
//     headers: authHeader(),
//   });
// };

const getUserBoard = async (id) => {
  console.log(process.env);

  return axios.get(
    `http://newsapi.org/v2/everything?q=health&from=${moment()
      .subtract(15, "days")
      .format("YYYY-MM-DD")}&sortBy=publishedAt&apiKey=${
      process.env.REACT_APP_NEWS_API
    }`
  );
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
