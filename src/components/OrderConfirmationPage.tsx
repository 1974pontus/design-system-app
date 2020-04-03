import React, { CSSProperties } from "react";
import { Row, Col, Button, Divider } from "antd";
import "antd/dist/antd.css";
import "../App.css";
import { CartConsumer, CartItem } from "../context";
import { Link } from "react-router-dom";
import StartPage from "./StartPage";
import CartForm from "./productCartviewComponents/CartForm";


let orderNumber = new Uint32Array(1);
window.crypto.getRandomValues(orderNumber);
for (var i = 0; i < orderNumber.length; i++) {}



interface Props {
  cartItem: CartItem
}
interface State {}

class OrderConfirmationPage extends React.Component<Props, State> {

 

  
  render() {
    
    /* const { cartItem } = this.props;
    const { product } = cartItem; */
    return (
      <CartConsumer>
        {({ getTotalPriceInclShipper , clearCart}) => (
          <div>
          <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
            OrderBekräftelse
           </Divider>
            <Row  justify="center" align="top" style={{ textAlign: 'center', padding: '2rem'}} >
              <Col span={12}>
                <h1>Mini Colorini</h1>
                <h4>Tack för att du handlar hos Mini Colorini</h4>
                <h4>Ditt Ordernummer:</h4>
                <h4>{orderNumber}</h4>
              </Col>
            </Row>
            <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
            Beställningöversikt
           </Divider>
          
            <Row  justify="center" align="top">
              <Col span={2}></Col>
              <Col span={5}>Produkt</Col>
              <Col span={5}>Antal</Col>
              <Col span={5}>Pris</Col>
            </Row>
            {/* 
            <Row gutter={[8, 16]}>
              <Col span={2}>
                <img
                  style={productImage}
                  src={product.productImg}
                  alt={product.alt}
                />
              </Col>

              <Col span={5}>{product.productName}</Col>

              <Col span={5}>
                <h1>{cartItem.quantity}</h1>
              </Col>

              <Col span={5}>{product.price * cartItem.quantity}</Col> 
              */}

          <Divider orientation="right" style={{ color: '#333', fontWeight: 'normal' }}>
          Total summa inklusive frakt: {getTotalPriceInclShipper()}kr
           </Divider>
          
           <Row  justify="center" align="top" style={{ textAlign: 'center', padding: '2rem'}}>
              <Col span={12}>
                <h4>Vi Hoppas du blir nöjd med din colorini.</h4>
                <h4>Happy Painting</h4>
              
                  <Link to={"/"}> 
                    <Button type="primary" onClick={() => clearCart()}>
                      Shoppa vidare</Button>
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





// import React, { CSSProperties } from "react";
// import { Row, Col, Button, Divider } from "antd";
// import "antd/dist/antd.css";
// import "../App.css";
// import { CartConsumer, CartItem } from "../context";
// import { Link } from "react-router-dom";

// let orderNumber = new Uint32Array(1);
// window.crypto.getRandomValues(orderNumber);
// for (var i = 0; i < orderNumber.length; i++) {}

// interface Props {
//   cartItem: CartItem;
// }
// interface State {}

// class OrderConfirmationPage extends React.Component<Props, State> {
//   render() {
//     /* const { cartItem } = this.props;
//     const { product } = cartItem; */
//     return (
//       <CartConsumer>
//         {({ getTotalPriceInclShipper }) => (
//         <div>
//           <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
//           OrderBekräftelse
//          </Divider>
//           <Row  justify="center" align="top" style={{ textAlign: 'center', padding: '2rem'}} >
//             <Col span={8}>
//               <h1>Mini Colorini</h1>
//               <h4>Tack för att du handlar hos Mini Colorini</h4>
//               <h4>Ditt Ordernummer:</h4>
//               <h4>{orderNumber}</h4>
//             </Col>
//           </Row>
//           <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
//           Beställningöversikt
//          </Divider>
//             <Row  justify="center" align="top">
//                 <Col span={2}></Col>
//                 <Col span={5}>Produkt</Col>
//                 <Col span={5}>Antal</Col>
//                 <Col span={5}>Pris</Col>
//             </Row>
//             <Row  justify="center" align="top">
//              <Col sm={24} md={12} lg={16}>
//               <img
//                 style={productImage}
//                 src={product.productImg}
//                 alt={product.alt}
//               />
//             </Col>
//             <Col>{product.productName}</Col>
//             <Col>>{cartItem.quantity}</Col>
//             <Col>{product.price * cartItem.quantity}</Col>
//           </Row>

//       <Divider orientation="right" style={{ color: '#333', fontWeight: 'normal' }}>
//       Total summa inklusive frakt: {getTotalPriceInclShipper()}kr
//        </Divider>
      
//        <Row  justify="center" align="top" style={{ textAlign: 'center', padding: '2rem'}}>
//           <Col span={8}>
//             <h4>Vi Hoppas du blir nöjd med din colorini.</h4>
//             <h4>Happy Painting</h4>
          
//               <Link to={"/"}style={{ padding: '1.5rem'}}> 
//                 <Button type="primary">Klar</Button>
//               </Link>
    
//           </Col>
//         </Row>
//       </div>
//     )}
//   </CartConsumer>
// );
// }
// }

// export default OrderConfirmationPage;

// const productImage: CSSProperties = {
// width: "5rem",
// height: "5rem",
// objectFit: "cover"
// };
