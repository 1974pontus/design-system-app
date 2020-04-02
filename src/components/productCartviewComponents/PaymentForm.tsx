import React from "react";
import "antd/dist/antd.css";
import { Collapse, Form, Input, InputNumber, Select, Avatar } from "antd";

interface Props {}

interface State {}

const { Panel } = Collapse;
const { Option } = Select;

class PaymentForm extends React.Component<Props, State> {
  state = {
    key: 1
  };

  callback(key: any) {
    console.log(key);
  }

  /* 
  onChange = (e:any) => {
    console.log('panel checked', e.target.key);
    this.setState({
      key: e.target.value,
    });
  }; */

  render() {
    return (
      <Collapse accordion defaultActiveKey={["1"]} onChange={this.callback}>
        <Panel
          header="Swish"
          key="1"
          extra={
            <Avatar
              shape="square"
              src={
                "https://pbs.twimg.com/profile_images/1196324788475695104/HUAVlXnu_400x400.jpg"
              }
            />
          }
        >
          <Form>
            <Form.Item
              name={['phonenumber']} 
              rules={[{ type: 'number', min: 10, max: 10 }]}
              label="Telefonnummer"
              /*  hasFeedback validateStatus="success"  */

              help="Med Swish betalar du din order snabbt och smidigt via din telefon. Kontrollera att telefonnummeret stämmer."
            >
              <Input
                id="Phonenumber"
                maxLength={10}
                pattern="[0-9]"
                style={{ width: "10rem" }}
              />
            </Form.Item>
          </Form>
        </Panel>
        <Panel
          header="Kortbetalning"
          key="2"
          extra={
            <Avatar
              shape="square"
              src={
                "https://www.clipartkey.com/mpngs/m/25-250385_credit-card-payment-icon-png.png"
              }
            />
          }
        >
          <Form>
            <Form.Item
              label="Kortnummer"
              /* hasFeedback validateStatus="success"   */
              help="Du kan betala med ditt VISA, Mastercard eller American Express kort."
            >
              <Input
                id="Cardnumber"
                minLength={13}
                maxLength={16}
                pattern="[0-9]"
                style={{ width: "13rem" }}
              />
            </Form.Item>
            <Form layout="inline" style={{ padding: ".5rem 0 1rem 0" }}>
              <Form.Item label="Månad">
                <Form.Item name="mounth" noStyle>
                  <InputNumber min={1} max={12} />
                </Form.Item>
              </Form.Item>
              <Form.Item label="År">
                <Form.Item name="Year" noStyle>
                  <InputNumber min={20} max={34} />
                </Form.Item>
              </Form.Item>
            </Form>
            <Form.Item
              label="CVC2"
              help="Du finner CVC2-koden på backsidan av ditt bankkort."
            >
              <Input
                id="CVC2"
                minLength={3}
                maxLength={4}
                pattern="[0-9]"
                style={{ width: "6rem" }}
              />
            </Form.Item>
          </Form>
          <Avatar
            style={{ paddingTop: "1rem" }}
            shape="square"
            size="large"
            src={
              "https://www.kicksbroz.com/wp-content/uploads/2019/03/visa-5-logo-png-transparent.png"
            }
          />
          <Avatar
            style={{ paddingTop: "1rem" }}
            shape="square"
            size="large"
            src={
              "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/206_Mastercard_Credit_Card_logo_logos-512.png"
            }
          />
          <Avatar
            style={{ paddingTop: "1rem" }}
            shape="square"
            size="large"
            src={
              "https://cdn3.iconfinder.com/data/icons/payment-methods-18/512/Americanexpress_american_express_debit-512.png"
            }
          />
        </Panel>
        <Panel
          header="BankID"
          key="3"
          extra={
            <Avatar
              shape="square"
              src={
                "https://www.postkodlotteriet.se/images/18.5ee58f3a16d5d8d351a4c4b/1570533262841/20191007%20-%20BankID%20logo%203-2.png"
              }
            />
          }
        >
          <Form>
            <Form.Item
              label="Bank för direktbetalning"
              help="Vid köp hänvisas du till din bank där du utför betalningen. Efter betalning hänvisas du tillbaka till Mini Colorini där du får ditt kvitto."
            >
              <Input.Group>
                <Select
                  defaultValue="Länsförsäkringar"
                  style={{ width: "10rem" }}
                >
                  <Option value="Länsförsäkringar">Länsförsäkringar</Option>
                  <Option value="Handelsbanken">Handelsbanken</Option>
                  <Option value="SEB">SEB</Option>
                  <Option value="Swebank">Swebank</Option>
                  <Option value="Nordea">Nordea</Option>
                </Select>
              </Input.Group>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
    );
  }
}

export default PaymentForm;

/* const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`; */

/* 
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

defaultActiveKey={['1']} onChange={callback}
 */
/* 
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
} */

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
