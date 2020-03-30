import { Row, Col } from "antd";
import React from "react";
import productData from "../mockAPI";
import ProductDisplay from "./startPageComponents/ProductDisplay";
import FirstIntroText from "./startPageComponents/FirstIntroText";
import SecondIntroText from "./startPageComponents/SecondIntroText";
import IntroImg from "./startPageComponents/IntroImg";

interface Props {}
interface State {}

class StartPage extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <IntroImg />
        <FirstIntroText />
        <SecondIntroText />
        
        <Row
          style={{ textAlign: "center", margin: "2rem" }}
          justify="center"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        >
          {/* map köllar igeeeenöm igenom alla goa grejer och skapar en go grej. */}
          {productData.map(product => (
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
              <ProductDisplay product={product} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default StartPage;
