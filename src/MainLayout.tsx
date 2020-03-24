import React from 'react'
import { Row, Col, Switch } from 'antd';
import Header from './Header';
import AddingProducts from './AddingProducts';
import pic from './tres_commas.jpg'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import OrderTotal from './components/OrderTotal';
import ShopingCard from './ShopingCart';



function MainLayout() {
    return (
    <Router>
      <div className='App'>     
        <Row>
          <Route exact path="/">
            <Col span={24}> 
              
              <Row>
                <Col span={12}> <Header /> </Col> 
                <Link to="/OrderTotal"> 
                  <Col span={12}> <ShopingCard /> </Col>
                </Link>
              </Row>
                <img style={{objectFit: 'cover'}} src={pic} alt="Trés Commás"/>
          
            </Col>
          </Route>
          
          {/* Här ska alla props som ska visas på första sidan vara */}
          <Route path="/OrderTotal">
            <Col span={12}> 
              <Header />
              <OrderTotal />
            </Col>
          </Route>

          <Route path="">
            <Col span={12}>
              <AddingProducts />
            </Col>
          </Route>
      </Row>

        <Switch>
          <Route path="/">
            <MainLayout />
          </Route>

          <Route path="/StartPage">
            <OrderTotal />
          </Route>

          <Route path="/ProductDetial">
            <OrderTotal />
          </Route>

        </Switch>
      </div>
      </Router>
   
      
    );
    
  }

export default MainLayout