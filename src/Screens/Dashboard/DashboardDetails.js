import { Card, Col, Row, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodayEventData,
  getTodayPlacementDrives,
} from "../../Action/timebasedDataAction";
import { Buffer } from "buffer";

const DashboardDetails = () => {
  const { todayEventdata, todayPlacementdata } = useSelector((state) => {
    const { timeFrameData } = state;
    const { todayEventdata, todayPlacementdata } = timeFrameData;
    return { todayEventdata, todayPlacementdata };
  });
  const [selectTime, setSelectTime] = useState("today");
  const dispatch = useDispatch();
  const handleDashboardDetails = (time) => {
    setSelectTime(time);
  };

  useEffect(() => {
    dispatch(getTodayEventData());
    dispatch(getTodayPlacementDrives());
  }, []);
  return (
    <Row
      style={{
        background: "#ffffff",
        width: "100%",
        height: "100vh",
        padding: "20px",
      }}
    >
      <Col span={24}>
        <Row justify="start">
          <Col>
            <Typography className={"DetailsPagesHeading"}>DashBoard</Typography>
          </Col>
        </Row>
        <Row justify="space-evenly">
          <Col span={6}>
            <Row>
              <Col
                span={14}
                className={
                  selectTime === "today"
                    ? "selecteddashBoardButton"
                    : "dashBoardButton"
                }
                onClick={() => handleDashboardDetails("today")}
              >
                <Typography className="DashboardDetailsButtonText">
                  Today
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              <Col
                span={14}
                className={
                  selectTime === "week"
                    ? "selecteddashBoardButton"
                    : "dashBoardButton"
                }
                onClick={() => handleDashboardDetails("week")}
              >
                <Typography className="DashboardDetailsButtonText">
                  This Week
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              <Col
                span={14}
                className={
                  selectTime === "months"
                    ? "selecteddashBoardButton"
                    : "dashBoardButton"
                }
                onClick={() => handleDashboardDetails("months")}
              >
                <Typography className="DashboardDetailsButtonText">
                  This Month
                </Typography>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ height: "75vh", overflowY: "scroll" }}>
          <TimsEventsDetails
            timeframe={selectTime}
            todayData={
              selectTime === "today"
                ? { todayEventdata, todayPlacementdata }
                : ""
            }
          />
        </Row>
      </Col>
    </Row>
  );
};
export const TimsEventsDetails = (props) => {
  const { todayEventdata, todayPlacementdata } = props.todayData;
  const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8];
  console.log({ todayEventdata, todayPlacementdata });

  return (
    <Col>
      <Row>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Typography className="categoryText">Evnts</Typography>
            </Col>
            <Col style={{ padding: 20 }}>
              <ScrollMenu>
                {todayEventdata?.todaysEvent?.map((event, i) => (
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={
                      <img
                        alt="example"
                        src={`data:image/png;${Buffer.from(
                          event.ClubEventLogo.data.data,
                          "binary"
                        ).toString("base64")}`}
                      />
                    }
                    key={i}
                  >
                    <Meta
                      title={event?.ClubEventName}
                      description={event?.ClubEventDiscription}
                    />
                  </Card>
                ))}
              </ScrollMenu>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Col span={24}>
            <Typography className="categoryText">Clubs</Typography>
          </Col>
          <Col>
            {" "}
            <ScrollMenu>
              {dummyData.map(({ id }) => (
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              ))}
            </ScrollMenu>
          </Col>
        </Col>
        <Col span={24}>
          <Col span={24}>
            <Typography className="categoryText">PlaceMent Drive</Typography>
          </Col>
          <Col>
            {" "}
            <ScrollMenu>
              {todayPlacementdata?.todaysPlacement?.map((PlaceMent, i) => (
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                  key={i}
                >
                  <Meta
                    title={PlaceMent?.companyName}
                    description={PlaceMent?.companyProfile}
                  />
                </Card>
              ))}
            </ScrollMenu>
          </Col>
        </Col>
      </Row>
    </Col>
  );
};
export default DashboardDetails;
