import React, { useEffect, useState } from "react";
import { StyleLogin } from "./styled";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { SignUp } from "../SignUp/SignUp";
import axios from "axios";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";

type NotificationPlacement = NotificationArgsProps["placement"];
export const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const nextHome = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errPhoneNumber, setErrPhoneNumber] = useState(false);
  const [errPassWord, setErrPassWord] = useState(false);
  // const appData = useSelector(selectAppSelector);
  // console.log("appData: ", appData);
  const handleSubmit = () => {
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

    if (phoneNumber !== "" || passWord !== "") {
      axios
        .post("http://185.250.36.147:3000/auth/login", {
          phone: phoneNumber,
          password: passWord,
        })
        .then((res) => {
          if (res.status === 200) {
            api.success({
              message: `Notification success`,
              description: "Đăng nhập thành công!",
              placement: "bottomRight",
            });

            nextHome("/");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userID", res.data.user_id);
          } else if (res.status === 404) {
            api.error({
              message: `Notification success`,
              description: "Tài khoản, mật khẩu không đúng!",
              placement: "bottomRight",
            });
          }
        })
        .catch((err) => {
          api.error({
            message: `Notification success`,
            description: "Tài khoản, mật khẩu không đúng!",
            placement: "bottomRight",
          });
        });
    }
  };
  return (
    <StyleLogin>
      {contextHolder}
      <div className="login">
        <div className="title-login">Đăng nhập</div>

        <div className="form-login">
          <div className="title">SĐT</div>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
          />
          {errPhoneNumber ? (
            <p>Số điện thoại Mật khẩu không được để trống</p>
          ) : (
            <></>
          )}
          <p></p>
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
        <button onClick={handleSubmit} className="btn-login">
          ĐĂNG NHẬP
        </button>
        <Link to="/forgot-password" className="forgot-password">
          Quên mật khẩu ?
        </Link>
      </div>
    </StyleLogin>
  );
};
