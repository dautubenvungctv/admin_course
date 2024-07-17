import React, { useEffect, useState } from "react";
import { StyledMyCourse } from "./styled";
import { Space, Table } from "antd";
import axios from "axios";
import moment from "moment";
export const Mycourse = () => {
  const handleLogOut = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    window.location.reload();
  };
  const [listMyBook, setListMyBook] = useState([]);
  const formatBook = listMyBook.map((item: any) => {
    return { ...item, added_at: moment(item?.added_at).format("DD-MM-YYYY") };
  });

  const [listMyCourse, setListMyCourse] = useState([]);
  const formatCourse = listMyCourse.map((item: any) => {
    return { ...item, added_at: moment(item?.added_at).format("DD-MM-YYYY") };
  });
  const userID = localStorage.getItem("userID");
  const getListMyCourse = () => {
    axios
      .get(`${process.env.REACT_APP_PORT_ADMIN}/course-after-payment/${userID}`)
      .then((res1) => {
        setListMyCourse(res1?.data);
      });
  };
  const getListMyBook = () => {
    axios
      .get(`${process.env.REACT_APP_PORT_ADMIN}/book-after-payment/${userID}`)
      .then((res2) => {
        setListMyBook(res2?.data);
      });
  };
  useEffect(() => {
    console.log(window.location.href);
    getListMyBook();
    getListMyCourse();
  }, [window.location.href]);
  const columns = [
    {
      title: "Ngày",
      dataIndex: "added_at",
    },
    {
      title: "Tên",
      dataIndex: "title",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_: any, record: any) => {
    //     // console.log("_: ", _);
    //     // console.log("record: ", record);
    //     return (
    //       <Space size="middle">
    //         <a>Vào học</a>
    //       </Space>
    //     );
    //   },
    // },
  ];
  const columnsCourse = [
    {
      title: "Ngày",
      dataIndex: "added_at",
    },
    {
      title: "Tên",
      dataIndex: "title",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
    },
    {
      title: "Vào học",
      key: "action",
      render: (_: any, record: any) => {
        // console.log("_: ", _);
        // console.log("record: ", record);
        return (
          <Space size="middle">
            <a
              target="_plank"
              href="https://husteduvn-my.sharepoint.com/personal/linh_ns185373_sis_hust_edu_vn/_layouts/15/stream.aspx?id=%2Fpersonal%2Flinh%5Fns185373%5Fsis%5Fhust%5Fedu%5Fvn%2FDocuments%2Ftiktok%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E5489ab20%2D4511%2D49f6%2Da6b1%2D0dcf3f8ca991"
            >
              Vào học
            </a>
          </Space>
        );
      },
    },
  ];

  return (
    <StyledMyCourse>
      <div className="title-my-course">Khoá học của tôi</div>
      <Table columns={columnsCourse} dataSource={formatCourse} />
      <div className="title-my-course">Sách đã mua của tôi</div>

      <Table columns={columns} dataSource={formatBook} />
      <div className="box-logout">
        <button onClick={handleLogOut} className="btn-logout">
          Đăng xuất
        </button>
      </div>
    </StyledMyCourse>
  );
};
