import { Row, Col } from "antd";
import React, { Component, CSSProperties } from "react";

interface Props {}

interface State {}

class StartPage extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Row justify="center">
          <Col span={24}>Intro Img</Col>
        </Row>
        <Row justify="center">
          <Col span={24}>Intro Text</Col>
        </Row>

        <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            Produkt 1
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            Produkt 2
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            Produkt 3
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            Produkt 4
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            Produkt 5
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            Produkt 6
          </Col>
        </Row>
      </div>
    );
  }
}

export default StartPage;
