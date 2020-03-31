import React from "react";
import "antd/dist/antd.css";
import { List, Avatar, Radio } from "antd";
import shippingData, { ShippingData } from "../shippingData";
import { RadioChangeEvent } from "antd/lib/radio";
import RadioGroup from "antd/lib/radio/group";

interface Props {
  shippingData: ShippingData[];
}

interface State { 
  value: number
}

class ShippingForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      value: 1
    }
  }
  onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value, this.props.shippingData[0]);
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '2rem',
      lineHeight: '2rem',
    };

    return (
      <RadioGroup onChange={this.onChange} value={this.state.value} >
        <Radio style={radioStyle} value={this.props.shippingData[0]}>
          {this.state.value === 1 ? <ShippingForm shippingData={shippingData}/>: null}
        </Radio>
        <Radio style={radioStyle} value={this.props.shippingData[1]}>
        {this.state.value === 2 ? <ShippingForm shippingData={shippingData}/>: null}
        </Radio>
        <Radio style={radioStyle} value={this.props.shippingData[2]}>
        {this.state.value === 3 ? <ShippingForm shippingData={shippingData}/>: null}
        </Radio>
      </RadioGroup>
      // <div>
      //   <List
      //     itemLayout="horizontal"
      //     dataSource={this.props.shippingData}
      //     renderItem={item => (
      //       <List.Item>
      //         <Radio onChange={this.onChange} value={this.state.value}></Radio>
      //         <List.Item.Meta
      //           avatar={<Avatar src={item.avatar} />}
      //           title={<a href="https://ant.design">{item.title}</a>}
      //           description={item.description}
      //         />
      //       </List.Item>
      //     )}
      //   />
      // </div>
    );
  }
}

export default ShippingForm;
