import { Col, Row } from "antd";
import React from "react";
import "./HomepageStyle.css";

export default function index() {
  return (
    <Row style={{ border: "1px solid yellow", width: "100%" }}>
      <Col className="HomePageMainContainer">
        <Row>Hello</Row>
      </Col>
    </Row>
  );
}
