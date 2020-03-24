import React, { CSSProperties } from "react";
import {  Row, Col } from 'antd'


interface Props {

}
interface State {
   
}

class Footer extends React.Component<Props, State> {
       
 render() {
    return (
       <div style={footer}>
            <Row>
                <Col> Detta är en footer</Col>
            </Row>
        </div>
    )
}
}

export default Footer

const footer: CSSProperties = {
    background: 'pink',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '2.5rem '
  }