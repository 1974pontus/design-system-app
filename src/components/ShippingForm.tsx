import React from "react";
import "antd/dist/antd.css";
import { List, Avatar, Radio } from "antd";
import { ShippingData } from "../shippingData";

interface Props {
  shippingData: ShippingData[]
}


function ShippingForm(props: Props) {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={props.shippingData}
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

export default ShippingForm;
