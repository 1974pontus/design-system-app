import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
// import { ButtonGroupProps } from 'antd/lib/button';

const ButtonGroup = Button.Group;

interface Props {
  // BottonGrup: React.SFC<ButtonGroupProps>
  increase: () => void;
  decline: () => void;
}
interface State {
  count: number;
  show: boolean;
}

class AddingProducts extends React.Component {
  state = {
    count: 5,
    show: true
  };

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  };

  onChange = (show: boolean) => {
    this.setState({ show });
  };

  render() {
    return (
      <div>
        <div>
          <ButtonGroup>
            <Button onClick={this.decline}>
              <MinusOutlined />
            </Button>

            <Button onClick={this.increase}>
              <PlusOutlined />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default AddingProducts;
