import React from 'react'
import { Col, Layout } from 'antd';
import Header from './Header';
// import pic from './img/tres_commas.jpg'
//as renames BrowserRouter to Router
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import ProductCartView from './ProductCartView';
import ProductInfo from './ProductInfo';
// import ShopingCard from './ShopingCart';
import Footer from './Footer';
import StartPage from "./StartPage";

function MainLayout() {
    return (
      //everything that is insite Router will have the abillity to use routing
    <Router>
      <div className='App'> 
      <Layout style={{ height: '100vh' }}> 
           {/* Here should all the components for the home/shoping page be */}
        
          <Route exact path="/">
                <Header />
                <StartPage />
                <Footer />
                {/* <img style={{objectFit: 'cover'}} src={pic} alt="Trés Commás"/> */}
          </Route>
          
          {/* Here should all the payment/ ordertotal and forms be*/}
          <Route path="/OrderTotal">
            <Col span={24}> 
              <Link to="/"> 
                <Header />
              </Link>
              <ProductCartView />
              <Footer />
            </Col>
            
          </Route>

          {/* Here should the detailView of the product be */}
          <Route path="/ProductInfo">
              <Link to="/"> 
                <Header />
              </Link>
              <ProductInfo />
          </Route>


        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
           {/* Behöver man inte ha något i switchen? */}
          </Route>
          <Route path="/OrderTotal">
              {/* Behöver man inte ha något i switchen? */}
          </Route>
          <Route path="/ProductInfo">
              {/* Behöver man inte ha något i switchen? */}
          </Route>
        </Switch>
        </Layout> 
      </div>
      </Router>
  
    );
    
  }

export default MainLayout





 

/* return (
  <div className="App">
    <Layout>
        <Header />
        <StartPage />
        <Footer />
      </Layout>
      
  </div> */

