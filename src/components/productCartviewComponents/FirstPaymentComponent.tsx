import React from "react";
import { Input } from 'antd';
interface Props {

}

interface State {

}

class FirstPaymentComponent extends React.Component<Props, State> {
  render() {
    return (
        <Input
        placeholder="hej"
        suffix="V"
      />
    );
  }
}

export default FirstPaymentComponent;