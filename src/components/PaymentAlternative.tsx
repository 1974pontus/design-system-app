import React from 'react'
import 'antd/dist/antd.css';
import { List, Avatar, Radio } from 'antd';
import postnord from '../img/postnord.jpeg'
import dhl from '../img/DHL.jpg'


const data = [
  {
    title: 'Klarna',
    description: 'Betala sen',
    avatar: postnord
  },
  {
    title: 'Swish',
    description: 'Betala nu',
    avatar: postnord
  },
  {
    title: 'Visa/Mastercard',
    description: 'betala nu också',
    avatar: dhl
  },
  
];

function PaymentForm() {
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

export default PaymentForm