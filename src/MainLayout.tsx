import React from 'react'
import { Row, Col } from 'antd';
import Header from './Header';
import AddingProducts from './AddingProducts';
import pic from './tres_commas.jpg'



function MainLayout() {
    return (
      <div className='App'>     
        <Row>
        <Col span={24}> 
          <Header />
        </Col>
        <Col span={12}> 
          <img style={{objectFit: 'cover'}} src={pic} alt="Trés Commás"/>
        </Col>
  
        <Col span={12}>
         <AddingProducts />
        </Col>
      </Row>
      </div>
    );
  }

export default MainLayout