import React from 'react'
import CartForm from './productCartviewComponents/CartForm';
import ShippingForm from './productCartviewComponents/ShippingForm';
import BillingForm from './productCartviewComponents/BillingForm';
import { ProductData } from '../mockAPI';
import { CartConsumer } from '../context';
import TotalCartForm from './productCartviewComponents/TotalSum'
import PaymentForm from './productCartviewComponents/PaymentForm';
import shippingData, { ShippingData } from '../shippingData';
import { Divider, Row, Col, Form } from 'antd';
import { Redirect } from 'react-router-dom';

interface Props {
  product: ProductData
  shippingData: ShippingData[]
}
interface State {
  phone: string
  shouldRedirect: boolean;
}

class ProductCartView extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state= {
      phone: "",
      shouldRedirect: false
    }
  }
  sumbitForm =() => {
    console.log('hej')
       //redirect state
    this.setState({ shouldRedirect: true });
  }

  onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    console.log(values.phone)
    this.setState({phone: values.phone})
 
  };
  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/order-confirmation" />;
    }
    return (
      <CartConsumer>
        {({ items, }) => (

            <Row justify="center" align="top">
              <Form onFinish={this.sumbitForm}>
              <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
              Kassa
              </Divider>
              <Col sm={24} md={12} lg={16}>
                <CartForm cartItems={items} />
              </Col>
              <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
               Dina uppgifter
              </Divider>
              <Col sm={24} lg={12}>
                <BillingForm onFinish={this.onFinish}/>
              </Col>
              <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal', padding: '0 0 2rem 2rem'}}>
              Fraktsätt
              </Divider>
              <Col sm={24} lg={6}>
                <ShippingForm shippingData={shippingData}/>
              </Col>
              <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' , padding: '2rem 0'}}>
              Betalsätt
              </Divider>
              <Col sm={24} lg={12}>
                <PaymentForm phone={this.state.phone}/>
              </Col>
              <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal', padding: '2rem 0' }}>
              Att betala
              </Divider>
              <TotalCartForm  />
              </Form>
            </Row>
        )}
      </CartConsumer>
    );
  }
}

export default ProductCartView


