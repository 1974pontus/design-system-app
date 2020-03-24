import React from 'react'
import { Col, Switch } from 'antd';
import Header from './Header';
// import pic from './img/tres_commas.jpg'
//as renames BrowserRouter to Router
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import ProductCartView from './ProductCartView';
// import ShopingCard from './ShopingCart';



function MainLayout() {
    return (
      //everything that is insite Router will have the abillity to use routing
    <Router>
      <div className='App'> 
           {/* Here should all the components for the home/shoping page be */}
          <Route exact path="/">
                <Header />
                {/* <img style={{objectFit: 'cover'}} src={pic} alt="Trés Commás"/> */}
          </Route>
          
          {/* Here should all the payment/ ordertotal and forms be*/}
          <Route path="/OrderTotal">
            <Col span={24}> 
              <Link to="/"> 
                <Header />
              </Link>
              <ProductCartView />
            </Col>
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
        </Switch>
      </div>
      </Router>
  
    );
    
  }

export default MainLayout