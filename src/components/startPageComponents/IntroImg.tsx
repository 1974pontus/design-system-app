import React, { CSSProperties } from "react";
import { Carousel } from 'antd';


interface Props {}

interface State {}


class IntroImg extends React.Component<Props, State> {

    render() {
      return ( 
          <div>
        <Carousel autoplay>
        <div>
        <img
          style={StartPageImage}
           src="https://www.auro.se/fileadmin/_processed_/csm_Varmgul_Anne_Jeppson_e0200f7f6e.jpg"
          alt="bedroom with a warm yellow painted wall">
          </img>
        </div>
        <div>
        <img
            style={StartPageImage}
            src="https://www.auro.se/fileadmin/filemount/miljobilder/auro/pastellbla.jpg"
            alt="bedroom with a warm yellow painted wall">
            </img>
        </div>
        <div>
        <img
            style={StartPageImage}
            src="https://www.auro.se/fileadmin/filemount/miljobilder/auro/liljevit.jpg"
            alt="bedroom with a warm yellow painted wall">
            </img>
        </div>
      </Carousel>,
        
          </div>
    )
  }
}

export default  IntroImg;

const StartPageImage: CSSProperties = {
  objectFit: "cover",
  objectPosition: "50% 20%",
  height: "28rem",
  width: "100vw",
}
