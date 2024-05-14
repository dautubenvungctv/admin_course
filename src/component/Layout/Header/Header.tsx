import React from "react";
import { StyledHeader } from "./styled";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import logo from "../../../assets/Artboard 2.png";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="header-main">
        <div className="flex-row">
          <div className="icon">
            <img style={{ width: "30px", height: "30px" }} src={logo} alt="" />
          </div>
          <Link to="/" className="title">
            DAUTUBENVUNG
          </Link>
          <div style={{ display: "flex", gap: "8px" }}>
            {/* <Link to="/list-course">
              <IoMdBook />
            </Link> */}
            <Link to="/shopping-cart" className="icon-user">
              <MdOutlineShoppingCart />
            </Link>
            <Link to="/login" className="icon-user">
              <FaRegUser />
            </Link>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
