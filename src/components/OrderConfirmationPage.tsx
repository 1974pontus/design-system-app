import React, { CSSProperties } from "react";
import { Row, Col, Button} from "antd";
import "antd/dist/antd.css";
import "../App.css";
import { CartConsumer, CartItem } from "../context";
import { Link } from "react-router-dom";

let orderNumber = new Uint32Array(1);
  window.crypto.getRandomValues(orderNumber);
  for (var i = 0; i < orderNumber.length; i++) {
}

interface Props {
  cartItem: CartItem;
}
interface State {}

class OrderConfirmationPage extends React.Component<Props, State> {
  render() {
    const { cartItem } = this.props
    const { product } = cartItem
    return (
      <CartConsumer>

        {({ getTotalPriceInclShipper }) => (
            <div>
        <Row>
            <Col span={24}>
                <h1>Mini Colorini</h1>
                <h3>Tack för att du handlar hos Mini Colorini</h3>
                <h6>Ditt Ordernummer:{orderNumber}</h6>
       
                
                
            </Col>
        </Row>
            <Col span={24}>
            <h5>Beställningöversikt</h5>
            </Col>
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
            <h5>Total</h5>
            <h1>  Total summa inklusive frakt:  {getTotalPriceInclShipper()}kr</h1>
          </Row>
              <Row>
            <Col span={24}>
                <h1>Vi Hoppas du blir nöjd med din colorini.</h1> 
                <h3>Happy Painting</h3>   
                <Link to={"/"}>  
                    <Button type="primary">Klar</Button>
                </Link> 
            </Col>
        </Row>
        </div>
        )}

      </CartConsumer>
    );
  }
}

export default OrderConfirmationPage;

const productImage: CSSProperties = {
  width: "5rem",
  height: "5rem",
  objectFit: "cover"
};
