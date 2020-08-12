import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { navigate } from "hookrouter";

import UserService from "../../services/user.service";
import { useSelector, useDispatch } from "react-redux";
import Contents from "../UserContent/Contents";

const BoardUser = () => {
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const id = useSelector((state) => state.users.user.id);

  useEffect(() => {
    id &&
      UserService.getUserBoard(id).then(
        (response) => {
          setContent(response.data);
          dispatch({ type: "SET_CONTENT", articles: response.data.articles });
        },
        (error) => {
          const _content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setContent(_content);
        }
      );
  }, [id, dispatch]);

  return (
    <Container>
      <header className="jumbotron">USER CONTENT HERE</header>
    </Container>
  );
};

export default BoardUser;
