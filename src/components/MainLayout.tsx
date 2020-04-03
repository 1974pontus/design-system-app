import React, { CSSProperties, useEffect } from "react";
import { Layout } from "antd";
import Header from "./Header";
//as renames BrowserRouter to Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductCartViewPage from "./ProductCartViewPage";
import Footer from "./Footer";
import StartPage from "./StartPage";
import ProductInfoPage from "./ProductInfoPage";
import OrderConfirmationPage from "./OrderConfirmationPage";
// import { ProductData } from "../mockAPI";

 const MainLayout = () => {
//   useEffect(() => { 
//     if(product.id !== 'mainView' ) {
//       localStorage.setItem('product', JSON.stringify(product) )
//       localStorage.setItem('phone', JSON.stringify(phone) )
//       console.log(product)
//     }

//     //component did update
//     //arrayen styr när effekten kommer att köras
//   }, [profile, phone])

//   useEffect(() => {
//     const checkOut : ProductData | null = JSON.parse(localStorage.getItem('checkOut') || 'null') 
//     console.log(checkOut)
//     setCheckOut(checkOut || ProductData[0])
   
//     setName( localStorage.getItem('phone') || '')
//     //component did mount

//   }, [])
  return (
    //everything that is insite Router will have the abillity to use routing
    <Router>
      <div className="App" style={overallStyle}>
        <Layout style={{ height: "100vh", background: "white" }}>
          <Header />

          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route path="/checkout" component={ProductCartViewPage} />
            <Route path="/product-info/:artNr" component={ProductInfoPage} />
            <Route
              path="/order-confirmation"
              component={OrderConfirmationPage}
            />
          </Switch>

          <Footer />
        </Layout>
      </div>
    </Router>
  );
};

export default MainLayout;

const overallStyle: CSSProperties = {
  position: "relative",
  minHeight: "100vh"
};
