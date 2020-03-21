import React from "react";
import { Row, Col, Button } from "antd";
import "../App.css";
import thumbNail from "../pngguru.com.png";
import { DeleteOutlined } from "@ant-design/icons";

// const { Header, Footer, Content } = Layout;

function OrderTotal() {
  return (
    <div className="order-wrapper">
      <div className="order-title">
        <Row gutter={[8, 16]}>
          <Col span={2}></Col>
          <Col span={13}>Produkter</Col>
          <Col span={3}>Antal</Col>
          <Col span={3}>Pris</Col>
          <Col span={3}>Pris</Col>
        </Row>
      </div>
      <div className="order-items">
        <Row gutter={[8, 16]}>
          <Col span={2}>
            <img src={thumbNail} alt="bucket" />
          </Col>
          <Col span={13}>Jotun Lady, Avocado Bliss Halvmatt</Col>
          <Col span={3}>- 1 +</Col>
          <Col span={3}>399 kr</Col>
          <Col span={3}>
            <DeleteOutlined />
          </Col>
        </Row>
      </div>
      <Row gutter={[8, 16]}>
        <Col span={2}></Col>
        <Col span={11}>
          <Button type="primary" htmlType="submit">
            PRESENTKORT
          </Button>
        </Col>
        <Col span={5}>Summa:</Col>
        <Col span={3}>399 kr</Col>
        <Col span={3}></Col>
      </Row>
    </div>
  );
}

export default OrderTotal;
