import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { StyledLayout } from "./styled";
import { Flex } from "antd";

interface LayoutProps {
  children: any;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Flex
        style={{
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            margin: "0 auto",
            flex: 1,
            // background: "#F4F4F4",
          }}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </Flex>
    </StyledLayout>
  );
};
