import React, { useEffect, useState } from "react";
import { StyleCheckoutQR } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { notification } from "antd";

export const CheckoutQR = () => {
  const [api, contextHolder] = notification.useNotification();
  const nextHome = useNavigate();

  const userID = localStorage.getItem("userID");
  const today = moment(); // Lấy ngày hiện tại
  const [pricePaid, setPricePaid] = useState<any>(null);
  const [contentPaid, setContentPaid] = useState<any>(null);
  const [idOrder, setIdOder] = useState(null);
  const [listCourseCart, setListCourseCart] = useState<any>([]);
  const [listBookCart, setListBookCart] = useState<any>([]);
  const getOrder = () => {
    axios
      .get(`${process.env.REACT_APP_PORT_ADMIN}/orders/${userID}`)
      .then((res) => {
        if (res.data.length > 0) {
          setIdOder(res.data[res.data.length - 1].id);
        }
      });
  };
  useEffect(() => {
    getOrder();
  }, []);
  const getCourseCart = () => {
    axios
      .get(`${process.env.REACT_APP_PORT_ADMIN}/course-cart/${userID}`)
      .then((res) => setListCourseCart(res.data));
  };
  const getBookCart = () => {
    axios
      .get(`${process.env.REACT_APP_PORT_ADMIN}/book-cart/${userID}`)
      .then((res) => setListBookCart(res.data));
  };
  useEffect(() => {
    getCourseCart();
    getBookCart();
  }, []);
  let listCart = [...listCourseCart, ...listBookCart];
  const totalPrice = listCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const MY_BANK = {
    BANK_ID: "MB",
    ACCOUNT_NO: "3200368278483",
    ACCOUNT_NAME: "DO VAN CHUYEN",
  };
  const QR = `https://img.vietqr.io/image/${MY_BANK.BANK_ID}-${MY_BANK.ACCOUNT_NO}-compact2.png?amount=${totalPrice}&addInfo=DTBV${userID}${idOrder}&accountName=${MY_BANK.ACCOUNT_NAME}`;

  const checkPaid = () => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbx3wKJ32LukcVALYo1j6-vN5zj7d8pyPPCnH9vtTALjzcSC1vc7xHeyUfSrtLISZ1zp/exec"
      )
      .then((res) => {
        const paid = res.data.data[res.data.data.length - 1];
        setPricePaid(paid["Giá trị"]);
        setContentPaid(paid["Mô tả"]);
      })
      .catch((error) => {
        console.error("API call error:", error);
      });
  };
  useEffect(() => {
    // checkPaid();
    let intervalId: any;
    intervalId = setInterval(() => {
      checkPaid();
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const paymentSuccessful = () => {
    axios.post(`${process.env.REACT_APP_PORT_ADMIN}/payment-successful`, {
      user_id: userID,
      book_id: listBookCart[0]?.cart_id,
      course_id: listCourseCart[0]?.cart_id,
    });
  };
  useEffect(() => {
    if (
      pricePaid === totalPrice &&
      contentPaid?.split(" ")[0] === `DTBV${userID}${idOrder}`
    ) {
      api.success({
        message: `Notification success`,
        description: "Chuyển khoản thành công!",
        placement: "bottomRight",
      });
      paymentSuccessful();
      nextHome("/login");

      // clearInterval(intervalId);
    }
  }, [pricePaid, contentPaid]);
  return (
    <StyleCheckoutQR>
      {contextHolder}
      <h3 className="title-checkqr">Thanh toán</h3>
      <div className="box">
        <p className="thanks">Cảm ơn bạn. Đơn hàng của bạn đã được nhận.</p>
        <ul className="woocommerce-order-overview woocommerce-thankyou-order-details order_details">
          <li className="woocommerce-order-overview__order order">
            Mã đơn hàng:{" "}
            <strong>
              DTBV{userID}
              {idOrder}
            </strong>
          </li>
          <li className="woocommerce-order-overview__date date">
            Ngày: <strong>{today.format("DD-MM-yyyy")}</strong>
          </li>
          <li className="woocommerce-order-overview__total total">
            Tổng cộng:{" "}
            <strong>
              <span className="woocommerce-Price-amount amount">
                <bdi>
                  {totalPrice}&nbsp;
                  <span className="woocommerce-Price-currencySymbol">₫</span>
                </bdi>
              </span>
            </strong>
          </li>
          <li className="woocommerce-order-overview__payment-method method">
            Phương thức thanh toán: <strong>Chuyển khoản</strong>
          </li>
        </ul>
        <div className="box-qr">
          <div className="titleqr">Mã QR chuyển khoản ngân hàng</div>
          <img style={{ width: "100%" }} src={QR} alt="" />
          <table
            className="table table-bordered"
            style={{
              fontSize: "15px",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <tbody>
              <tr className="">
                <td className="text-right " style={{ textAlign: "right" }}>
                  <strong style={{ color: "black" }}>Tên tài khoản:</strong>
                </td>
                <td
                  className="text-left payment-instruction "
                  style={{ textAlign: "left" }}
                >
                  <div>
                    <span style={{ color: "black" }}>
                      {MY_BANK.ACCOUNT_NAME}
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="" style={{ background: "#FBFBFB" }}>
                <td className="text-right " style={{ textAlign: "right" }}>
                  <strong style={{ color: "black" }}>Số tài khoản:</strong>
                </td>
                <td
                  className="text-left payment-instruction "
                  style={{ textAlign: "left" }}
                >
                  <span style={{ color: "black" }}>{MY_BANK.ACCOUNT_NO}</span>
                </td>
              </tr>
              <tr>
                <td className="text-right " style={{ textAlign: "right" }}>
                  <strong style={{ color: "black" }}>Ngân hàng:</strong>
                </td>
                <td
                  className="text-left payment-instruction "
                  style={{ textAlign: "left" }}
                >
                  <div>
                    <span style={{ color: "black" }}>{MY_BANK.BANK_ID}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-right " style={{ textAlign: "right" }}>
                  <strong style={{ color: "black" }}>Số tiền:</strong>
                </td>
                <td
                  className="text-left payment-instruction "
                  style={{ textAlign: "left" }}
                >
                  <div ng-switch-when="vcb" className="ng-scope">
                    <span style={{ color: "black" }}>
                      {totalPrice} <sup>vnđ</sup>
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td className="text-right " style={{ textAlign: "right" }}>
                  <strong style={{ color: "black" }}>Nội dung*:</strong>
                </td>
                <td
                  className="text-left payment-instruction "
                  style={{ textAlign: "left" }}
                >
                  <strong style={{ fontSize: "20px" }}>
                    DTBV{userID}
                    {idOrder}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <button className="btn-pay">Tôi đã thanh toán</button>
          </div>
        </div>
        <section className="woocommerce-order-details">
          <h2 className="woocommerce-order-details__title">
            Chi tiết đơn hàng
          </h2>
          <table className="woocommerce-table woocommerce-table--order-details shop_table order_details">
            <thead>
              <tr>
                <th className="woocommerce-table__product-name product-name">
                  Sản phẩm
                </th>
                <th className="woocommerce-table__product-table product-total">
                  Tổng
                </th>
              </tr>
            </thead>
            <tbody>
              {listCart.map((item: any, index: any) => (
                <tr className="woocommerce-table__line-item order_item">
                  <td className="woocommerce-table__product-name product-name">
                    <Link
                      className="link"
                      to="https://store.masteranhduc.com/product/sach-truoc-binh-minh/"
                    >
                      {item.title}
                    </Link>{" "}
                    <strong className="product-quantity">
                      ×&nbsp;{item.quantity}
                    </strong>{" "}
                  </td>
                  <td className="woocommerce-table__product-total product-total">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        {item.price * item.quantity}&nbsp;
                        <span className="woocommerce-Price-currencySymbol">
                          ₫
                        </span>
                      </bdi>
                    </span>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Phương thức thanh toán:</th>
                <td>Chuyển khoản</td>
              </tr>
              <tr>
                <th scope="row">Tổng cộng:</th>
                <td>
                  <span className="woocommerce-Price-amount amount">
                    {totalPrice}&nbsp;
                    <span className="woocommerce-Price-currencySymbol">₫</span>
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </section>
      </div>
      <button className="btnDownloadQR">
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 3H11V1H1V11H3V3Z" fill="white"></path>
            <path d="M11 11V5H5V11H11ZM7 7H9V9H7V7Z" fill="white"></path>
            <path d="M20.5 3H29V11H31V1H20.5V3Z" fill="white"></path>
            <path d="M27 11V5H21V11H27ZM23 7H25V9H23V7Z" fill="white"></path>
            <path d="M11 29H3V21H1V31H11V29Z" fill="white"></path>
            <path d="M11 21H5V27H11V21ZM9 25H7V23H9V25Z" fill="white"></path>
            <path d="M29 29H20.5V31H31V21H29V29Z" fill="white"></path>
            <path d="M17 19H25V23H27V17H17V19Z" fill="white"></path>
            <path d="M27 27V25H15V17H5V19H13V27H27Z" fill="white"></path>
            <path d="M13 5H15V11H13V5Z" fill="white"></path>
            <path d="M5 15H19V5H17V13H5V15Z" fill="white"></path>
            <path d="M21 13H27V15H21V13Z" fill="white"></path>
            <path d="M21 21H23V23H21V21Z" fill="white"></path>
            <path d="M17 21H19V23H17V21Z" fill="white"></path>
          </svg>
          <div style={{ marginLeft: "16px", textAlign: "left" }}>
            <span
              style={{
                display: "block",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              LƯU ẢNH QR
            </span>
            <span style={{ fontSize: "12px" }}>
              <i> Sau đó mở App ngân hàng quét QR chuyển khoản</i>
            </span>
          </div>
        </div>
      </button>
    </StyleCheckoutQR>
  );
};
