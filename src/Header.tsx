import React, { Component, CSSProperties } from "react";
import {  Row, Col } from 'antd'
import ShopCounter from "./ShopCounter";



interface Props {

}
interface State {
   
}

class Header extends Component<Props, State> {
       
 render() {
    return (
        <div style={headerWraper}>
            <Row>
                <Col span={8}> </Col>
                <Col span={8}><h1>Mini Colorini</h1></Col>
                <Col span={8}><ShopCounter /> </Col>
            </Row>

            {/* <Button type='default'>Buy Me!</Button> */}
        </div>
    )
}
}

export default Header


const headerWraper: CSSProperties = {
  padding: '2rem'
}