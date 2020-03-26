import { Row, Col } from "antd";
import React from "react";
import productData, { ProductData } from "../mockAPI";
import StartPageProductDisplay from "./StartPageProductDisplay"
interface Props {
  product: ProductData

}

interface State {

}

class StartPage extends React.Component<Props, State> {
  constructor(props: Props) {
  super(props)
 }

  render() {
    return (
      <div>
        <Row>
          <Col xs={{ span: 24 }} md={{ span: 20, offset: 2 }}>
            <img
              style={{
                objectFit: "cover",
                objectPosition: "50% 80%",
                height: "25rem",
                width: "100%"
              }}
              alt="bedroom with a warm yellow painted wall"
              src="https://www.auro.se/fileadmin/_processed_/csm_Varmgul_Anne_Jeppson_e0200f7f6e.jpg"
            ></img>
          </Col>
        </Row>
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
        <Row style={{ textAlign: "center", margin: "2rem"}}>
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

        <Row style={{ textAlign: "center", margin: "2rem"}} justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <StartPageProductDisplay product={productData[0]}/>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <StartPageProductDisplay product={productData[1]}/>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <StartPageProductDisplay product={productData[2]}/>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <StartPageProductDisplay product={productData[3]}/>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <StartPageProductDisplay product={productData[4]}/>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <StartPageProductDisplay product={productData[5]}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default StartPage;