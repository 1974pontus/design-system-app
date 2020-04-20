import React from "react";
import { Button } from "antd";


const ButtonGroup = Button.Group;

interface Props {}

class BuyNowButton extends React.Component<Props> {
  state = {
    loading: false,
    iconLoading: false,
  }
  enterLoading = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 8000);
  };

  render() {
    return (
            <ButtonGroup>
              <Button type="primary" htmlType="submit" loading={this.state.loading} onClick={this.enterLoading}>
                Slutför köp
              </Button>
            </ButtonGroup>
   
    );
  }
}

export default BuyNowButton;
