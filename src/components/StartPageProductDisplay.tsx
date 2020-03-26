import React from "react";
import productData, { ProductData } from "../mockAPI";

interface Props {
    product: (ProductData)
}

interface State {

}


class StartPageProductDisplay extends React.Component<Props, State> {

    render() {
      return ( 
<div>
<img style={{ width: "10rem"}} src={this.props.product.productImg} alt={this.props.product.alt}/>
      <h3>{this.props.product.productName}</h3>
      <h3>{this.props.product.price} kr/st</h3>
      <button>KÖP</button>
</div>
      )
    }
}

export default StartPageProductDisplay;
