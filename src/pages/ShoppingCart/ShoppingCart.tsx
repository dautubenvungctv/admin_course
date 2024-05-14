import React, { useEffect, useState } from "react";
import { StyledShoppingCart } from "./styled";
import { IoIosCloseCircleOutline } from "react-icons/io";
import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

export const ShoppingCart = () => {
  const [listCourseCart, setListCourseCart] = useState<any>([]);
  const [listBookCart, setListBookCart] = useState<any>([]);

  const onChange = (item: any) => (value: any) => {
    // Gửi id và quantity mới lên server

    axios
      .put(`http://185.250.36.147:3000/book-cart/${useID}/${item.book_id}`, {
        quantity: value,
      })
      .then((res) => {
        getCourseCart();
        getBookCart();
      });
  };
  const useID = localStorage.getItem("userID");

  const getCourseCart = () => {
    axios
      .get(`http://185.250.36.147:3000/course-cart/${useID}`)
      .then((res) => setListCourseCart(res.data));
  };
  const getBookCart = () => {
    axios
      .get(`http://185.250.36.147:3000/book-cart/${useID}`)
      .then((res) => setListBookCart(res.data));
  };
  useEffect(() => {
    getCourseCart();
    getBookCart();
  }, []);
  let listCart = [...listCourseCart, ...listBookCart];

  const handleRemove = (item: any) => {
    if (item.hasOwnProperty("course_id")) {
      axios
        .delete(
          `http://185.250.36.147:3000/course-cart/${item.user_id}/${item?.course_id}`
        )
        .then((res) => getCourseCart());
    } else if (item.hasOwnProperty("book_id")) {
      axios
        .delete(
          `http://185.250.36.147:3000/book-cart/${item.user_id}/${item?.book_id}`
        )
        .then((res) => getBookCart());
    }
  };
  const totalPrice = listCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <StyledShoppingCart>
      <h4 className="title-shopping-cart">Giỏ hàng của bạn</h4>
      <div className="box-shoppingcart">
        <div className="box-product">
          {listCart.length > 0 ? (
            listCart.map((item: any, index: any) => (
              <>
                <div onClick={() => handleRemove(item)} className="close">
                  <IoIosCloseCircleOutline />
                </div>
                <div className="form-cart">
                  <div className="cart-left">Sản phẩm:</div>
                  <div className="cart-right">{item?.title}</div>
                </div>
                <div className="form-cart">
                  <div className="cart-left">Giá:</div>

                  <div className="cart-right">
                    {item?.price * item.quantity}₫
                  </div>
                </div>
                {item.hasOwnProperty("course_id") ? (
                  <></>
                ) : (
                  <div className="form-cart">
                    <div className="cart-left">Số lượng:</div>
                    <div className="cart-right">
                      <InputNumber
                        // min={1}
                        // max={10}
                        value={item.quantity}
                        defaultValue={1}
                        onChange={onChange(item)}
                      />
                    </div>
                  </div>
                )}

                {listCart.length > 0 && <hr />}
              </>
            ))
          ) : (
            <>Chưa có sản phẩm nào trong giỏ hàng!</>
          )}
        </div>

        <div className="box-total">
          <div className="title">Tổng giá trị đơn hàng</div>

          <div className="form-cart">
            <div className="cart-left">Tổng:</div>
            <div className="cart-right">{totalPrice}₫</div>
          </div>
          <div className="to-checkout">
            <Link
              className="btn-checkout"
              to={listCart.length > 0 ? "/check-out" : ""}
            >
              Thanh toán
            </Link>
          </div>
        </div>
      </div>
    </StyledShoppingCart>
  );
};
