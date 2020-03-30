import React from "react";
import { Row, Col } from "antd";


interface Props {
}

interface State {
}


class SecondIntroText extends React.Component<Props, State> {

    render() {
      return ( 
        <Row style={{ textAlign: "center", margin: "2rem" }}>
          <Col span={20} offset={2}>
          Vår färgskalan bygger på gamla tiders färgsättning och är framtagen
        med äldre tapeter som förlagor, från sent 1800-tal till senfunkis.
        Kulörer med naturliga pigment i milda till medelmörka färger. Med
        den lilla nedtoningeni nyanserna som behövs för att väggarna ska
        kunna målas i en tydlig kulör utan att bli grälla. Sätt igång, måla
        vad du vill, väggar och tak, barnens rum, skafferi eller garage, med
        en modern ekologisk färg.
          </Col>
        </Row>
       
      )
    }
}

export default SecondIntroText;