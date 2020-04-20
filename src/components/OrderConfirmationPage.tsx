import React, { CSSProperties } from "react";
import { Row, Col, Button, Divider } from "antd";
import "antd/dist/antd.css";
import "../App.css";
import { CartConsumer } from "../context";
import { Link } from "react-router-dom";

let orderNumber = new Uint32Array(1);
window.crypto.getRandomValues(orderNumber);
for (var i = 0; i < orderNumber.length; i++) {}

interface Props {}
interface State {}

class OrderConfirmationPage extends React.Component<Props, State> {
  render() {
    return (
      <CartConsumer>
        {({ getTotalPriceInclShipper, clearCart, items }) => (
        <div>
          {console.log(items)}
          <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
          OrderBekräftelse
         </Divider>
          <Row  justify="center" align="top" style={{ textAlign: 'center', padding: '2rem'}} >
            <Col span={12}>
              <h1>Mini Colorini</h1>
              <h4>Tack för att du handlar hos oss</h4>
              |||||||||||||||||||||||||||||||
              <h4>Ditt Ordernummer:</h4>
              <h4>{orderNumber}</h4>
            </Col>
          </Row>
          <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
          Beställningöversikt
          </Divider>
            <Row  justify="center" align="middle">
                <Col span={9}></Col>
                <Col span={7}>Produkt</Col>
                <Col span={5}>Antal</Col>
          {items.map(item => (
            < > 
             <Col span={9}>
                <img
                  style={productImage}
                  src={item.product.productImg}
                  alt={item.product.alt}
                />
              </Col>
              <Col span={7}>{item.product.productName}</Col>
              <Col span={5}>{item.quantity}</Col> 
            </>
            ))} 
            </Row> 


      <Divider orientation="right" style={{ color: '#333', fontWeight: 'normal' }}>
      Total summa inklusive frakt: {getTotalPriceInclShipper()}kr
       </Divider>
      
       <Row  justify="center" align="top" style={{ textAlign: 'center', padding: '2rem'}}>
          <Col span={12}>
            <h4>Vi Hoppas du blir nöjd med din colorini.</h4>
            |||||||||||||||||||||||||||||||
            <h4>Happy Painting</h4>
            <br></br>
              <Link to={"/"}> 
              <Button type="primary" onClick={() => clearCart()}>Shoppa vidare</Button>
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
width: "3rem",
height: "3rem",
objectFit: "cover"
};
