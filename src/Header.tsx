import React, { Component, CSSProperties } from "react";


interface Props {
}
interface State {
   
}
class Header extends Component<Props, State> {
       
 render() {
    return (
        <div style={headerWraper}>
           <h1>Mini Colorini</h1> 
        </div>
        )
    }

}

export default Header


const headerWraper: CSSProperties = {
  padding: '2rem'
}