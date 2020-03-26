import React, { useState, useEffect, CSSProperties } from 'react'
import { Col, Layout } from 'antd';
import Header from './Header';
//as renames BrowserRouter to Router
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import ProductCartView from './ProductCartView';
import ProductInfo from './ProductInfo';
import Footer from './Footer';
import StartPage from "./StartPage";
import productData, { ProductData } from '../mockAPI';




const MainLayout = () => {
  const [product, setProduct] = useState<ProductData>(productData[5])

  const handleProductSelected = (product: ProductData) => {
    setProduct(product)
  }

  useState(() => {
    if (product.productName !== "Sommarmalva") {
      localStorage.setItem("product",JSON.stringify(product))
      console.log(product)
    }

  }, );

  useEffect(() => {
    const product: ProductData | null = JSON.parse(
      localStorage.getItem("product") || "null"
    );
    console.log(product)
    setProduct(product || productData[0])

  }, []) 
    return (
      //everything that is insite Router will have the abillity to use routing
      <Router>
      <div className='App' style={overallStyle}> 
      <Layout style={{ height: '100vh' }}> 
            {/* Here should all the components for the home/shoping page be */}
        
          <Route exact path="/">
                <Header />
                <StartPage product={product}/>
                <Footer />
                {/* <img style={{objectFit: 'cover'}} src={pic} alt="Trés Commás"/> */}
          </Route>
          
          {/* Here should all the payment/ ordertotal and forms be*/}
          <Route path="/OrderTotal">
            <Col span={24}> 
              <Link to="/"> 
                <Header />
              </Link>
              <ProductCartView 
                onProductSelected={handleProductSelected}
                product={product}
              />
              <Footer />
            </Col>
            
          </Route>

          {/* Here should the detailView of the product be */}
          <Route path="/ProductInfo">
              <Link to="/"> 
                <Header />
              </Link>
              
              <ProductInfo Product={product} />
              <Footer />
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
    )

  } 


export default MainLayout



const overallStyle: CSSProperties = {
  position: 'relative',
  minHeight: '100vh'
}


 

/* return (
  <div className="App">
    <Layout>
        <Header />
        <StartPage />
        <Footer />
      </Layout>
      
  </div> */

