import React from 'react'
import { Button } from 'antd'
import { ProductData } from '../mockAPI'
import { CartConsumer } from '../context';


const ButtonGroup = Button.Group;

interface Props {
  product: ProductData
}

class AddToCartButton extends React.Component<Props> {
    
  render() {
    return (
      <CartConsumer>
        {({ addProductToCart }) => (
          <ButtonGroup>
            <Button onClick={() => addProductToCart(this.props.product)}>
              Lägg i varukorg
            </Button>
          </ButtonGroup>
        )}
      </CartConsumer>
    )
  } 
}

export default AddToCartButton


  