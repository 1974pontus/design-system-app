import { Badge } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import React from 'react';

interface Props {
 
}

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
        <div>
          <Badge style={{ backgroundColor: '#52c41a' }}  count={this.state.count}>
            <ShoppingOutlined style={{fontSize: '1.7rem'}}/>
          </Badge>
        </div>
    );
    
  }
  mountNode: any
}

export default ShopCounter




  