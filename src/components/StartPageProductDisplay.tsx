import React, { Component } from "react";
import { ProductData } from "../mockAPI";
import { Link } from "react-router-dom";

interface Props {
    product: (ProductData)
}

interface State {

}


class StartPageProductDisplay extends Component<Props, State> {

    render() {
      return ( 
<div>
    <Link to="/ProductInfo">   
      <img style={{ width: "10rem"}} src={this.props.product.productImg} alt={this.props.product.alt}/>
      <h3>{this.props.product.productName}</h3>
      <h3>{this.props.product.price} kr/st</h3>
    </Link> 
      <button>Lägg till i varukorg</button>
</div>
      )
    }
}

export default StartPageProductDisplay;
