import React from "react";
import { Button } from "antd";


const ButtonGroup = Button.Group;

interface Props {}

class BuyNowButton extends React.Component<Props> {
  render() {
    return (
            <ButtonGroup>
              <Button type="primary" htmlType="submit">
                Slutför köp
              </Button>
            </ButtonGroup>
   
    );
  }
}

export default BuyNowButton;
