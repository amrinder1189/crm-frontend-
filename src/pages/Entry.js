import React from "react";
import { useState } from "react";
import LoginPage from "./LoginPage";
import ResetPassword from "./ResetPassword";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [islogin, setIslogin] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPass(value);
        break;
      default:
        break;
    }
  };

  const Submithandler = (e) => {
    e.preventDefault();

    if (!email || !pass) {
      alert("pls fill email and password");
    }
    console.log(email, pass);
  };

  const isLogin = (value) => {
    setIslogin(value);
  };

  return (
    <div>
      {islogin === "login" && (
        <LoginPage
          handleOnChange={handleOnChange}
          isLogin={isLogin}
          email={email}
          pass={pass}
          Submithandler={Submithandler}
        />
      )}

      {islogin === "reset" && (
        <ResetPassword
          handleOnChange={handleOnChange}
          email={email}
          isLogin={isLogin}
          pass={pass}
          Submithandler={Submithandler}
        />
      )}
    </div>
  );
};
