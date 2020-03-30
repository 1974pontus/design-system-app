import React from "react";
import { ProductData } from "../../mockAPI";
import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton";

interface Props {
    product: (ProductData)
}

interface State {

}


class StartPageProductDisplay extends React.Component<Props, State> {

    render() {
      return ( 
        <div>

          {/* så här gör man om man vill att rätt artikel ska synas i URL */}
            <Link to={"/product-info/" + this.props.product.artNr}>   
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
