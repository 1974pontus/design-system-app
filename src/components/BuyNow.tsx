import React from 'react'
import { Button } from 'antd'
import { ProductData } from '../mockAPI'
import { CartConsumer } from '../context';


const ButtonGroup = Button.Group;

interface Props {
  product: ProductData
}

class BuyNow extends React.Component<Props> {
    
  render() {
    return (
      <CartConsumer>
        {({ getTotalPriceInclShipper }) => (
          <ButtonGroup>
            <Button onClick={() => getTotalPriceInclShipper()}>
              Slutför köp
            </Button>
          </ButtonGroup>
        )}
      </CartConsumer>
    )
  } 
}

export default BuyNow
