import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import Contents from "../UserContent/Contents";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        console.log(response);
        dispatch({ type: "SET_CONTENT", articles: response.data.articles });

        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <Contents />
      </header>
    </div>
  );
};

export default Home;
