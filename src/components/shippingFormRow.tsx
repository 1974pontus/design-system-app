import React from "react";
import "antd/dist/antd.css";
import "../App.css";
import "antd/dist/antd.css";
import { List, Avatar, Radio } from "antd";
import { ShippingData } from "../shippingData";

interface Props {
    item: ShippingData
}
interface State {}

class ShippingFormRow extends React.Component<Props, State> {

    render() {
      return (
        
                  <List.Item>
                    <Radio value={this.props.item.id}></Radio>
                    <List.Item.Meta
                      avatar={<Avatar src={this.props.item.avatar} />}
                      title={<a href="https://ant.design">{this.props.item.title}</a>}
                      description={this.props.item.description}
                    />
                  </List.Item>
                
      );
    }
  }
  
  export default ShippingFormRow;


