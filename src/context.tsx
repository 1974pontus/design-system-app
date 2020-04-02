import React from "react";
import { ProductData } from "./mockAPI";
import shippingData, { ShippingData } from "./shippingData";

export interface CartItem {
  product: ProductData;
  quantity: number;
}

interface CartProps {}

interface CartState {
  items: CartItem[];
  selectedShipping: ShippingData;
  getTotalPriceInclShipper: () => number;
  addProductToCart: (product: ProductData) => void;
  deleteCartItemRow: (product: ProductData) => void;
  deleteProductFromCart: (product: ProductData) => void;
  getTotalPrice: () => number;
}

const CartContext = React.createContext<CartState>({
  items: [],
  selectedShipping: shippingData[0],
  getTotalPriceInclShipper: () => 0,
  addProductToCart: (product: ProductData) => {},
  deleteCartItemRow: (product: ProductData) => {},
  deleteProductFromCart: (product: ProductData) => {},
  getTotalPrice: () => 0,
});

// CartProvider ansvarar för att uppdatera kundvagnen
export class CartProvider extends React.Component<CartProps, CartState> {
  constructor(props: CartProps) {
    super(props);

    this.state = {
      items: [],
      selectedShipping: shippingData[0],
      getTotalPriceInclShipper: this.getTotalPriceInclShipper,
      addProductToCart: this.addProductToCart,
      deleteProductFromCart: this.deleteProductFromCart,
      deleteCartItemRow: this.deleteCartItemRow,
      getTotalPrice: this.getTotalPrice,
    };
  }

  addProductToCart = (product: ProductData) => {
    // Clone to state array so that we don't mutate the state (which is prohibited in React)
    const clonedItems: CartItem[] = Object.assign([], this.state.items);

    // Check if product is already in cart and increase the quantity
    for (const item of clonedItems) {
      if (product.artNr === item.product.artNr) {
        item.quantity++;
        this.setState({ items: clonedItems });
        return;
      }
    }

    // Otherwise add a whole new cart item
    clonedItems.push({ product, quantity: 1 });
    this.setState({ items: clonedItems });
  };

  deleteProductFromCart = (product: ProductData) => {
    //alert('delete product')
    const clonedItems: CartItem[] = Object.assign([], this.state.items);
    // update state
    for (const item of clonedItems) {
      if (product.artNr === item.product.artNr) {
        this.setState({ items: clonedItems });
        return item.quantity ? item.quantity-- : item.quantity <= 0;
      }
    }
    this.setState({ items: clonedItems });
  };

  deleteCartItemRow = (product: ProductData) => {
    // Clone to state array so that we don't mutate the state (which is prohibited in React)
    const clonedItems: CartItem[] = Object.assign([], this.state.items);

    const indexOfRow = clonedItems.findIndex(
      item => product.artNr === item.product.artNr
    );
    if (indexOfRow !== -1) {
      clonedItems.splice(indexOfRow, 1);
      this.setState({ items: clonedItems });
    }
  };

  getTotalPrice = () => {
    let sum = 0;
    for (const item of this.state.items) {
      sum += item.product.price * item.quantity;
    }
    return sum;
  };

  getTotalPriceInclShipper = () => {
    return this.getTotalPrice() + this.state.selectedShipping.price;
  };


  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export const CartConsumer = CartContext.Consumer;
