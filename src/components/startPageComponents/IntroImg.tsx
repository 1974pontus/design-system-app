import React, { CSSProperties } from "react";
import { Row, Col } from "antd";

interface Props {}

interface State {}


class IntroImg extends React.Component<Props, State> {

    render() {
      return ( 
        <div>
          <img
          style={StartPageImage}
          // src="https://www.auro.se/fileadmin/_processed_/csm_Varmgul_Anne_Jeppson_e0200f7f6e.jpg"
           src="https://www.auro.se/fileadmin/filemount/miljobilder/auro/pastellbla.jpg"
          // src="https://www.auro.se/fileadmin/filemount/miljobilder/auro/liljevit.jpg"
          alt="bedroom with a warm yellow painted wall">
          </img>
        </div>
    )
  }
}

export default  IntroImg;

const StartPageImage: CSSProperties = {
  objectFit: "cover",
  objectPosition: "50% 20%",
  height: "25rem",
  width: "100vw",
}
