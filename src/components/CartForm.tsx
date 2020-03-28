import React from "react";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import "../App.css";
import CartItemRow from "./CartItemRow";
import { CartItem } from "../context";

interface Props {
  cartItems: CartItem[]
  cartItem: CartItem
}
interface State {}

class CartForm extends React.Component<Props, State> {
  

  

  render() {
    const { cartItem } = this.props
    const { product } = cartItem
    return (
      <div className="order-wrapper">
        <div className="order-title">
          <Row gutter={[8, 16]}>
            <Col span={2}></Col>
            <Col span={15}>Produkter</Col>
            <Col span={3}>Antal</Col>
            <Col span={3}>Pris</Col>
            <Col span={2}></Col>
          </Row>
        </div>
        
        {this.props.cartItems.map((cartItem) => <CartItemRow cartItem={cartItem}/>)}  
          
        <div className="otder-footer">
          <Row gutter={[8, 16]}>
            <Col span={2}></Col>
            <Col span={15}>
              <Button type="primary" htmlType="submit">
                PRESENTKORT
              </Button>
            </Col>
            <Col span={3}>Summa:</Col>
            <Col span={3}>{product.price * cartItem.quantity} kr</Col>
            <Col span={2}></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CartForm;
