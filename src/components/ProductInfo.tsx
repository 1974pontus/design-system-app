import { Row, Col, Button } from 'antd';
import React, { CSSProperties } from 'react';
import { ProductData } from '../mockAPI'
import { findByLabelText } from '@testing-library/react';

interface Props {
    Product: (ProductData)
  }

interface State {
 
}

class ProductInfo extends React.Component<Props, State>{
    render(){
        return(
            <div style={infoWrapper} >
            <Row>
                <Col xs={{ span: 24}} md={{ span: 24 }} lg={{ span: 12 }}>
                    <img style={productImage} src={this.props.Product.productImg} alt={this.props.Product.alt}/>
                    <img style={productImage} src={this.props.Product.colorImg} alt={this.props.Product.alt}/>
                    <img style={productImage} src={this.props.Product.roomImg} alt={this.props.Product.alt}/>
                </Col>

                <Col xs={{ span: 18 }} md={{ span: 24 }} lg={{ span: 12 }}>
                    <h1>{this.props.Product.productName}</h1>
                    <p>{this.props.Product.artNr}</p>
                    <p>{this.props.Product.productInfo}</p>
                    <p>{this.props.Product.size}</p>
                    <p>{this.props.Product.consumption}</p>
                    <p>{this.props.Product.stock}</p>
                    <h3>Pris {this.props.Product.price} kr/st</h3>
                    <Button block>Lägg i varukorg</Button>
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
  
 
