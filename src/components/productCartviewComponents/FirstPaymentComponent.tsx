import React from "react";
import { Input, Form, Row, Col  } from 'antd';
interface Props {

}

interface State {

}

class FirstPaymentComponent extends React.Component<Props, State> {
  render() {
    return (
      <Row>
        <Col>
        <Form style={{
      display: 'block',
      height: '2rem',
      lineHeight: '2rem',
      width: "100",
      marginLeft: "10" }}
    >
         <Form.Item 
          label="Success" 
          hasFeedback validateStatus="success"  
          help="Should be combination of numbers & alphabets"
         >
      <Input placeholder="I'm the content" id="success" />
    </Form.Item>
      </Form>
      </Col>
      </Row>
    );
  }
}

export default FirstPaymentComponent;