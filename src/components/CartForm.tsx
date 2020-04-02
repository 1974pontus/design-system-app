import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../App.css";
import CartItemRow from "./CartItemRow";
import { CartItem, CartConsumer } from "../context";



interface Props {
  cartItems: CartItem[]
}
interface State {}

class CartForm extends React.Component<Props, State> {


  

  render() {
  
    return (
      <div className="order-wrapper">
        <div className="order-title">
           <Row gutter={[8, 16]}>
            <Col sm={24} md={7} lg={7}></Col>
            <Col sm={12} md={5} lg={5}>Produkt</Col>
            <Col sm={8} md={5} lg={5}>Antal</Col>
            <Col sm={8} md={5} lg={5}>Pris</Col>
            <Col  sm={24} md={2} lg={2}></Col>
          </Row>
        </div> 
        
        {this.props.cartItems.map((cartItem) => <CartItemRow cartItem={cartItem}/>)}  
          <div className="otder-footer">
        <CartConsumer> 
        {({ getTotalPrice }) => (<Row gutter={[8, 16]}>
              <Col span={2}></Col>
              <Col span={10}></Col>
              <Col span={5}>Summa:</Col>
              <Col span={5}>{getTotalPrice()}kr</Col>
              <Col span={2}></Col>
            </Row>)}
          </CartConsumer>
        </div>
      </div>
    )
  }
}

export default CartForm;
