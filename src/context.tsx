import React from 'react'
import { ProductData } from './mockAPI';

interface ProductInterface {
  product: ProductData
}

export const ProductContext = React.createContext<State>({
  
})
