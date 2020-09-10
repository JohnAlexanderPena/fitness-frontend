import React from "react";
import { Container, Card, CardDeck, Row, Col } from "react-bootstrap";
import moment from "moment";
import Loading from "../../modules/Loading";
import { useSelector } from "react-redux";

const Contents = () => {
  const content = useSelector((state) => state.userContent.content);
  return content ? (
    <Container style={{ maxWidth: "100%" }}>
      {content.map((article, index) => {
        return (
          <Col key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Img
                  style={{ width: "25%", float: "left" }}
                  variant="top"
                  src={article.urlToImage}
                />

                <Card.Text>{article.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Published: {moment(article.publishedAt).format("DD-MM-YYYY")}
                </small>
                mm
                <span>
                  <div style={{ fontSize: "14px" }}>
                    Click To Read More:
                    <img
                      style={{
                        cursor: "pointer",
                        height: "2em",
                        width: "2em",
                      }}
                      onClick={() => {
                        window.open(article.url);
                      }}
                      src="https://img.icons8.com/fluent/48/000000/external-link.png"
                      alt="open new lin"
                    />
                  </div>
                </span>
              </Card.Footer>
            </Card>
          </Col>
        );
      })}
    </Container>
  ) : (
    <Loading />
  );
};

export default Contents;
