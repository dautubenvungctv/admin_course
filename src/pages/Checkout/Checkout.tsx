import React, { useEffect, useState } from "react";
import { StyleCheckout } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";
export const Checkout = () => {
  const nextHome = useNavigate();
  const userID = localStorage.getItem("userID");
  const [api, contextHolder] = notification.useNotification();

  const [name, setName] = useState("");
  const [errName, setErrName] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errPhoneNumber, setErrPhoneNumber] = useState(false);
  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState(false);
  const [city, setCity] = useState("");
  const [errCity, setErrCity] = useState(false);
  const [district, setDistrict] = useState("");
  const [errDistrict, setErrDistrict] = useState(false);
  const [address, setAddress] = useState("");
  const [errAddress, setErrAddress] = useState(false);
  const [listCourseCart, setListCourseCart] = useState<any>([]);
  const [listBookCart, setListBookCart] = useState<any>([]);
  const getCourseCart = () => {
    axios
      .get(`${process.env.REACT_APP_PORT_ADMIN}/course-cart/1`)
      .then((res) => setListCourseCart(res.data));
  };
  const getBookCart = () => {
    axios
      .get(`${process.env.REACT_APP_PORT_ADMIN}/book-cart/1`)
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
  const postInfo = () => {
    if (
      email !== "" ||
      name !== "" ||
      phoneNumber !== "" ||
      city !== "" ||
      district !== "" ||
      address !== ""
    ) {
      axios
        .post(
          `${process.env.REACT_APP_PORT_ADMIN}/submit-order`,
          {
            user_id: userID,
            name: name,
            phone: phoneNumber,
            email: email,
            city: city,
            district: district,
            address: address,
            bookCartId: listBookCart[0]?.cart_id,
            courseCartId: listCourseCart[0]?.cart_id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "X-Custom-Header": "foobar",
              // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            nextHome("/check-outqr");
          }
        });
    } else {
      api.warning({
        message: `Cảnh báo`,
        description: "Bạn phải nhập đầy đủ thông tin để thanh toán giỏ hàng!",
        placement: "topRight",
      });
    }
  };
  return (
    <StyleCheckout>
      {contextHolder}
      <div className="title">Thanh toán</div>
      <div className="box-first">
        <div className="returning">
          <div>Returning customer?</div>
          <Link className="login" to="/login">
            Click here to login
          </Link>
        </div>
        <div className="form-checkout">
          <h3 className="title-form">
            Sau khi thanh toán hệ thống tự động kích hoạt khoá học/sản phẩm
          </h3>
          <div className="form-input">
            <div className="top">Họ và tên*</div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bottom"
              type="text"
            />
          </div>
          <div className="form-input">
            <div className="top">Số điện thoại*</div>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bottom"
              type="text"
            />
          </div>
          <div className="form-input">
            <div className="top">Địa chỉ email*</div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bottom"
              type="text"
            />
          </div>

          <div className="form-input">
            <div className="top">Tỉnh/Thành phố*</div>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bottom"
              type="text"
            />
          </div>
          <div className="form-input">
            <div className="top">Quận/Huyện*</div>
            <input
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="bottom"
              type="text"
            />
          </div>
          <div className="form-input">
            <div className="top">Địa chỉ nhà (Số nhà/Tên Toà...)*</div>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Địa chỉ"
              className="bottom"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="box-second">
        <div className="product-buy">
          <div className="title">Sản phẩm đặt mua</div>
          <div className="shop_table">
            <div className="header-table">
              <th className="product-name">Sản phẩm</th>
              <th className="product-total">Giá</th>
            </div>
            {listCart.map((item: any, index: any) => (
              <tr className="cart_item">
                <td className="product-name">
                  {item.title}&nbsp;{" "}
                  <strong className="product-quantity">
                    ×&nbsp;{item.quantity}
                  </strong>{" "}
                </td>
                <td className="product-total">
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      {item?.price * item.quantity}&nbsp;
                      <span className="woocommerce-Price-currencySymbol">
                        ₫
                      </span>
                    </bdi>
                  </span>{" "}
                </td>
              </tr>
            ))}

            {/* <tr className="cart-subtotal">
              <th>Tạm tính</th>
              <td>
                <span className="woocommerce-Price-amount amount">
                  <bdi>
                    219.000&nbsp;
                    <span className="woocommerce-Price-currencySymbol">₫</span>
                  </bdi>
                </span>
              </td>
            </tr> */}

            <tr className="order-total">
              <th>Tổng</th>
              <td>
                <strong>
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      {totalPrice}&nbsp;
                      <span className="woocommerce-Price-currencySymbol">
                        ₫
                      </span>
                    </bdi>
                  </span>
                </strong>{" "}
              </td>
            </tr>
          </div>
        </div>
        <div className="payment">
          <div className="title-payment">Chuyển khoản</div>
          <div className="payment_box payment_method_casso_up_vietinbank">
            <p>
              Chuyển khoản vào tài khoản <b>Vietinbank</b> của chúng tôi. Đơn
              hàng sẽ tự động được xác nhận.{" "}
            </p>
            <div className="power_by">
              Tra soát giao dịch tự động bởi Casso Robot
            </div>
          </div>
        </div>
        <button onClick={postInfo} className="btn-order">
          Đặt hàng
        </button>
      </div>
    </StyleCheckout>
  );
};
