import { Row, Col } from "antd";
import React, { CSSProperties } from "react";
import productData from "../mockAPI";
import AddToCartButton from "./AddToCartButton";
import { RouteComponentProps } from "react-router-dom";
import ProductNotFind from "./startPageComponents/ProductNotDFind";
import "../App.css";

interface Props extends RouteComponentProps<{ artNr: string }> {}

interface State {
  matches: boolean;
}

class ProductInfoPage extends React.Component<Props, State> {
  // constructor(props: Readonly<Props>) {
  //   super(props)
  //   this.state = { matches: window.matchMedia("(max-width: 768px)").matches };
  // }
  render() {
    const product = productData.find(
      product => product.artNr === this.props.match.params.artNr
    );
    if (!product) {
      return <ProductNotFind />;
    }

    // const minWith = if (window.matchMedia)

    return (
      <div style={infoWrapper}>
        <Row>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <img
              style={productImage}
              src={product.productImg}
              alt={product.alt}
            />
            <img
              style={productImage}
              src={product.colorImg}
              alt={product.alt}
            />
            <img style={productImage} src={product.roomImg} alt={product.alt} />
          </Col>
          <Col
            className="positionFixed"
            xs={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
            
          >
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
    );
  }
}

export default ProductInfoPage;

const productImage: CSSProperties = {
  width: "20rem",
  height: "20rem",
  objectFit: "cover",
  padding: "1rem"
};

const infoWrapper: CSSProperties = {
  padding: "2rem"
};
