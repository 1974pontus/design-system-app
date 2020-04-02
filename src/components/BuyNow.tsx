import React from 'react'
import { Button } from 'antd'
import { CartConsumer } from '../context';
import { Link } from 'react-router-dom';


const ButtonGroup = Button.Group;

interface Props {}

class BuyNow extends React.Component<Props> {
    
  render() {
      
    return (
         <Link to={"/order-confirmation-page"}>  
            <CartConsumer>
                {({ getTotalPriceInclShipper }) => (
                <ButtonGroup>
                    <Button type="primary" onClick={() => getTotalPriceInclShipper()}>
                    Slutför köp 
                    </Button>
                </ButtonGroup>
                )}
            </CartConsumer>
         </Link>
      
    )
  } 
}

export default BuyNow