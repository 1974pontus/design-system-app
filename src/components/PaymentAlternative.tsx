import React, { CSSProperties } from 'react'
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
}
