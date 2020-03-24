import React from 'react'
import OrderTotal from './OrderTotal';
import ShippingForm from './ShippingForm';
import BillingForm from './BillingForm';

function ProductCartView() {
    return (
      <div>
          <h1>Kassa</h1>
          <OrderTotal />
          <h1>Dina uppgifter</h1>
          <BillingForm />
          <h1>Fraktsätt</h1>
          <ShippingForm />
          <h1>Betalsätt</h1>
      </div>
    );
  }

export default ProductCartView