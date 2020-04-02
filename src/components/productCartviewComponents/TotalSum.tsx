import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../../App.css";
import { CartConsumer } from "../../context";
import BuyNowButton from "./BuyNowButton";

interface Props {}
interface State {}

class TotalCartForm extends React.Component<Props, State> {
  render() {
    return (
      <CartConsumer>
        {({ getTotalPriceInclShipper }) => (
          <Row>
            <Col xs={24} sm={4} md={6} lg={8} xl={10}>
                Total summa inklusive frakt:  {getTotalPriceInclShipper()}kr
            </Col>

            <Col xs={2} sm={4} md={6} lg={8} xl={10}> </Col>
            
            <Col xs={24} sm={16} md={12} lg={8} xl={4}>
              <BuyNowButton />
            </Col>
          </Row>
        )}
      </CartConsumer>
    );
  }
}

export default TotalCartForm;
