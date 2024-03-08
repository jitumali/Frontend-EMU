import { Button, Col, Input, Row, Space, Typography } from "antd";
import React from "react";
import "./HomePage/HomepageStyle.css";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});
  const onSubmitLoginData = (data) => {
    console.log("onSubmitRegistrationData", { data });
  };
  console.log({ errors });
  return (
    <Row className="signupMainContainer" justify="center" align="middle">
      <form onSubmit={handleSubmit(onSubmitLoginData)}>
        <Row className="signupformContainer" gutter={[0, 30]} justify="center">
          <Col>
            <Row justify="center">
              <Col span={18}>
                <Row justify="center" gutter={[0, 40]}>
                  <Col span={24}>
                    <Row>
                      <Col>
                        <Typography className="LoginText">LOG IN</Typography>
                      </Col>
                      <Col span={24} />
                      <Col>
                        {" "}
                        <Typography className="WelComeTextLogin">
                          Welcome onboard with us!
                        </Typography>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[0, 20]}>
                      <Col span={24}>
                        <span className="formLabelText">Email</span>
                        <Controller
                          control={control}
                          rules={{ required: "Email is required" }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="Enter you email"
                              className="inputField"
                            />
                          )}
                          name="email"
                        />
                        {errors.email && (
                          <Typography className="ValidationMessage">
                            {errors?.email?.message}
                          </Typography>
                        )}
                      </Col>
                      <Col span={24}>
                        <span className="formLabelText">Password</span>
                        <Controller
                          control={control}
                          rules={{ required: "Password is required" }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="Enter your Password"
                              className="inputField"
                            />
                          )}
                          name="password"
                        />
                        {errors.password && (
                          <Typography className="ValidationMessage">
                            {errors?.password?.message}
                          </Typography>
                        )}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="center">
              <Button htmlType="submit" className="RegisterButton">
                LOGIN
              </Button>
              <Col span={24} />
              {/* <Space> */}
              <Typography className="AlreadyText">
                Already have an account?
              </Typography>
              <Link to="/signup">
                <Typography className="loginButton">Sign Up</Typography>
              </Link>{" "}
              <Typography className="AlreadyText"> Here</Typography>
              {/* </Space> */}
            </Row>
          </Col>
        </Row>
      </form>
    </Row>
  );
};
export default Login;
