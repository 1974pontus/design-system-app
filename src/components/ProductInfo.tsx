import { Row, Col, Button } from 'antd';
import React, { CSSProperties } from 'react';
import productData, { ProductData } from '../mockAPI'
import AddToCartButton from './AddToCartButton';
import { RouteComponentProps } from 'react-router-dom';


interface Props extends RouteComponentProps<{ artNr: string }> {}

interface State {}

class ProductInfo extends React.Component<Props, State>{
    render(){
      const product = productData.find((product) => product.artNr === this.props.match.params.artNr)
      if (!product) {
        return <h3>Produkten finns inte i vårat lager</h3>
      }

      return(
        <div style={infoWrapper} >
          <Row>
              <Col xs={{ span: 24}} md={{ span: 24 }} lg={{ span: 12 }}>
                  <img style={productImage} src={product.productImg} alt={product.alt}/>
                  <img style={productImage} src={product.colorImg} alt={product.alt}/>
                  <img style={productImage} src={product.roomImg} alt={product.alt}/>
              </Col>

              <Col xs={{ span: 18 }} md={{ span: 24 }} lg={{ span: 12 }}>
                  <h1>{product.productName}</h1>
                  <p>{product.artNr}</p>
                  <p>{product.productInfo}</p>
                  <p>{product.size}</p>
                  <p>{product.consumption}</p>
                  <p>{product.stock}</p>
                  <h3>Pris {product.price} kr/st</h3>
                  <AddToCartButton product={product} />
              </Col>
          </Row>
        </div>
      )
    }  
}

export default ProductInfo

const productImage: CSSProperties = {
    width: '15rem',
    height: '14rem',
    objectFit: 'cover'
  }

  const infoWrapper: CSSProperties = {
    margin:'3rem',
  }
  
 
