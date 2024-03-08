import { Button, Col, Image, Row, Typography } from "antd";
import React from "react";
import "./HomepageStyle.css";
import { useDimensions } from "../../commonLogic/commonLogic";
import eventify from "../../asset/eventifylogo.png";
import CollageBackImage from "../../asset/CollageBackImage.jpg";
import Cardimage from "../../asset/Cardimage.jpeg";
import history from "../../Utils/history";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Homepage = () => {
  const { width } = useDimensions();

  return (
    <Row style={{ width: "100%" }}>
      <Col
        span={24}
        style={{
          backgroundImage: `url(${CollageBackImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Row justify="center">
          <Col className="header">
            <Row justify="space-between" align="middle">
              <Col md={4} lg={4}>
                <span>
                  <Image
                    src={eventify}
                    style={{ height: "50px", width: "50px" }}
                  />
                </span>
              </Col>
              <Col className="headerTextBox" md={12} lg={10}>
                <Row justify="space-between">
                  <Col>
                    <Typography className="headerText">About us</Typography>
                  </Col>
                  <Col>
                    <Typography className="headerText">Features</Typography>
                  </Col>
                  <Col>
                    <Typography className="headerText">Contact Us</Typography>
                  </Col>
                </Row>
              </Col>
              <Col className="headerTextBox" md={6} lg={4}>
                <Row justify="space-between">
                  <Col>
                    <Typography
                      className="headerText"
                      // onClick={() => history.push("/login")}
                    >
                      <Link to="/login">Login</Link>
                    </Typography>
                  </Col>
                  <Col>
                    <Typography
                      className="headerText"
                      // onClick={() => history.push("/signup")}
                    >
                      <Link to="/signup"> Sign Up</Link>
                    </Typography>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row
          style={{ border: "1px solid green", height: "100vh" }}
          justify="center"
          align="middle"
        >
          <Col style={{ width: "940px", marginTop: "40px" }}>
            <Row justify="space-between">
              <Col className="MainCard">
                <Typography className="headerDescriptionText">
                  Welcome to Indus's Events, your hub for university activities!
                  Explore diverse event clubs catering to your interests and
                  passions. Join us for career-shaping placement drives,
                  connecting you directly with top companies. Embrace a vibrant
                  university experience, where networking and personal growth
                  thrive. Welcome to a community where every event is an
                  opportunity to learn, connect, and grow.
                </Typography>
                <Row justify="center" style={{ marginTop: "80px" }}>
                  <Col>
                    <Button className="exploreAllEvents">
                      Explore All Events
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col className="MainCard">
                <Image src={Cardimage} style={{ borderRadius: "10px" }} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Homepage;
