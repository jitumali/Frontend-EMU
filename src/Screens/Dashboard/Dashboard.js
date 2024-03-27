import React, { useState } from "react";
import { Avatar, Col, Image, Row, Typography } from "antd";
import eventify from "../../asset/eventifylogo.png";
import "./Dashboard.css";
import Search from "antd/es/transfer/search";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import DashboardDetails from "./DashboardDetails";
import ClubDetails from "./ClubDetails";
import PlaceMentDrives from "./PlaceMentDrives";
import EventDetails from "./EventDetails";
import Registration from "./Registration";

const Dashboard = () => {
  const { userDetails } = useSelector((state) => {
    const { authentication } = state;
    const { userDetails } = authentication;
    return {
      userDetails,
    };
  });
  const [selectedPage, setSelectedPage] = useState(1);
  console.log({ userDetails, selectedPage });
  return (
    <Row>
      <Col style={{ height: "100vh", width: "100%" }}>
        <Row
          justify="space-between"
          style={{ background: "#5d44b7", padding: "20px" }}
        >
          <Col span={12}>
            <Row>
              <Col span={12}>
                <Row align="middle">
                  <Col>
                    <Image
                      src={eventify}
                      style={{ height: "50px", width: "50px" }}
                    />
                  </Col>
                  <Col>
                    <Typography className="logoName">Eventify</Typography>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Search
                  placeholder="input search text"
                  // onSearch={onSearch}
                />
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              <Col>
                <Avatar icon={<UserOutlined />} />
              </Col>
              <Col>
                <Typography className="logoName">Jitendra</Typography>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              background: "#8A8AFF",
              height: "100vh",
              paddingTop: "50px",
            }}
            span={3}
          >
            <Sidebar
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
          </Col>
          <Col span={21}>
            {selectedPage === 1 ? (
              <DashboardDetails />
            ) : selectedPage === 2 ? (
              <ClubDetails />
            ) : selectedPage === 3 ? (
              <EventDetails />
            ) : selectedPage === 4 ? (
              <PlaceMentDrives />
            ) : selectedPage === 5 ? (
              <Registration />
            ) : null}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export const Sidebar = (props) => {
  const { setSelectedPage, selectedPage } = props;
  const handleSeletcedPage = (pages) => {
    setSelectedPage(pages);
  };
  return (
    <Row gutter={[0, 50]} justify="center" align="middle">
      <Col
        span={24}
        className={
          selectedPage === 1
            ? "SidebarSelectedButton"
            : "SidebarNonelectedButton"
        }
        onClick={() => handleSeletcedPage(1)}
      >
        <Row justify="center" align="middle">
          <Typography className="SidebarButtonText">DashBoard</Typography>
        </Row>
      </Col>
      <Col
        span={24}
        className={
          selectedPage === 2
            ? "SidebarSelectedButton"
            : "SidebarNonelectedButton"
        }
        onClick={() => handleSeletcedPage(2)}
      >
        <Row justify="center" align="middle">
          <Typography className="SidebarButtonText">Club</Typography>
        </Row>
      </Col>
      <Col
        span={24}
        className={
          selectedPage === 3
            ? "SidebarSelectedButton"
            : "SidebarNonelectedButton"
        }
        onClick={() => handleSeletcedPage(3)}
      >
        <Row justify="center" align="middle">
          <Typography className="SidebarButtonText">Event</Typography>
        </Row>
      </Col>
      <Col
        span={24}
        className={
          selectedPage === 4
            ? "SidebarSelectedButton"
            : "SidebarNonelectedButton"
        }
        onClick={() => handleSeletcedPage(4)}
      >
        <Row justify="center" align="middle">
          <Typography className="SidebarButtonText">PlaceMentDrive</Typography>
        </Row>
      </Col>
      <Col
        span={24}
        className={
          selectedPage === 5
            ? "SidebarSelectedButton"
            : "SidebarNonelectedButton"
        }
        onClick={() => handleSeletcedPage(5)}
      >
        <Row justify="center" align="middle">
          <Typography className="SidebarButtonText">Registration</Typography>
        </Row>
      </Col>
    </Row>
  );
};
export default Dashboard;
