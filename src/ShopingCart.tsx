import React, { Component, CSSProperties } from "react";
import ShopCounter from "./ShopCounter";


interface Props {
}
interface State {
   
}
class ShopingCart extends Component<Props, State> {
       
 render() {
    return (
        <div style={ShopingCardWraper}>
            <ShopCounter /> 
        </div>
        )
    }

}

export default ShopingCart


const ShopingCardWraper: CSSProperties = {
  padding: '2rem'
}