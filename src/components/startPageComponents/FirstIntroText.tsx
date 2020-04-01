import React from "react";
import { Row, Col } from "antd";


interface Props {}

interface State {}


class FirstIntroText extends React.Component<Props, State> {

    render() {
      return ( 
        <div style={{backgroundColor: '#F3F3F3', padding:'3rem 1rem 3rem 1rem'}}>
          <Row style={{ textAlign: "center", margin: "2rem"}}>
            <Col xs={{ span: 24 }} md={{ span: 20, offset: 2 }}>    
              Mini Colorini är tillverkare av ekologiska färger och
              ytbehandlingar. Vi utvecklar, producerar och levererar ekologisk
              färg och ytbehandlingsprodukter med ett genomgående
              hållbarhetsperspektiv och certifierad koldioxidneutral tillverkning.
              Färgen framställs av biologiskt nedbrytbarbra råvaror: växtextrakt,
              krita, mineraler och jordpigment är komposterbara och har ingen
              negativ miljöpåverkan. Certifierat VOC-fri. Resultatet ger förutom
              en matt yta med fantastisk lyster också en giftfri miljö, för både
              dig och din omvärld.
            </Col>
          </Row>

          <Row style={{ textAlign: "center", margin: "2rem"}}>
            <Col xs={{ span: 24 }} md={{ span: 20, offset: 2 }}>    
              Vår färgskalan bygger på gamla tiders färgsättning och är framtagen
              med äldre tapeter som förlagor, från sent 1800-tal till senfunkis.
              Kulörer med naturliga pigment i milda till medelmörka färger. Med
              den lilla nedtoningeni nyanserna som behövs för att väggarna ska
              kunna målas i en tydlig kulör utan att bli grälla. Sätt igång, måla
              vad du vill, väggar och tak, barnens rum, skafferi eller garage, med
              en modern ekologisk färg.
            </Col>
          </Row>
        </div>
      )
    }
}

export default FirstIntroText;
