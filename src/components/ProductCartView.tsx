import React from 'react'
import OrderTotal from './OrderTotal';
import ShippingForm from './ShippingForm';
import BillingForm from './BillingForm';
import { ProductData } from '../mockAPI';

interface Props {
  onProductSelected: (product: ProductData) => void;
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
      <div>
          <h1>Kassa</h1>
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