import React, { CSSProperties } from 'react'
import OrderTotal from './OrderTotal';
import ShippingForm from './ShippingForm';
import BillingForm from './BillingForm';
import { ProductData } from '../mockAPI';
// import { Slider, Form } from 'antd';

interface Props {
  // onProductSelected: (product: ProductData) => void;
  product: ProductData;  
}

interface State {

}

class ProductCartView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div style={checkoutWrapper}>
          <h1>Kassa</h1>
          {/* <Form.Item name="slider" label="Slider">
        <Slider
          marks={{
            0: 'PRODUKTER',
            33: 'DINA UPPGIFTER',
            66: 'FRAKSÄTT',
            100: 'BETALSÄTT',
          }}
        />
      </Form.Item> */}
          <OrderTotal product={this.props.product}/>
          <h1>Dina uppgifter</h1>
          <BillingForm />
          <h1>Fraktsätt</h1>
          <ShippingForm />
          <h1>Betalsätt</h1>
      </div>
    );
  }
}

export default ProductCartView

const checkoutWrapper: CSSProperties = {
  margin:'3rem'
}