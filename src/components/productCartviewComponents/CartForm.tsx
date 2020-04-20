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
      <div>
    
          <Row justify="space-around" align="middle">
            <Col span={5}></Col>
            <Col span={7}>Produkt</Col>
            <Col span={4}>Antal</Col>
            <Col span={4}>Pris</Col>
            <Col span={2}></Col>
          </Row>
    

        {this.props.cartItems.map(cartItem => (
          <CartItemRow cartItem={cartItem} />
        ))}
        <div>
          <CartConsumer>
            {({ getTotalPrice }) => (
                  <Row justify="space-between" align="bottom">
                <Col></Col>
                <Col style={{textAlign: "right"}}>Summa: {getTotalPrice()}kr</Col>
              </Row>
            )}
          </CartConsumer>
        </div>
      </div>
    );
  }
}

export default CartForm;
