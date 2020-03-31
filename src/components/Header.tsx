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
                    <Col span={24}> <h1 style={h1}>Mini Colorini </h1> </Col> 
                </Link> 

                <Link to="/checkout" style={{position: 'fixed', right: '1rem'}}> 
                    <Col span={12}> <ShopCounter /> </Col>
                </Link>

                
                    {/* <h2 style={{ position: 'fixed', top: 30 }}>Scroll {this.state.isTop ? 'down' : 'up'}!</h2> */}
            </nav>
            
    
        )
    }

}

export default Header


const headerWraper: CSSProperties = {
  padding: '2rem',
  display: 'flex',
  justifyContent: 'space-between',
  //TODO--- fixa så att dom är centrerade verticalt
}

const h1: CSSProperties = {
    fontSize: '1.5rem'
  }



