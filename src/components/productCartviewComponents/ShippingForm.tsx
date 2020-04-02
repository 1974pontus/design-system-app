import React from "react";
import "antd/dist/antd.css";
import { List, Avatar, Radio } from "antd";
import shippingData, { ShippingData } from "./shippingData";
import { CartConsumer } from "../../context";

interface Props {
  shippingData: ShippingData[];
}

interface State {}

class ShippingForm extends React.Component<Props, State> {
  render() {
    return (
      <CartConsumer>
        {({ setSelectedShipping, selectedShipping }) => (
          <Radio.Group
            onChange={e => setSelectedShipping(e.target.value)}
            value={selectedShipping.id}
          >
            <List
              itemLayout="horizontal"
              dataSource={shippingData}
              renderItem={item => (
                <List.Item>
                  <Radio value={item.id}></Radio>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Radio.Group>
        )}
      </CartConsumer>
    );
  }
}

export default ShippingForm;
