import React, { CSSProperties } from "react";
import { Row, Col, Badge } from "antd";
import "antd/dist/antd.css";
import "../App.css";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined
} from "@ant-design/icons";
import { CartConsumer, CartItem } from "../context";

interface Props {
  cartItem: CartItem;
}
interface State {}

class CartItemRow extends React.Component<Props, State> {
  render() {
    const { cartItem } = this.props
    const { product } = cartItem
    return (
      <CartConsumer>
        {({ addProductToCart, deleteProductFromCart }) => (
          <Row gutter={[8, 16]}>
            <Col span={2}>{/* product.productImg */}</Col>
            <Col span={15}>
                {product.productName}
            </Col>
            <Col span={3}>
              <MinusCircleOutlined onClick={() => deleteProductFromCart(product)}/>
              <Badge>{cartItem.quantity}</Badge>
              <PlusCircleOutlined onClick={() => addProductToCart(product)}/>
            </Col>

            <Col span={3}>{product.price * cartItem.quantity}</Col>
            <Col span={1}>
              <DeleteOutlined
                onClick={() => deleteProductFromCart(product)}
              />
            </Col>
          </Row>
        )}
      </CartConsumer>
    );
  }
}

export default CartItemRow;

const productImage: CSSProperties = {
  width: "5rem",
  height: "5rem",
  objectFit: "cover"
};
