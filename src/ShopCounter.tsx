import { Badge } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import React from 'react';


class ShopCounter extends React.Component {
  state = {
    count: 5,
    show: true,
  };

  onChange = (show: boolean) => {
    this.setState({ show });
  };

  render() {
    return (
      <div>
        <div>
          <Badge style={{ backgroundColor: '#52c41a' }} count={this.state.count}>
            <ShoppingOutlined style={{fontSize: '1.7rem'}}/>
          </Badge>
        </div>
      </div>
    );
    
  }
  mountNode: any
}

export default ShopCounter