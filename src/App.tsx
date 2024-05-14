import React from "react";
import { Layout } from "./component/Layout/Layout";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./component/OffPage/Login/Login";
import { User } from "./component/OffPage";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { Checkout } from "./pages/Checkout/Checkout";
import { CheckoutQR } from "./pages/CheckoutQR/CheckoutQR";
import { Member } from "./pages/Member/Member";
import { ListCourse } from "./pages/ListCourse/ListCourse";
import path from "path";
import { BookDetail } from "./pages/BookDetail/BookDetail";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
import { GroupDetail } from "./pages/GroupDetail/GroupDetail";
function App() {
  const publics = [
    {
      path: "/",
      pages: Home,
    },
    {
      path: "/login",
      pages: User,
    },
    {
      path: "/product-detail/:id",
      pages: ProductDetail,
    },
    {
      path: "/shopping-cart",
      pages: ShoppingCart,
    },
    {
      path: "/check-out",
      pages: Checkout,
    },
    {
      path: "/check-outqr",
      pages: CheckoutQR,
    },
    {
      path: "/member",
      pages: Member,
    },
    {
      path: "/list-course",
      pages: ListCourse,
    },
    {
      path: "/book-detail/:id",
      pages: BookDetail,
    },
    {
      path: "/group/:id",
      pages: GroupDetail,
    },
    {
      path: "/forgot-password",
      pages: ForgotPassword,
    },
  ];
  return (
    <Router>
      <Routes>
        {publics.map((pub, index) => {
          const Pages = pub.pages;
          return (
            <Route
              key={index}
              path={pub.path}
              element={
                <>
                  <Layout>
                    <Pages />
                  </Layout>
                </>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
