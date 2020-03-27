import React from 'react'
import { ProductData } from './mockAPI'

interface CartItem {
  product: ProductData
  quantity: number
}

interface CartProps {}

interface CartState {
  items: CartItem[]
  addProductToCart: (product: ProductData) => void
  deleteProductFromCart: (product: ProductData) => void
}

const CartContext = React.createContext<CartState>({
  items: [],
  addProductToCart: (product: ProductData) => {},
  deleteProductFromCart: (product: ProductData) => {},
})

export class CartProvider extends React.Component<CartProps, CartState> {
  constructor(props: CartProps) {
    super(props)

    this.state = {
      items: [],
      addProductToCart: this.addProductToCart,
      deleteProductFromCart: this.deleteProductFromCart
    }
  }

  addProductToCart = (product: ProductData) => {
    alert('add product' + product.productName)
    // update state
  }
  deleteProductFromCart = (product: ProductData) => {
    alert('delete product' + product.productName)
    // update state
  }

  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}

export const CartConsumer = CartContext.Consumer