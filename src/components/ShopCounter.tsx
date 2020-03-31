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
            <Badge style={{ height: '200vh', backgroundColor: '#52c41a', position: 'fixed' }}  count={items.length} >
              <ShoppingOutlined style={{fontSize: '1.7rem'}}/>
            </Badge>
          )}
        </CartConsumer>
    ) 
  }
}

export default ShopCounter





  