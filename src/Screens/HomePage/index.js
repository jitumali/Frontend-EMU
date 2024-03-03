import { Col, Row, Typography } from "antd";
import React from "react";
import "./HomepageStyle.css";
import { IoIosCall, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { MdFacebook, MdOutlineMailOutline, MdWhatsapp } from "react-icons/md";

export default function index() {
  return (
    <Row style={{ width: "100%" }} justify="center">
      <Col className="HomePageMainContainer" span={24}>
        <Row justify="center">
          <Col className="HomePageContactus" align="middle">
            <Row
              justify="space-between"
              align="middle"
              style={{ height: "60px" }}
            >
              <Col xs={6} sm={6} md={4} lg={4} xl={4}>
                <Row justify="space-between">
                  <Col>
                    <MdFacebook className="Icons" />
                  </Col>
                  <Col>
                    <IoLogoLinkedin className="Icons" />
                  </Col>
                  <Col>
                    <IoLogoInstagram className="Icons" />
                  </Col>
                  <Col>
                    <MdWhatsapp className="Icons" />
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={12} md={14} lg={12} xl={12}>
                <Row>
                  <Col span={10}>
                    <Row>
                      <Col span={1}>
                        <IoIosCall className="Icons" />
                      </Col>
                      <Col span={18}>
                        <Typography className="ContactusText">
                          9079821903
                        </Typography>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={14}>
                    <Row>
                      <Col span={4}>
                        <MdOutlineMailOutline className="Icons" />
                      </Col>
                      <Col span={20}>
                        <Typography className="ContactusText">
                          jitendramali9979@gmail.com
                        </Typography>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
