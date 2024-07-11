// @ts-ignore
import React, { useEffect, useState } from "react";
import { StyledProductDetail } from "./styled";
import { MdAddShoppingCart } from "react-icons/md";
import { useParams } from "react-router-dom";
import { makeUploadImage } from "../../component/ConvertLinkImage";
import axios from "axios";

import debounce from "lodash/debounce";
import { notification } from "antd";

export const ProductDetail = () => {
  const [api, contextHolder] = notification.useNotification();

  const { id } = useParams();
  const [course, setCourse] = useState<any>(null);
  const [fix, setFix] = useState(false);
  const [title, setTitle] = useState("");
  const [demo, setDemo] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const userID = localStorage.getItem("userID");

  const getDetailCourse = () => {
    axios
      .get(`http://185.250.36.147:3000/courses/${id}`)
      .then((res) => setCourse(res.data[0]));
  };
  useEffect(() => {
    getDetailCourse();
  }, []);
  useEffect(() => {
    if (course) {
      setTitle(course.title);
      setImage(course.image);
      setDescription(course.description);
      setPrice(course.price);
      setDemo(course.demo);
    }
  }, [course]);
  const handlePut = () => {
    axios
      .put(`http://185.250.36.147:3000/courses/${id}`, {
        image: image,
        title: title,
        price: price,
        description: description,
        demo: demo,
      })
      .then((res) => {
        if (res.status === 200) {
          api.success({
            message: `Thành công`,
            description: "Sửa thành công!",
            placement: "topRight",
          });
          getDetailCourse();
          setFix(false);
        }
      })
      .catch((err) => {
        api.error({
          message: `Lỗi`,
          description: "Sửa thất bại!",
          placement: "topRight",
        });
      });
  };

  return (
    <StyledProductDetail>
      {contextHolder}
      {fix ? (
        <div>
          <div className="box-first">
            <div className="info-product">
              <div className="img">
                {/* <input
                  // id={`contained-button-file${index}`}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onClick={(e: any) => {
                    e.target.value = "";
                  }}
                  onChange={async (e: any) => {
                    const file = e.target.files[0];
                    let response = await makeUploadImage(file);
                    setImage(response?.secure_url);
                  }}
                /> */}
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
              </div>
            </div>
            <div className="technical-information">
              <input
                placeholder="Tên khoá học"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
              <input
                placeholder="Giá tiền"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
              />
              <div className="row-info">
                <div className="left">Thời lượng</div>
                <div className="right">22 bài giảng</div>
              </div>
              <button onClick={handlePut} className="btn-add-shopping-cart">
                Lưu
              </button>
            </div>
          </div>

          <div className="describe">
            <div className="describe-first">
              <div className="title">Mô tả</div>
              <div className="title-product">{course?.title}</div>
              <div className="warning">
                Lưu ý: Đăng ký khoá học để được vào group.
              </div>
              <img src="" alt="" />
              <div className="wp-caption-text">
                <input
                  style={{ width: "100%" }}
                  type="text"
                  value={demo}
                  onChange={(e) => setDemo(e.target.value)}
                />
              </div>
            </div>
            <div className="describe-second">
              <div className="title-product">
                Bạn sẽ học được gì từ khoá học này
              </div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6} // Số dòng bạn muốn hiển thị ban đầu
              />
            </div>
            <div className="describe-third"></div>
          </div>
        </div>
      ) : (
        <div>
          <div className="box-first">
            <div className="info-product">
              <div className="img">
                <img className="img-detail" src={course?.image} alt="" />
              </div>
            </div>
            <div className="technical-information">
              <h1 className="title-product">{course?.title}</h1>
              <div className="price">{course?.price}₫</div>
              <div className="row-info">
                <div className="left">Thời lượng</div>
                <div className="right">22 bài giảng</div>
              </div>
              <button
                onClick={() => setFix(true)}
                className="btn-add-shopping-cart"
              >
                Chỉnh sửa
              </button>
            </div>
          </div>

          <div className="describe">
            <div className="describe-first">
              <div className="title">Mô tả</div>
              <div className="title-product">{course?.title}</div>
              <div className="warning">
                Lưu ý: Đăng ký khoá học để được vào group.
              </div>
              <img src="" alt="" />
              <div className="wp-caption-text">{course?.demo}</div>
            </div>
            <div className="describe-second">
              <div className="title-product">
                Bạn sẽ học được gì từ khoá học này
              </div>
              <blockquote
                dangerouslySetInnerHTML={{
                  __html: course?.description.replace(/\n/g, "<br/>"),
                }}
              />
            </div>
            <div className="describe-third"></div>
          </div>
        </div>
      )}
    </StyledProductDetail>
  );
};
