import React, { Component, CSSProperties } from "react";
import { Row, Col } from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined
} from "@ant-design/icons";

interface Props {

}

interface State {

}

class Footer extends React.Component<Props, State> {
  render() {
    return (
      <div style={footer}>
        <Row style={{ textAlign: "center" }}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 5 }}>
            Mini Colorini
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 5 }}>
            Skruvgatan 6, 211 24 Malmö{" "}
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 5 }}>
            Tel. 040-643 164 00
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 5 }}>
            <a href="mailto:info@minicolorini.se">info@minicolorini.se</a>
            <a href="https://www.facebook.com/" target="_blank">
              <FacebookOutlined style={{ marginLeft: "1rem" }} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <InstagramOutlined style={{ marginLeft: "1rem" }} />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <TwitterOutlined style={{ marginLeft: "1rem" }} />
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
const footer: CSSProperties = {
    background: 'pink',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '2.5rem '
  }