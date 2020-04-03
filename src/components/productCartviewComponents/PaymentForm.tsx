import React from "react";
import "antd/dist/antd.css";
import { Collapse, Form, Input, InputNumber, Select, Avatar } from "antd";

interface Props {
  phone: string
}

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
    console.log(this.props.phone)
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
          
            <Form.Item
              name={'phone'} 
              /* rules={[{ type: 'number', min: 10, max: 10 }]} */
              label="Telefonnummer"
              /*  hasFeedback validateStatus="success"  */
              help="Med Swish betalar du din order snabbt och smidigt via din telefon. Kontrollera att telefonnummeret stämmer."
            >
              <Input
               /*  id="phone" */
                /* defaultValue={this.props.phone}
                placeholder={this.props.phone}
                maxLength={10}
                pattern="[0-9]" */
                style={{ width: "10rem" }}
              />
            </Form.Item>
          
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
         
          <Form.Item
              label="Kortinnehavare"
            >
              <Input
                id="name"
                name="name"
                /* pattern="[0-9]" */
                style={{ width: "15rem" }}
              />
            </Form.Item>
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
            
              <Form.Item /* style={{ padding: ".5rem 0 1rem 0" }} */ label="Månad">
                <Form.Item name="mounth" noStyle>
                  <InputNumber min={1} max={12} />
                </Form.Item>
              </Form.Item>
              <Form.Item label="År">
                <Form.Item name="Year" noStyle>
                  <InputNumber min={20} max={34} />
                </Form.Item>
              </Form.Item>
           
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
          
        </Panel>
      </Collapse>
    );
  }
}

export default PaymentForm;
