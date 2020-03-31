import React, { CSSProperties } from "react";
import { Row, Col } from "antd";

interface Props {}

interface State {}


class IntroImg extends React.Component<Props, State> {

    render() {
      return ( 
        <Row>
        <Col xs={{ span: 24 }} md={{ span: 20, offset: 2 }}>
          <img
          style={StartPageImage}
          src="https://www.auro.se/fileadmin/_processed_/csm_Varmgul_Anne_Jeppson_e0200f7f6e.jpg"
          alt="bedroom with a warm yellow painted wall">
          </img>
        </Col>
      </Row>
    )
  }
}

export default  IntroImg;

const StartPageImage: CSSProperties = {
  objectFit: "cover",
  objectPosition: "50% 80%",
  height: "25rem",
  width: "100%"
}
