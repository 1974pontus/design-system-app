import React from 'react'
import 'antd/dist/antd.css';
import { List, Avatar, Radio } from 'antd';
import postnord from '../postnord.jpeg'
import dhl from '../DHL.jpg'


const data = [
  {
    title: 'PostNord Varubrev',
    description: 'kommer när det kommer',
    avatar: postnord
  },
  {
    title: 'PostNord Ombud',
    description: 'kömmerrrr när det kommer',
    avatar: postnord
  },
  {
    title: 'DHL Ombud',
    description: 'kommer här där det kommer',
    avatar: dhl
  },
  
];

function ShippingForm() {
    return (
      <div>
        <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Radio></Radio>
        <List.Item.Meta
        avatar={<Avatar src={item.avatar} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.description}
        />
      </List.Item>
    )}
  />
      </div>
    );
  }

export default ShippingForm