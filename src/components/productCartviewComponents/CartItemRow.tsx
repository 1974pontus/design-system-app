import React, { CSSProperties } from "react";
import { Row, Col, Badge } from "antd";
import "antd/dist/antd.css";
import "../../App.css";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined
} from "@ant-design/icons";
import { CartConsumer, CartItem } from "../../context";

interface Props {
  cartItem: CartItem;
}
interface State {}

class CartItemRow extends React.Component<Props, State> {
  render() {
    const { cartItem } = this.props;
    const { product } = cartItem;
    return (
      <CartConsumer>
        {({ addProductToCart, deleteProductFromCart, deleteCartItemRow }) => (
          <Row gutter={[8, 16]}>
            <Col span={7}>
              <img
                style={productImage}
                src={product.productImg}
                alt={product.alt}
              />
            </Col>
            <Col span={5}>{product.productName}</Col>

            <Col span={5}>
              <MinusCircleOutlined
                onClick={() => deleteProductFromCart(product)}
              />
              <Badge>{cartItem.quantity}</Badge>
              <PlusCircleOutlined onClick={() => addProductToCart(product)} />
            </Col>

            <Col span={5}>{product.price * cartItem.quantity}</Col>
            <Col span={2}>
              <DeleteOutlined onClick={() => deleteCartItemRow(product)} />
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
