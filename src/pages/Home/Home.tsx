import React, { useEffect, useState } from "react";
import { CarouselHome } from "../../component/Layout/Carousel/Carousel";
import { StyledHome } from "./styled";
import { Link } from "react-router-dom";
import axios from "axios";
import { Flex } from "antd";
import { IoIosCloseCircleOutline } from "react-icons/io";
export const Home = () => {
  const [listCourse, setListCourse] = useState([]);
  const [listBooks, setListBooks] = useState([]);
  const getListCourses = () => {
    axios
      .get("http://185.250.36.147:3000/courses")
      .then((res) => setListCourse(res.data));
  };
  useEffect(() => {
    getListCourses();
  }, []);
  const getBooks = () => {
    axios
      .get("http://185.250.36.147:3000/books")
      .then((res) => setListBooks(res.data));
  };
  useEffect(() => {
    getBooks();
  }, []);
  const handleDeleteBook = (key: any) => {
    axios.delete(`http://185.250.36.147:3000/books/${key}`).then((res) => {
      if (res.status === 200) {
        getBooks();
      }
    });
  };
  const handleAddBook = () => {
    axios
      .post(`http://185.250.36.147:3000/books`, {
        image:
          "https://i.ibb.co/hmG2gqr/z5421020108369-37c79a91264e8cd71c01f40c56d9819d.jpg",
        title: "Tên sách",
        description: "Mô tả sách",
        price: "2000",
      })
      .then((res) => {
        if (res.status === 200) {
          getBooks();
        }
      });
  };
  return (
    <StyledHome>
      <strong className="title-course">KHOÁ HỌC</strong>
      <div className="box-headerhome">
        <img
          src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/440212779_759722503002558_2165049528631978589_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHilYBwGWU4Ufb4uXQh6HP0ijqG7V1LGziKOobtXUsbOLuEexhZ24D2Qomw_S4mGyrYBe_Y4R2aZGbWmsAoJbWf&_nc_ohc=kpoXAKXB-j8Q7kNvgFOVPV3&_nc_ht=scontent.fhan14-1.fna&oh=00_AYBYbv1DrFiD2sQehuuYoy6kavG9MGIwjlMgfOSGiYfGNw&oe=6644BA86"
          className="banner-header"
          alt=""
        />
        <div className="container">
          <div className="carousel">
            <CarouselHome />
          </div>
          <div className=" box-shadow-2">
            <h1 style={{ textAlign: "center" }}>
              <span style={{ color: "#3d5a98", fontSize: "80%" }}>
                <strong>KHO KHÓA HỌC - SHARE HƠN 5000 KHÓA HỌC ONLINE</strong>
              </span>
            </h1>
            <p style={{ textAlign: "center" }}>
              Tổng kho khóa học online lớn nhất hiện nay, uy tín, chất lượng và
              nhanh chóng. Chúng tôi liên tục cập nhật các khóa học mới đáp ứng
              nhu cầu của các bạn.
            </p>
          </div>
        </div>
      </div>

      <div className="banner">
        <a href="https://khokhoahoc.co/membership/">
          <img
            className="img-banner"
            src="https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fHww"
            alt=""
          />
        </a>
      </div>
      <div className="wrapper-book ">
        <strong className="title-book">TOP SÁCH BÁN CHẠY</strong>
        <Flex wrap="wrap" gap="small">
          {listBooks.map((item: any, index: any) => (
            <div style={{ display: "grid" }}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleDeleteBook(item.book_id)}
              >
                <IoIosCloseCircleOutline />
              </div>

              <Link
                to={`/book-detail/${item?.book_id}`}
                className="item-caroulsel"
              >
                <div className="title">
                  <img
                    style={{
                      width: "100%",
                      height: "150px",
                      borderRadius: "3px",
                    }}
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="body">
                  <div className="body-first">
                    <div className="item-first">{item?.title}</div>
                    <div className="price">{item?.price}₫</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Flex>
        <button style={{ marginTop: "20px" }} onClick={handleAddBook}>
          Thêm sách
        </button>

        <div className="member">
          <div className="text-member">
            Trở thành hội viên VIP để học miễn phí hơn 5000 khoá học
          </div>
          <div className="box-btn">
            <Link className="btn-member" to="/member">
              Xem ngay
            </Link>
          </div>
        </div>
      </div>
    </StyledHome>
  );
};
