import React from "react";
import { Row, Col } from "antd";
import "../App.css";
import thumbNail from '../pngguru.com.png'
import { DeleteOutlined } from '@ant-design/icons';



// const { Header, Footer, Content } = Layout;



function OrderTotal() {
  return (
    <div>
    <Row gutter={[8, 16]}>
      <Col span={20}>Produkter</Col>
      <Col span={2}>Antal</Col>
      <Col span={2}>Pris</Col>
    </Row>
    <Row gutter={[8, 16]}>
      <Col span={1}>
        <img src={ thumbNail } alt="bucket"/>
      </Col>
      <Col span={17}>Produktbeskrivning: Jotun Lady, Avocado Bliss Halvmatt</Col>
      <Col span={2}>- 1 +</Col>
      <Col span={2}>399 kr</Col>
      <Col span={2}><DeleteOutlined /></Col>
    </Row>
    <Row gutter={[8, 16]}>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
  </div>
  );
}

export default OrderTotal;
