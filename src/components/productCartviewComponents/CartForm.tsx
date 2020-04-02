import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../../App.css";
import CartItemRow from "./CartItemRow";
import { CartItem, CartConsumer } from "../../context";

interface Props {
  cartItems: CartItem[];
}
interface State {}

class CartForm extends React.Component<Props, State> {
  render() {
    return (
      <div className="order-wrapper">
        <div className="order-title">
          <Row gutter={[8, 16]}>
            <Col span={7}></Col>
            <Col span={5}>Produkt</Col>
            <Col span={5}>Antal</Col>
            <Col span={5}>Pris</Col>
            <Col span={2}></Col>
          </Row>
        </div>

        {this.props.cartItems.map(cartItem => (
          <CartItemRow cartItem={cartItem} />
        ))}
        <div className="otder-footer">
          <CartConsumer>
            {({ getTotalPrice }) => (
                  <Row justify="space-between" align="bottom">
                <Col span={12}></Col>
                <Col span={12} style={{textAlign: "right"}}>Summa: {getTotalPrice()}kr</Col>
              </Row>
            )}
          </CartConsumer>
        </div>
      </div>
    );
  }
}

export default CartForm;
