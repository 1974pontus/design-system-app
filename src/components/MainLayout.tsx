import React, { CSSProperties } from "react";
import { Layout } from "antd";
import Header from "./Header";
//as renames BrowserRouter to Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductCartView from "./ProductCartView";
import ProductInfo from "./ProductInfo";
import Footer from "./Footer";
import StartPage from "./StartPage";
//import OrderConfirmation from "./OrderConfirmation";


const MainLayout = () => {

  return (
    //everything that is insite Router will have the abillity to use routing
    <Router>
      <div className="App" style={overallStyle}>
        <Layout style={{ height: "100vh", background: 'white'}}>
          <Header />


          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/checkout" component={ProductCartView} />
          <Route path="/product-info/:artNr" component={ProductInfo} />
          {/* <Route path="/order-confirmation" component={OrderConfirmation} />  */}
        
        </Switch>

          
          <Footer />
        
        </Layout>
      </div>
    </Router>
  );
};

export default MainLayout;



const overallStyle: CSSProperties = {
  position: 'relative',
  minHeight: '100vh'
  }

 








