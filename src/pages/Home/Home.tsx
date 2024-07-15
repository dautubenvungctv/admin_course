import React, { useEffect, useState } from "react";
import { CarouselHome } from "../../component/Layout/Carousel/Carousel";
import { StyledHome } from "./styled";
import { Link } from "react-router-dom";
import { makeUploadImage } from "../../component/ConvertLinkImage";
import axios from "axios";
import { Flex } from "antd";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaFacebookSquare, FaTiktok, FaYoutube } from "react-icons/fa";
export const Home = () => {
  const [fix, setFix] = useState(false);
  const [image, setImage] = useState("");
  const [titleFirst, setTitleFirst] = useState("");
  const [titleSecond, setTitleSecond] = useState("");
  const [des, setDes] = useState("");
  const [infoCompany, setInfoCompany] = useState<any>([]);
  const [listCourse, setListCourse] = useState([]);
  const [listBooks, setListBooks] = useState([]);
  const getCompany = () => {
    axios.get(`http://185.250.36.147:3000/title`).then((res) => {
      setInfoCompany(res.data);
      setTitleFirst(res.data[0].title_first);
      setTitleSecond(res.data[0].title_second);
      setImage(res.data[0].image_url);
      setDes(res.data[0].description);
    });
  };
  useEffect(() => {
    getCompany();
  }, []);

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
  const handleSumbmitCompany = () => {
    axios
      .post(`http://185.250.36.147:3000/update_title`, {
        title_first: titleFirst,
        title_second: titleSecond,
        description: des,
        image_url: image,
      })
      .then((res) => {
        getCompany();
      });
    setFix(false);
  };
  return (
    <StyledHome>
      {fix ? (
        <button onClick={handleSumbmitCompany} className="btn-fix">
          Lưu
        </button>
      ) : (
        <button onClick={() => setFix(true)} className="btn-fix">
          Sửa giới thiệu cty
        </button>
      )}

      {fix ? (
        <div style={{ marginBottom: "300px" }} className="company">
          <div className="img-company">
            <input
              onChange={async (e: any) => {
                const file = e.target.files[0];
                let response = await makeUploadImage(file);
                setImage(response?.secure_url);

                // Clear the input value after setting the image
                e.target.value = null;
              }}
              type="file"
              id="img"
              name="img"
              accept="image/*"
            />
            <div className="blurred-section"></div>
          </div>
          <div className="info-company">
            <div className="box-icon">
              <a
                target="_plank"
                href="https://www.facebook.com/hoangvinhdautu"
                style={{ color: "#3D5A98" }}
                className="icon"
              >
                <FaFacebookSquare />
              </a>
              <a
                target="_plank"
                href="https://www.youtube.com/@hoangvinhdautubenvung"
                style={{ color: "red" }}
                className="icon"
              >
                <FaYoutube />
              </a>
              <a
                target="_plank"
                href="https://www.tiktok.com/@hoangvinhdautu"
                style={{ color: "black" }}
                className="icon"
              >
                <FaTiktok />
              </a>
            </div>
            <div className="info-child">
              <div className="title-company">
                <input
                  type="text"
                  value={titleFirst}
                  onChange={(e) => setTitleFirst(e.target.value)}
                />
                <input
                  type="text"
                  value={titleSecond}
                  onChange={(e) => setTitleSecond(e.target.value)}
                />
              </div>
              <div className="text-company">
                <textarea
                  value={des}
                  onChange={(e) => setDes(e.target.value)}
                  rows={6} // Số dòng bạn muốn hiển thị ban đầu
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {infoCompany.map((item: any, index: any) => (
            <div className="company">
              <div className="img-company">
                <img
                  style={{ width: "100%" }}
                  src={item?.image_url}
                  alt=""
                  className="avt-cty"
                />
                <div className="blurred-section"></div>
              </div>
              <div className="info-company">
                <div className="box-icon">
                  <a
                    target="_plank"
                    href="https://www.facebook.com/hoangvinhdautu"
                    style={{ color: "#3D5A98" }}
                    className="icon"
                  >
                    <FaFacebookSquare />
                  </a>
                  <a
                    target="_plank"
                    href="https://www.youtube.com/@hoangvinhdautubenvung"
                    style={{ color: "red" }}
                    className="icon"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    target="_plank"
                    href="https://www.tiktok.com/@hoangvinhdautu"
                    style={{ color: "black" }}
                    className="icon"
                  >
                    <FaTiktok />
                  </a>
                </div>
                <div className="info-child">
                  <div className="title-company">
                    <h1>{item?.title_first}</h1>
                    <h1>{item?.title_second}</h1>
                  </div>
                  <div className="text-company">{item?.description}</div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      <strong className="title-course">KHOÁ HỌC</strong>
      <div className="box-headerhome">
        <div className="container">
          <div className="carousel">
            <CarouselHome />
          </div>
          {/* <div className=" box-shadow-2">
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
          </div> */}
          <div className="member">
            <div className="text-member">
              Truy cập website/app dautubenvung.vn
            </div>
            <div className="box-btn">
              <Link className="btn-member" to="/member">
                Xem ngay
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="banner">
        <a href="https://khokhoahoc.co/membership/">
          <img
            className="img-banner"
            src="https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fHww"
            alt=""
          />
        </a>
      </div> */}
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
      </div>
    </StyledHome>
  );
};
