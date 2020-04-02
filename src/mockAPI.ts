
import { CSSProperties } from "react"

export interface ProductData {
    productName: string;
    artNr?: string;
    productInfo?: string;
    size?: string
    consumption?: string
    stock?: string
    price: number;
    productImg: string;
    colorImg?: string;
    roomImg?: string;
    alt: string;
    style?: CSSProperties;
}

const productData: ProductData[] = [
    {
        productName: "Marmorvit",
        artNr: "Art. nr: 458-101",
        productInfo: "Ekologisk vattenlöslig matt tak- och väggfärg. Tål våtavtorkning och har hög täckförmåga. Färgen är biologiskt nedbrytbar och certifierat emissionsfri. Färgen framställs av växtextrakt, krita, mineraler och jordpigment, med vårt patenterade bindemedel Replebin® som består av alkohol från växter och organiska syror. För målning på både målade och omålade ytor; puts, betong, väv, tapet och gips. Färgen är vattenlöslig och kan målas på ytor tidigare målade med plastfärg (vanlig vattenburen väggfärg). Lättmålad, ger inget stänk vid målning och har ingen tendens att gulna med tiden. Färgen avger inga kemikalier efterhand och har ingen negativ påverkan på naturen. Bra för både människa och natur.",
        size: '1 liter',
        consumption: "Täcker ca 9 kvm",
        stock: "Tillverkas på beställning",
        price: 385, 
        productImg: ("https://www.auro.se/fileadmin/_processed_/csm_458-101-vaggfarg-555-marmorvit_a848138c12.jpg"),
        colorImg: ("https://www.auro.se/fileadmin/_processed_/csm_458-101-vaggfarg-555-marmorvit-2_a6668cce34.jpg"),
        roomImg: ("https://www.auro.se/fileadmin/_processed_/csm_IMG_4726-kopia_dd51c87c4f.jpg"),
        alt: "Väggfärg Marmorvit",
        style: {
            background: '#F3F3F3',
          },
    },

    {
        productName: "Sandsten",
        artNr: "Art. nr: 458-131",
        productInfo: "Ekologisk vattenlöslig matt tak- och väggfärg. Tål våtavtorkning och har hög täckförmåga. Färgen är biologiskt nedbrytbar och certifierat emissionsfri. Färgen framställs av växtextrakt, krita, mineraler och jordpigment, med vårt patenterade bindemedel Replebin® som består av alkohol från växter och organiska syror. För målning på både målade och omålade ytor; puts, betong, väv, tapet och gips. Färgen är vattenlöslig och kan målas på ytor tidigare målade med plastfärg (vanlig vattenburen väggfärg). Lättmålad, ger inget stänk vid målning och har ingen tendens att gulna med tiden. Färgen avger inga kemikalier efterhand och har ingen negativ påverkan på naturen. Bra för både människa och natur.",
        size: '1 liter',
        consumption: "Täcker ca 9 kvm",
        stock: "Tillverkas på beställning",
        price: 445, 
        productImg: ("https://www.auro.se/fileadmin/_processed_/csm_458-131-vaggfarg-555-sandsten_6112741cd5.jpg"),
        colorImg: ("https://www.auro.se/fileadmin/_processed_/csm_458-131-vaggfarg-555-sandsten-2_ea6ebf1c6a.png"),
        roomImg: ("https://www.auro.se/fileadmin/_processed_/csm__MG_0410_69fa6342e5.jpg"),
        alt: "Väggfärg Sandsten",
        style: {
            background: '#CFC8BD',
          },
    },

    {
        productName: "Mellangrå",
        artNr: "Art. nr: 458-126",
        productInfo: "Ekologisk vattenlöslig matt tak- och väggfärg. Tål våtavtorkning och har hög täckförmåga. Färgen är biologiskt nedbrytbar och certifierat emissionsfri. Färgen framställs av växtextrakt, krita, mineraler och jordpigment, med vårt patenterade bindemedel Replebin® som består av alkohol från växter och organiska syror. För målning på både målade och omålade ytor; puts, betong, väv, tapet och gips. Färgen är vattenlöslig och kan målas på ytor tidigare målade med plastfärg (vanlig vattenburen väggfärg). Lättmålad, ger inget stänk vid målning och har ingen tendens att gulna med tiden. Färgen avger inga kemikalier efterhand och har ingen negativ påverkan på naturen. Bra för både människa och natur.",
        size: '1 liter',
        consumption: "Täcker ca 9 kvm",
        stock: "Tillverkas på beställning",
        price: 445, 
        productImg: ("https://www.auro.se/fileadmin/filemount/produktbilder/farg-ytbehandling/farg/vaggfarg-555/458-126-vaggfarg-555-mellangra.jpg"),
        colorImg: ("https://www.auro.se/fileadmin/filemount/produktbilder/farg-ytbehandling/farg/vaggfarg-555/458-126-vaggfarg-555-mellangra-2.jpg"),
        roomImg: ("https://www.auro.se/fileadmin/_processed_/csm_Steel-1_3856f6161d.jpg"),
        alt: "Väggfärg Mellangrå",
        style: {
            background: '#AFB3B6',
          },
    },

    {
        productName: "Varmgul",
        artNr: "Art. nr: 458-181",
        productInfo: "Ekologisk vattenlöslig matt tak- och väggfärg. Tål våtavtorkning och har hög täckförmåga. Färgen är biologiskt nedbrytbar och certifierat emissionsfri. Färgen framställs av växtextrakt, krita, mineraler och jordpigment, med vårt patenterade bindemedel Replebin® som består av alkohol från växter och organiska syror. För målning på både målade och omålade ytor; puts, betong, väv, tapet och gips. Färgen är vattenlöslig och kan målas på ytor tidigare målade med plastfärg (vanlig vattenburen väggfärg). Lättmålad, ger inget stänk vid målning och har ingen tendens att gulna med tiden. Färgen avger inga kemikalier efterhand och har ingen negativ påverkan på naturen. Bra för både människa och natur.",
        size: '1 liter',
        consumption: "Täcker ca 9 kvm",
        stock: "Tillverkas på beställning",
        price: 445,
        productImg: ("https://www.auro.se/fileadmin/filemount/produktbilder/farg-ytbehandling/farg/vaggfarg-555/458-181-vaggfarg-555-varmgul.jpg"),
        colorImg: ("https://www.auro.se/fileadmin/_processed_/csm_458-181-vaggfarg-555-varmgul-2_ae15390422.png"),
        roomImg: ("https://i.pinimg.com/564x/19/1b/1f/191b1fabac1ef624a166957c22e5c035.jpg"),
        alt: "Väggfärg Varmgul",
        style: {
            background:  '#EBD497'
          },
    },



    {
        productName: "Turkos patricia",
        artNr: "Art. nr: 458-199",
        productInfo: "Ekologisk vattenlöslig matt tak- och väggfärg. Tål våtavtorkning och har hög täckförmåga. Färgen är biologiskt nedbrytbar och certifierat emissionsfri. Färgen framställs av växtextrakt, krita, mineraler och jordpigment, med vårt patenterade bindemedel Replebin® som består av alkohol från växter och organiska syror. För målning på både målade och omålade ytor; puts, betong, väv, tapet och gips. Färgen är vattenlöslig och kan målas på ytor tidigare målade med plastfärg (vanlig vattenburen väggfärg). Lättmålad, ger inget stänk vid målning och har ingen tendens att gulna med tiden. Färgen avger inga kemikalier efterhand och har ingen negativ påverkan på naturen. Bra för både människa och natur.",
        size: '1 liter',
        consumption: "Täcker ca 9 kvm",
        stock: "Tillverkas på beställning",
        price: 445, 
        productImg: ("https://www.auro.se/fileadmin/filemount/produktbilder/farg-ytbehandling/farg/vaggfarg-555/458-196-vaggfarg-555-turkos-patricia.jpg"),
        colorImg: ("https://www.auro.se/fileadmin/filemount/produktbilder/farg-ytbehandling/farg/vaggfarg-555/458-196-vaggfarg-555-turkos-patricia-2.jpg"),
        roomImg: ("https://www.auro.se/fileadmin/_processed_/csm_turkos-patricia_488d48829e.jpg"),
        alt: "Väggfärg Turkos Patricia",
        style: {
            background:  '#AFB5AE'
          },
    },

    
    
    {
        productName: "Mörk Jade",
        artNr: "Art. nr: 458-206",
        productInfo: "Ekologisk vattenlöslig matt tak- och väggfärg. Tål våtavtorkning och har hög täckförmåga. Färgen är biologiskt nedbrytbar och certifierat emissionsfri. Färgen framställs av växtextrakt, krita, mineraler och jordpigment, med vårt patenterade bindemedel Replebin® som består av alkohol från växter och organiska syror. För målning på både målade och omålade ytor; puts, betong, väv, tapet och gips. Färgen är vattenlöslig och kan målas på ytor tidigare målade med plastfärg (vanlig vattenburen väggfärg). Lättmålad, ger inget stänk vid målning och har ingen tendens att gulna med tiden. Färgen avger inga kemikalier efterhand och har ingen negativ påverkan på naturen. Bra för både människa och natur.",
        size: '1 liter',
        consumption: "Täcker ca 9 kvm",
        stock: "Tillverkas på beställning",
        price: 495,  
        productImg: ("https://www.auro.se/fileadmin/_processed_/csm_458-206-vaggfarg-555-mork-jade_2442c10af2.jpg"),
        colorImg: ("https://www.auro.se/fileadmin/filemount/produktbilder/farg-ytbehandling/farg/vaggfarg-555/458-206-vaggfarg-555-mork-jade-2.jpg"),
        roomImg: ("https://www.auro.se/fileadmin/_processed_/csm_Jade-1_6b1fa680cf.jpg"),
        alt: "Väggfärg Mörk Jade",
        style: {
            background:  '#7A9290'
          },
    },

    

]

export default productData;


