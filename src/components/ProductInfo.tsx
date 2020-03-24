import { Menu, Dropdown, message, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React from 'react';

interface Props {

}

interface State {
 
}

//this gives a to the colors in dropDown
const onClick = ({ key } : {key: any}) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">Färg-1</Menu.Item>
    <Menu.Item key="2">Färg-2</Menu.Item>
    <Menu.Item key="3">Färg-3</Menu.Item>
  </Menu>
);

class ProductInfo extends React.Component<Props, State>{
    render(){
        return(
            <div>
            <Row>
                <Col span={12}>
                    <div style={{width: '12rem',height: '13rem', background: 'black', margin: '0 2rem'  }}> </div>
                </Col>
                <Col span={12}> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus consectetur repellat, tempore voluptatibus earum est sit aliquam. Reiciendis necessitatibus qui sed aspernatur saepe velit voluptas rem officiis tenetur quis.</p>
                <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Färger<DownOutlined />
                </a>
                </Dropdown>
                </Col>
            </Row>
            </div>
        )
      }  
}

export default ProductInfo


