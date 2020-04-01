import { Badge } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import React from 'react';
import { CartConsumer } from '../context';

interface Props {}

interface State {
 count: number,
 show: boolean,
}

class ShopCounter extends React.Component<Props, State> {
  state = {
    count: 1,
    show: true,
  };

  render() {
    return (

        <CartConsumer>
          {({ items })  => (
            <Badge style={{color: '#EBD497'}} count={items.length}>
              <ShoppingOutlined style={{fontSize: '1.7rem', color: 'black'}} />
            </Badge>
          )}
        </CartConsumer>
    ) 
  }
}

export default ShopCounter





  