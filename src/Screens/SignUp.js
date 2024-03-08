import { Button, Col, Input, Row, Space, Typography } from "antd";
import React from "react";
import "./HomePage/HomepageStyle.css";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});
  const onSubmitRegistrationData = (data) => {
    console.log("onSubmitRegistrationData", { data });
  };
  console.log({ errors });
  return (
    <Row className="signupMainContainer" justify="center" align="middle">
      <form onSubmit={handleSubmit(onSubmitRegistrationData)}>
        <Row className="signupformContainer" gutter={[0, 30]} justify="center">
          <Col>
            <Row justify="center">
              <Col span={18}>
                <Row justify="center">
                  <Col span={24}>
                    <Typography className="signuptext">SIGN UP</Typography>
                  </Col>
                  <Col span={24}>
                    <Row justify="space-between">
                      <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                        <Row gutter={[0, 20]}>
                          <Col span={24}>
                            <span className="formLabelText">First name</span>
                            <Controller
                              control={control}
                              rules={{ required: "First name is required" }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  placeholder="Enter your first name"
                                  className="inputField"
                                />
                              )}
                              name="firstName"
                            />
                            {errors.firstName && (
                              <Typography className="ValidationMessage">
                                {errors?.firstName?.message}
                              </Typography>
                            )}
                          </Col>
                          <Col span={24}>
                            <span className="formLabelText">Last name</span>
                            <Controller
                              control={control}
                              rules={{ required: "Last name is required" }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  placeholder="Enter your last name"
                                  className="inputField"
                                />
                              )}
                              name="lastName"
                            />
                            {errors.lastName && (
                              <Typography className="ValidationMessage">
                                {errors?.lastName?.message}
                              </Typography>
                            )}
                          </Col>

                          <Col span={24}>
                            <span className="formLabelText">Email</span>
                            <Controller
                              control={control}
                              rules={{ required: "Email is required" }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  placeholder="Enter your email"
                                  className="inputField"
                                  type="email"
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
                            <span className="formLabelText">Phone</span>
                            <Controller
                              control={control}
                              rules={{ required: "Number is required" }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  placeholder="Enter your phone"
                                  className="inputField"
                                  type="number"
                                />
                              )}
                              name="phone"
                            />
                            {errors.phone && (
                              <Typography className="ValidationMessage">
                                {errors?.phone?.message}
                              </Typography>
                            )}
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                        <Row gutter={[0, 20]}>
                          <Col span={24}>
                            <span className="formLabelText">Enrollment No</span>
                            <Controller
                              control={control}
                              rules={{
                                required: "Enrollment number is required",
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  placeholder="Enter your entrollment number"
                                  className="inputField"
                                />
                              )}
                              name="enrollmentNumber"
                            />
                            {errors.enrollmentNumber && (
                              <Typography className="ValidationMessage">
                                {errors?.enrollmentNumber?.message}
                              </Typography>
                            )}
                          </Col>
                          <Col span={24}>
                            <Row>
                              <Col span={24}>
                                <span className="formLabelText">Password </span>
                                <Controller
                                  control={control}
                                  rules={{ required: "Password is required" }}
                                  render={({ field }) => (
                                    <Input
                                      {...field}
                                      placeholder="Enter password"
                                      className="inputField"
                                      type="password"
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
                          <Col span={24}>
                            <Row>
                              <Col span={24}>
                                <span className="formLabelText">Address</span>
                                <Controller
                                  control={control}
                                  rules={{ required: "Address is required" }}
                                  render={({ field }) => (
                                    <Input
                                      {...field}
                                      placeholder="Enter your address"
                                      className="inputField"
                                    />
                                  )}
                                  name="address"
                                />
                                {errors.address && (
                                  <Typography className="ValidationMessage">
                                    {errors?.address?.message}
                                  </Typography>
                                )}
                              </Col>
                            </Row>
                          </Col>
                          <Col span={24}>
                            <Row>
                              <Col>
                                <span className="formLabelText">
                                  Whats your favorite sport
                                </span>
                                <Controller
                                  control={control}
                                  rules={{
                                    required: "Favorite sport is requried",
                                  }}
                                  render={({ field }) => (
                                    <Input
                                      {...field}
                                      placeholder="Enter answer"
                                      className="inputField"
                                    />
                                  )}
                                  name="answer"
                                />
                                {errors.address && (
                                  <Typography className="ValidationMessage">
                                    {errors?.address?.message}
                                  </Typography>
                                )}
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
          </Col>
          <Col span={24}>
            <Row justify="center">
              <Button htmlType="submit" className="RegisterButton">
                REGISTER
              </Button>
              <Col span={24} />
              {/* <Space> */}
              <Typography className="AlreadyText">
                Already have an account?
              </Typography>
              <Link to="/login">
                <Typography className="loginButton">Login</Typography>
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
export default SignUp;
