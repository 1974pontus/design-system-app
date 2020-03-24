import React, { Component, CSSProperties } from "react";
import {  Row, Col } from 'antd'


interface Props {

}
interface State {
   
}

class Footer extends React.Component<Props, State> {
       
 render() {
    return (
       <div>
            <Row>
                <Col> Detta är en footer</Col>
            </Row>
        </div>
    )
}
}

export default Footer