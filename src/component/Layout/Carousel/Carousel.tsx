/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useEffect, useState } from "react";
import { StyledCarousel } from "./styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import axios from "axios";

export const CarouselHome = () => {
  const [listCourse, setListCourse] = useState([]);
  const getListCourses = () => {
    axios
      .get("http://185.250.36.147:3000/courses")
      .then((res) => setListCourse(res.data));
  };
  useEffect(() => {
    getListCourses();
  }, []);
  const handleDelete = (key: any) => {
    axios.delete(`http://185.250.36.147:3000/courses/${key}`).then((res) => {
      if (res.status === 200) {
        getListCourses();
      }
    });
  };
  const handleAdd = () => {
    axios
      .post(`http://185.250.36.147:3000/courses`, {
        image:
          "https://i.ibb.co/hmG2gqr/z5421020108369-37c79a91264e8cd71c01f40c56d9819d.jpg",
        title: "Khoá học test",
        description: "ok 123 ksdjfh;ik",
        price: "2000",
      })
      .then((res) => {
        if (res.status === 200) {
          getListCourses();
        }
      });
  };
  return (
    <StyledCarousel>
      {" "}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1200 },
            items: 3,
          },
          desktop: {
            breakpoint: {
              max: 1200,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 586,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 586,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {listCourse.map((item: any, index: any) => (
          <div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(item.course_id)}
            >
              <IoIosCloseCircleOutline />
            </div>

            <Link
              to={`/product-detail/${item?.course_id}`}
              className="item-caroulsel"
            >
              <div className="title">
                <img
                  style={{
                    width: "100%",
                    height: "100px",
                    borderRadius: "3px",
                  }}
                  src={item?.image}
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
      </Carousel>
      <button onClick={handleAdd}>Thêm sản phẩm</button>
    </StyledCarousel>
  );
};
