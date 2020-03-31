import React from "react";
import "antd/dist/antd.css";
import { Radio, Input, Row, Col } from "antd";
import FirstPaymentComponent from './FirstPaymentComponent'
import SecondPaymentComponent from './SecondPaymentComponent'
import ThirdPaymentComponent from './ThirdPaymentComponent'

interface Props {
}

interface State {
}

class PaymentForm extends React.Component<Props, State> {
  state = {
    value: 1,
  };

  onChange = (e:any) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const radioStyle = {
      display: 'block',
      height: '2rem',
      lineHeight: '2rem',
    };
    return (

      <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1}>
          Swish
          {this.state.value === 1 ? <FirstPaymentComponent /> : null}
        </Radio>
        <Radio style={radioStyle} value={2}>
          Kortbetalning
          {this.state.value === 2 ? <SecondPaymentComponent /> : null}
        </Radio>
        <Radio style={radioStyle} value={3}>
          Klarna
          {this.state.value === 3 ? <ThirdPaymentComponent /> : null}
        </Radio>
      </Radio.Group>
      
    );
  }
}



export default PaymentForm;





































/* import React, { CSSProperties } from 'react'
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
// import klarna from '../img/klarna-app-logo.png'




class PaymentForm extends React.Component{
  onChange: ((e: RadioChangeEvent) => void) | undefined;
 
  render() {
    return (
      <Radio.Group size="large" onChange={this.onChange} defaultValue="a"  >
       <div style={flexDirection}>
        <Radio.Button value="a" name="payment" style={payment}> Switch</Radio.Button>
        <Radio.Button value="b" name="payment"> Klarna</Radio.Button>
        <Radio.Button value="c" name="payment">BetalKort</Radio.Button>
      </div>
      </Radio.Group>
    );
  }

}
export default PaymentForm

const flexDirection: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
}

const payment: CSSProperties = {
  background : 'pink',
  width: '130%'
} */
