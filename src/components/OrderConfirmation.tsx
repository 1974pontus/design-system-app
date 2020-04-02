import React, { CSSProperties } from "react";
import { Row, Col} from "antd";
import "antd/dist/antd.css";
import "../App.css";
import { CartConsumer, CartItem } from "../context";

interface Props {
  cartItem: CartItem;
}
interface State {}

class OrderConfirmation extends React.Component<Props, State> {
  render() {
    const { cartItem } = this.props
    const { product } = cartItem
    return (
      <CartConsumer>
        {({ getTotalPriceInclShipper }) => (
            <div>

            <Row gutter={[8, 16]}>
                <Col span={2}></Col>
                <Col span={5}>Produkt</Col>
                <Col span={5}>Antal</Col>
                <Col span={5}>Pris</Col>
         
            </Row>

          <Row gutter={[8, 16]}>
            <Col span={2}>
              <img style={productImage} src={product.productImg} alt={product.alt}/>
            </Col>

            <Col span={5}>
                {product.productName}
            </Col>

            <Col span={5}>
              <h1>{cartItem.quantity}</h1>
            </Col>

            <Col span={5}>{product.price * cartItem.quantity}</Col>
            <h1>  Total summa inklusive frakt:  {getTotalPriceInclShipper()}kr</h1>
          </Row>
            </div>
        )}
      </CartConsumer>
    );
  }
}

export default OrderConfirmation;

const productImage: CSSProperties = {
  width: "5rem",
  height: "5rem",
  objectFit: "cover"
};
