import React, { useEffect, useState } from "react";
import { StyleFooter } from "./styled";
import iconFacebook from "../../../assets/Facebook.png";
import iconZalo from "../../../assets/zalo.png";
import { Modal } from "antd";
import axios from "axios";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listGroups, setListGroups] = useState([]);
  console.log("listGroups: ", listGroups);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const getGroups = () => {
    axios
      .get("http://185.250.36.147:3000/groups")
      .then((res) => setListGroups(res.data));
  };
  useEffect(() => {
    getGroups();
  }, []);
  const handleDeleteGroup = (key: any) => {
    axios.delete(`http://185.250.36.147:3000/groups/${key}`).then((res) => {
      if (res.status === 200) {
        getGroups();
      }
    });
  };
  const handleAddGroup = () => {
    axios
      .post(`http://185.250.36.147:3000/groups`, {
        image:
          "https://i.ibb.co/hmG2gqr/z5421020108369-37c79a91264e8cd71c01f40c56d9819d.jpg",
        title: "Tên group",
        description: "Mô tả group",
      })
      .then((res: any) => {
        if (res.status === 200) {
          getGroups();
        }
      });
  };
  return (
    <StyleFooter>
      <div className="wrapper-footer">
        {listGroups.map((item: any, index: any) => (
          <>
            <div onClick={() => handleDeleteGroup(item.group_id)}>
              <IoIosCloseCircleOutline />
            </div>
            <Link to={`/group/${item.group_id}`} className="box">
              <img
                style={{ width: "50px", height: "50px" }}
                src={item.image}
                alt=""
              />
              <div className="box-text">
                <div className="first">{item.title}</div>
                <button onClick={showModal} className="second">
                  Tham gia
                </button>
              </div>
            </Link>
          </>
        ))}
        <button onClick={handleAddGroup}>Thêm nhóm</button>
      </div>
      <div className="absolute-footer ">
        <div className="container">
          <div className="footer-secondary">
            <div className="footer-text ">
              SĐT (Zalo):
              <a rel="nofollow" href="https://zalo.me/0588285128">
                {" "}
                0588285128
              </a>
            </div>
            <div className="footer-text ">
              Quy định:
              <a
                rel="nofollow"
                href="https://khokhoahoc.co/quy-dinh-ve-su-dung-tai-khoan-tren-kho-khoa-hoc/"
              >
                {" "}
                Sử dụng tài khoản
              </a>
            </div>
            <div className="footer-text ">
              <address>
                Email:{" "}
                <a rel="nofollow" href="mailto:support@khokhoahoc.co">
                  support@khokhoahoc.co
                </a>
              </address>
            </div>
          </div>
          <div className="footer-primary">
            <div className="copyright-footer">
              <h4>khokhoahoc.co</h4>
              <p>Copyright © 2021 - Chuyên mua bán khóa học giá rẻ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <img
          style={{
            background: "#5196E4",
            borderRadius: "10000000000px",
            height: "50px",
            width: "50px",
          }}
          src={iconFacebook}
          alt=""
        />
        <div
          style={{
            background: "#5196E4",
            borderRadius: "10000000000px",
            height: "50px",
            width: "50px",
          }}
        >
          <img
            style={{
              background: "#5196E4",
              borderRadius: "10000000000px",
              height: "50px",
              width: "50px",
            }}
            src={iconZalo}
            alt=""
          />
        </div>
      </div>
      <Modal
        title="Đăng ký khoá học"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Đăng ký khoá học để tham gia nhóm chat</p>
      </Modal>
    </StyleFooter>
  );
};
