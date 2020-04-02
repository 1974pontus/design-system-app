import React, { Component, CSSProperties } from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";
import ShopCounter from "./ShopCounter";

interface Props {}
interface State {}

class Header extends Component<Props, State> {
  render() {
    return (
      //the links in this are the nav and are placed in MainLayout as <Header />

      <nav style={headerWraper}>
        <Link to="/">
          <Col span={24}>
            {" "}
            <h1 style={h1}>Mini Colorini </h1>{" "}
          </Col>
        </Link>

        <Link
          to="/checkout"
          style={{ position: "fixed", right: "1rem", zIndex: 1 }}
        >
          <Col span={12}>
            {" "}
            <ShopCounter />{" "}
          </Col>
        </Link>
      </nav>
    );
  }
}

export default Header;

const headerWraper: CSSProperties = {
  padding: "2rem",
  display: "flex",
  justifyContent: "space-between"
};

const h1: CSSProperties = {
  fontSize: "1.5rem",
  zIndex: 1
};
