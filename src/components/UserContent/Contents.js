import React from "react";
import { Container, Card, CardDeck, Row, Col } from "react-bootstrap";
import moment from "moment";
import Loading from "../../modules/Loading";
import { useSelector } from "react-redux";

const Contents = () => {
  const content = useSelector((state) => state.userContent.content);
  return content ? (
    <Container style={{ maxWidth: "100%" }}>
      <Row>
        {content.map((article, index) => {
          return (
            <Col key={index} md={4}>
              <CardDeck style={{ height: "100%" }}>
                <Card>
                  <Card.Img variant="top" src={article.urlToImage} />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Published:{" "}
                      {moment(article.publishedAt).format("DD-MM-YYYY")}
                    </small>
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
              </CardDeck>
            </Col>
          );
        })}
      </Row>
    </Container>
  ) : (
    <Loading />
  );
};

export default Contents;
