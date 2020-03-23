
import { Row, Col } from 'antd';
import React, { Component, CSSProperties } from "react";


interface Props {

}

interface State {

}

class StartPage extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} type="flex" justify="center">
                    <Col span={8}>col</Col>
                    <Col span={8}>col</Col>
                    <Col span={8}>col</Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} type="flex" justify="center">
                    <Col span={8}>col</Col>
                    <Col span={8}>col</Col>
                    <Col span={8}>col</Col>
                </Row>
            </div>
        )
    }
    }
    
    export default StartPage
    
    