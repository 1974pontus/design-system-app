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
          <h1>Frakt sätt</h1>
          <ShippingForm />
      </div>
    );
  }

export default ProductCartView