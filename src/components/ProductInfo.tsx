import { Row, Col, Button } from 'antd';
import React from 'react';

interface Props {
    
}

interface State {
 
}

class ProductInfo extends React.Component<Props, State>{
    render(){
        return(
            <div>
            <Row>
                <Col span={12}>
                    <div style={{width: '12rem',height: '13rem', background: 'black', margin: '0 2rem'  }}> </div>
                </Col>

                <Col span={12}> 
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus consectetur repellat, tempore voluptatibus earum est sit aliquam. Reiciendis necessitatibus qui sed aspernatur saepe velit voluptas rem officiis tenetur quis.</p>
                    <h3>Pris</h3>
                <Button block>Lägg i varukorg</Button>
                <Col span={6}> 
                
                </Col>
                
                  
          
                </Col>
            </Row>
            </div>
        )
      }  
}

export default ProductInfo


