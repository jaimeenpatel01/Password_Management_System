import React, { useContext, useState } from "react";
import {
  Avatar,
  CTAButton,
  InputField,
  PMSHeading,
} from "Components/UI Components/Atoms";
import "./style.scss";
import { GlobalContext } from "Context/context";
import { USER_LOGIN } from "Context/types";
import { useNavigate } from "react-router-dom";

// ... (import statements remain unchanged)

const LoginPageTemplate = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(GlobalContext);

  const [loading, setLoading] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const loginActionHandler = async () => {
    setLoading("loading");
    if (passwordVal === "chakshu") {
      await dispatch({
        type: USER_LOGIN,
      });
      navigate("/");
    } else {
      setLoading("primary");
      setPasswordError(true);
    }
  };

  return (
    <div className="main">
      <div className="loginSection">
        <PMSHeading color="#ff7700" />
        <div className="formSection ">
          <div className="form">
            <Avatar width="80" />
            <p className="author">@chakshu</p>
            <InputField
              inputValue={passwordVal}
              onChangeHandler={(e) => {
                setPasswordVal(e.target.value);
                setPasswordError(false); // Reset error when input changes
              }}
              fullWidth
              style={{ marginTop: "60px" }}
            />
            {passwordError && (
              <p
                className="error-message"
                style={{ width: "100%", padding: "5px 0px", color: "#FF6666" }}
              >
               !!! Incorrect password. Please try again !!!
              </p>
            )}
            <CTAButton
              variant={loading}
              clickHandler={loginActionHandler}
              fullWidth
              buttonLabel="Sign in"
              style={{ marginTop: "10px" }}
            />
          </div>
          <div className="relatedImage">
            <img src={process.env.PUBLIC_URL + "/Assets/Images/security-vector-svg.svg"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageTemplate;
