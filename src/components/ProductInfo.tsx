import { Row, Col, Button } from 'antd';
import React, { CSSProperties } from 'react';
import { ProductData } from '../mockAPI'

interface Props {
    Product: (ProductData)
  }

interface State {
 
}

class ProductInfo extends React.Component<Props, State>{
    render(){
        return(
            <div>
            <Row>
                <Col span={12}>
                    <img style={productImage} src={this.props.Product.productImg} alt={this.props.Product.alt}/>);
                    <img style={productImage} src={this.props.Product.colorImg} alt={this.props.Product.alt}/>);
                    <img style={productImage} src={this.props.Product.roomImg} alt={this.props.Product.alt}/>);
                </Col>

                <Col span={12}> 
                    <h1>{this.props.Product.productName}</h1>
                    <p>{this.props.Product.artNr}</p>
                    <p>{this.props.Product.productInfo}</p>
                    <p>{this.props.Product.size}</p>
                    <p>{this.props.Product.consumption}</p>
                    <p>{this.props.Product.stock}</p>
                    <h3>{this.props.Product.price}</h3>
                    <Button block>Lägg i varukorg</Button>
                </Col>
            </Row>
            </div>
        )
      }  
}

export default ProductInfo

const productImage: CSSProperties = {
    width: '12rem',
    height: '13rem',
    margin: '0 2rem',
    objectFit: 'cover'
  }
