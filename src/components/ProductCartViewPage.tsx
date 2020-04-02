import React, { CSSProperties } from "react";
import CartForm from "./productCartviewComponents/CartForm";
import ShippingForm from "./productCartviewComponents/ShippingForm";
import BillingForm from "./productCartviewComponents/BillingForm";
import { ProductData } from "../mockAPI";
import { CartConsumer } from "../context";
import TotalCartForm from "./productCartviewComponents/TotalSum";
import PaymentForm from "./productCartviewComponents/PaymentForm";
import shippingData, {
  ShippingData
} from "./productCartviewComponents/shippingData";

interface Props {
  product: ProductData;
  shippingData: ShippingData[];
}
interface State {
  phone: string;
}

class ProductCartViewPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { phone: "" };
  }

  onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    console.log(values.phone);
    this.setState({ phone: values.phone });
  };
  render() {
    return (
      <CartConsumer>
        {({ items }) => (
          <div style={checkoutWrapper}>
            <h1>Kassa</h1>
            <CartForm cartItems={items} />
            <h1>Dina uppgifter</h1>
            <BillingForm onFinish={this.onFinish} />
            <h1>Fraktsätt</h1>
            <ShippingForm shippingData={shippingData} />
            <h1>Betalsätt</h1>
            <PaymentForm phone={this.state.phone} />
            <h1>Att betala</h1>
            <TotalCartForm />
          </div>
        )}
      </CartConsumer>
    );
  }
}

export default ProductCartViewPage;

const checkoutWrapper: CSSProperties = {
  margin: "3rem"
};
