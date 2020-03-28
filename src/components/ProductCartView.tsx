import React, { CSSProperties } from 'react'
import CartForm from './CartForm';
import ShippingForm from './ShippingForm';
import BillingForm from './BillingForm';
import { ProductData } from '../mockAPI';
import { CartConsumer, CartItem } from '../context';
import TotalCartForm from './TotalSum'

interface Props {
  product: ProductData
  cartItem: CartItem;
}
interface State {}

class ProductCartView extends React.Component<Props, State> {

  render() {
    return (
      <CartConsumer>
        {({ items }) => (
          <div style={checkoutWrapper}>
              <h1>Kassa</h1>
              <CartForm cartItem={this.props.cartItem} cartItems={items} />
              <h1>Dina uppgifter</h1>
              <BillingForm />
              <h1>Fraktsätt</h1>
              <ShippingForm />
              <h1>Betalsätt</h1>

              <h1>Att betala</h1>
              <TotalCartForm />

          </div>
        )}
      </CartConsumer>
    );
  }
}

export default ProductCartView

const checkoutWrapper: CSSProperties = {
  margin:'3rem'
}