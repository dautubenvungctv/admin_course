import React, { useState } from "react";
import { StyledSignUp } from "./styled";
import axios from "axios";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";
import { useNavigation } from "react-router-dom";

type NotificationPlacement = NotificationArgsProps["placement"];
export const SignUp = () => {
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errEmail, setErrEmail] = useState(false);
  const [errPhoneNumber, setErrPhoneNumber] = useState(false);
  const [errPassWord, setErrPassWord] = useState(false);
  const openNotification = (placement: NotificationPlacement) => {
    api.success({
      message: `Notification success`,
      description: "Đăng ký tài khoản thành công",
      placement,
    });
  };

  const handleSignUp = () => {
    if (email === "") {
      setErrEmail(true);
    } else {
      setErrEmail(false);
    }
    if (phoneNumber === "") {
      setErrPhoneNumber(true);
    } else {
      setErrPhoneNumber(false);
    }
    if (passWord === "") {
      setErrPassWord(true);
    } else {
      setErrPassWord(false);
    }
    if (passWord !== "" || email !== "" || phoneNumber !== "") {
      axios
        .post("http://185.250.36.147:3000/auth/register", {
          email: email,
          name: "",
          phone: phoneNumber,
          password: passWord,
        })
        .then((res) => openNotification("bottomRight"))
        .catch((err) =>
          api.error({
            message: `Lỗi`,
            description: "Đã có tài khoản tương tự",
            placement: "bottomRight",
          })
        );
    }
  };
  return (
    <StyledSignUp>
      {contextHolder}{" "}
      <div className="sign-in">
        <div className="title-login">Đăng ký</div>
        <div className="form-login">
          <div className="title">Email</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          {errEmail ? <p>Email không được để trống</p> : <></>}
        </div>
        <div className="form-login">
          <div className="title">SĐT</div>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
          />
          {errPhoneNumber ? <p>Số điện thoại không được để trống</p> : <></>}
        </div>

        <div className="form-login">
          <div className="title">Mật khẩu</div>
          <input
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
            type="text"
          />
          {errPassWord ? <p>Mật khẩu không được để trống</p> : <></>}
        </div>
        {/* <div className="memorize">
          <input type="checkbox" name="" id="" />
          <div>Ghi nhớ mật khẩu</div>
        </div> */}
        <button onClick={handleSignUp} className="btn-login">
          ĐĂNG KÝ
        </button>
        {/* <Link to="/forgot-password" className="forgot-password">
          Quên mật khẩu ?
        </Link> */}
      </div>
    </StyledSignUp>
  );
};
