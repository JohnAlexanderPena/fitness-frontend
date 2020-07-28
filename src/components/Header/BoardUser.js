import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import UserService from "../../services/user.service";
import { useSelector } from "react-redux";

const BoardUser = () => {
  const [content, setContent] = useState("");

  const id = useSelector((state) => state.users.user.id);

  useEffect(() => {
    id &&
      UserService.getUserBoard(id).then(
        (response) => {
          console.log(response);
          setContent(response.data);
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
  }, [id]);

  return (
    <Container>
      <header className="jumbotron">{/* <h3>{content}</h3> */}</header>
    </Container>
  );
};

export default BoardUser;
