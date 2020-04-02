import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../App.css";
import { CartConsumer } from "../context";
import BuyNow from "./BuyNow";

interface Props {}
interface State {}

class TotalCartForm extends React.Component<Props, State> {
  render() {
    return (
      <CartConsumer>
        {({ getTotalPriceInclShipper }) => (
<<<<<<< HEAD
          <Row gutter={[8, 16]}>
            <Col span={10}></Col>
            <Col span={7}>Total summa inklusive frakt:</Col>
            <Col span={3}></Col>
            <Col span={3}>{getTotalPriceInclShipper()}kr</Col>
            <Col span={1}></Col>
=======
          <Row>
            <Col xs={24} sm={4} md={6} lg={8} xl={10}>
                Total summa inklusive frakt:  {getTotalPriceInclShipper()}kr
            </Col>

            <Col xs={2} sm={4} md={6} lg={8} xl={10}> </Col>
            
            <Col xs={24} sm={16} md={12} lg={8} xl={4}>
              <BuyNow />
            </Col>
>>>>>>> 481c338bd7a561120f534f42f0ef07bd48a4da8f
          </Row>
        )}
      </CartConsumer>
    );
  }
}

export default TotalCartForm;
