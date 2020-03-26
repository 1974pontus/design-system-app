import React, { CSSProperties } from "react";
import { Row, Col, Button, Badge } from "antd";
import "antd/dist/antd.css";
import "../App.css";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined
} from "@ant-design/icons";
import { ProductData } from "../mockAPI";

interface Props {
  product: ProductData
}

interface State {
  count: number,
  show: boolean
  sum: number
}


class OrderTotal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      count: 1, 
      show: false,
      sum: 765
    }
  }

  totalCost = () => {
    let a = this.props.product.price
    let b = this.props.product.price
    const sum =  a + b
    this.setState({ sum })
  }

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  };

  onChange = (show: boolean) => {
    this.setState({ show });
  };

  render() {
    return (
      <div className="order-wrapper">
        <div className="order-title">
          <Row gutter={[8, 16]}>
            <Col span={2}></Col>
            <Col span={15}>Produkter</Col>
            <Col span={3}>Antal</Col>
            <Col span={3}>Pris</Col>
            <Col span={2}></Col>
          </Row>
        </div>
        <div className="order-items">
          <Row gutter={[8, 16]}>
            <Col span={2}>
              <img style={productImage} src={this.props.product.productImg} alt={this.props.product.alt} />
            </Col>
            {/* <Col span={14}>Produkt{this.props.product.productName}</Col> */}
            <Col span={3}>
              <MinusCircleOutlined onClick={this.decline} />
              <Badge count={this.state.count}></Badge>
              <PlusCircleOutlined onClick={this.increase} />
            
              {/* <Text count={this.state.count} strong>
                1
              </Text> */}
            </Col>

            <Col span={3}>{this.props.product.price} kr</Col>
            <Col span={2}>
              <DeleteOutlined />
            </Col>
          </Row>
        </div>
        <div className="otder-footer">
          <Row gutter={[8, 16]}>
            <Col span={2}></Col>
            <Col span={14}>
              <Button type="primary" htmlType="submit">
                PRESENTKORT
              </Button>
            </Col>
            <Col span={3}>Summa:</Col>
            <Col span={3}>{this.state.sum} kr</Col>
            <Col span={2}></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default OrderTotal;


const productImage: CSSProperties = {
  width: '5rem',
  height: '5rem',
  objectFit: 'cover'
}