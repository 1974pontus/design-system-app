import { Row, Col } from "antd";
import React, { Component, CSSProperties } from "react";

interface Props {}

interface State {}

class StartPage extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            xs={{ span: 24}}
            sm={{ span: 24}}
            md={{ span: 12}}
            lg={{ span: 8}}
          >
            col
          </Col>
          <Col
            xs={{ span: 24}}
            sm={{ span: 24}}
            md={{ span: 12}}
            lg={{ span: 8}}
          >
            col
          </Col>
          <Col
            xs={{ span: 24}}
            sm={{ span: 24}}
            md={{ span: 12}}
            lg={{ span: 8}}
          >
            col
          </Col>
     <Col
          xs={{ span: 24}}
            sm={{ span: 24}}
            md={{ span: 12}}
            lg={{ span: 8}}
          >
            col
          </Col>
          <Col
          xs={{ span: 24}}
            sm={{ span: 24}}
            md={{ span: 12}}
            lg={{ span: 8}}
          >
            col
          </Col>
          <Col
          xs={{ span: 24}}
            sm={{ span: 24}}
            md={{ span: 12}}
            lg={{ span: 8}}
          >
            col
          </Col>
        </Row>
      </div>
    );
  }
}

export default StartPage;
