import React from 'react'
import { Button } from 'antd'

import { CartConsumer } from '../context';


const ButtonGroup = Button.Group;

interface Props {}

class BuyNow extends React.Component<Props> {
    
  render() {
    return (
      <CartConsumer>
        {({ getTotalPriceInclShipper }) => (
          <ButtonGroup>
            <Button type="primary" onClick={() => getTotalPriceInclShipper()}>
              Slutför köp
            </Button>
          </ButtonGroup>
        )}
      </CartConsumer>
    )
  } 
}

export default BuyNow