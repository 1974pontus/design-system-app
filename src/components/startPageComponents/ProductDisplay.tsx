import React, { Component } from "react";
import { ProductData } from "../../mockAPI";
import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton";

interface Props {
    product: (ProductData)
}

interface State {

}


class StartPageProductDisplay extends Component<Props, State> {

    render() {
      return ( 
        <div style={{padding: '1.5rem 1.5rem 2rem 1.5rem'}}>

          {/* så här gör man om man vill att rätt artikel ska synas i URL */}
            <Link to={"/product-info/" + this.props.product.artNr} style={{background:'white'}}>   
              <img style={{ width: "10rem"}} src={this.props.product.productImg} alt={this.props.product.alt}/>
              <h3>{this.props.product.productName}</h3>
              <h3>{this.props.product.price} kr/st</h3>
            </Link> 
            <AddToCartButton product={this.props.product} />
        </div>
      )
    }
}

export default StartPageProductDisplay;
