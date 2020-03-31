import React from "react";
import { Row, Col } from "antd";


interface Props {
}

interface State {
}


class FirstIntroText extends React.Component<Props, State> {

    render() {
      return ( 
        <div style={{backgroundColor: '#F1F2F5', margin:'2rem, 1rem, 0. 1rem'}}>
        <Row style={{ textAlign: "center", margin: "2rem"}}>
          <Col span={20} offset={2}>
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
        </div>
      )
    }
}

export default FirstIntroText;
