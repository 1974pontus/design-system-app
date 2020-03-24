import React, { Component, CSSProperties } from "react";
import { Col} from "antd";
import { Link } from "react-router-dom";
import ShopCounter from "./ShopCounter";


interface Props {
}
interface State {
   
}
class Header extends Component<Props, State> {
       
 render() {
    return (
        //the links in this are the nav and are placed in MainLayout as <Header />
            <nav style={headerWraper}>
                <Link to="/">  
                    <Col span={12}> <h1>Mini Colorini</h1> </Col> 
                </Link> 

                <Link to="/OrderTotal"> 
                    <Col span={12}> <ShopCounter />  </Col>
                </Link>
            </nav>
    
        )
    }

}

export default Header


const headerWraper: CSSProperties = {
  padding: '2rem',
  display: 'flex',
  justifyContent: 'space-between'
  //TODO--- fixa så att dom är centrerade verticalt
}


