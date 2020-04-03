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
           <Row justify="space-between" align="bottom" style={{paddingBottom: '2rem'}}>
            <Col span={12}>
              Total summa inklusive frakt: {getTotalPriceInclShipper()}kr
            </Col>

            <Col span={12} style={{textAlign: "right"}}>
              <BuyNowButton />
            </Col>
          </Row>
        )}
      </CartConsumer>
    );
  }
}

export default TotalCartForm;
