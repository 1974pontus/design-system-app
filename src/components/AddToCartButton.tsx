import React, { CSSProperties } from 'react'
// import { Link } from 'react-router-dom'
import { Button } from 'antd'
// import { PlusOutlined } from '@ant-design/icons';
import { ProductData } from '../mockAPI'


const ButtonGroup = Button.Group;
// increase: ((event: MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;

interface Props {
     Product: (ProductData)
     
  }

interface State {
    count: number,
    show: boolean,
}

class AddToCartButton extends React.Component<Props, State> {
    increase = () => {
        const count = this.state.count + 1;
        this.setState({ count });
        this.props.Product
        console.log(count)
      };
    
      onChange = (show: boolean) => {
        this.setState({ show });
        
      };

    state = {
        count: 1,
        show: true,
      };
    
    
    render(){
        return(
            <div>
            {/* <Link to="/OrderTotal">
            </Link>  */}
               
               <ButtonGroup>
                 <Button onClick={this.increase}>
                  Lägg i varukorg
                 </Button>
               </ButtonGroup>
             </div>

        )
      } 
    }

export default AddToCartButton


  