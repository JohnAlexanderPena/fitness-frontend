import axios from "axios";
import authHeader from "./auth-header";
import moment from "moment";

const API_URL = "http://localhost:5000/api/test/";

const getUserBoard = () => {
  console.log("Getting Content");
  return axios.get(API_URL + "congress");
};

// const getUserBoard = async (id) => {
//   return axios.get(API_URL + `/user/find/post/${id}`, {
//     headers: authHeader(),
//   });
// };

const getPublicContent = async (id) => {
  console.log(process.env);

  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API}`
  );

  // return axios.get(
  //   `http://newsapi.org/v2/everything?q=congress&from=${moment()
  //     .subtract(15, "days")
  //     .format("YYYY-MM-DD")}&sortBy=publishedAt&apiKey=${
  //     process.env.REACT_APP_NEWS_API
  //   }`
  // );
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
