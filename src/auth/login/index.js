import React from "react";
import { Field, reduxForm, Form } from "redux-form";
import { Alert, Button } from "reactstrap";
function Login() {
  return (
    <div className="account account--not-photo">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">
              <span className="account__logo">
                Game
                <span className="account__logo-accent"> Panel</span>
              </span>
            </h3>
          </div>
          <Form className="form login-form">
            {/* <Alert color="danger" isOpen={!!errorMessage || !!errorMsg}>
              {errorMessage}
              {errorMsg}
            </Alert> */}
            <div className="form__form-group">
              <span className="form__form-group-label"> User </span>
              <div className="form__form-group-field">
                <Field
                  name="username"
                  component="input"
                  type="text"
                  placeholder="User Name"
                  className="input-without-border-radius"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Password</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon"></div>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Password"
                  className="input-without-border-radius"
                />
                {/* <div className="account__forgot-password">
                  <NavLink to="/reset_password">Forgot a password?</NavLink>
                </div> */}
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
