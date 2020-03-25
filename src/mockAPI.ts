import sommarmalvaThumb from "./img/sommarmalvaThumb.jpg"

export interface ProductData {
    productName: string;
    artNr: string;
    productInfo: string;
    productImg: string;
    productThumbImg: string;
    colorImg: string;
    roomImg: string
    alt: string;
    size: string
    åtgång: string
    stock: string
    price: number;
}

const productData: ProductData[] = [
    {
        productName: "Sommarmalva",
        artNr: "Art. nr: 458-216",
        productInfo: "Ekologisk vattenlöslig matt tak- och väggfärg. Tål våtavtorkning och har hög täckförmåga. Färgen är biologiskt nedbrytbar och certifierat emissionsfri. Färgen framställs av växtextrakt, krita, mineraler och jordpigment, med vårt patenterade bindemedel Replebin® som består av alkohol från växter och organiska syror. För målning på både målade och omålade ytor; puts, betong, väv, tapet och gips. Färgen är vattenlöslig och kan målas på ytor tidigare målade med plastfärg (vanlig vattenburen väggfärg). Lättmålad, ger inget stänk vid målning och har ingen tendens att gulna med tiden. Färgen avger inga kemikalier efterhand och har ingen negativ påverkan på naturen. Bra för både människa och natur.",
        productImg: ("https://www.auro.se/fileadmin/_processed_/csm_458-216-vaggfarg-555-sommarmalva_8b7838588e.jpg"),
        productThumbImg: `url(${sommarmalvaThumb})`,
        colorImg: ("https://www.auro.se/fileadmin/filemount/produktbilder/farg-ytbehandling/farg/vaggfarg-555/458-216-vaggfarg-555-sommarmalva.png"),
        roomImg: ("https://www.auro.se/fileadmin/_processed_/csm_sommarmalva-matrum_2d55cec0c7.jpg"),
        size: '1 liter',
        alt: "Väggfärg Sommarmalva",
        åtgång: "Täcker ca 9 kvm",
        stock: "Tillverkas på beställning",
        price: 385,  
    },

    {
        productName: "Mörk Jade",
        artNr: "Art. nr: 458-206",
        productInfo: "Ekologisk vattenlöslig matt tak- och väggfärg. Tål våtavtorkning och har hög täckförmåga. Färgen är biologiskt nedbrytbar och certifierat emissionsfri. Färgen framställs av växtextrakt, krita, mineraler och jordpigment, med vårt patenterade bindemedel Replebin® som består av alkohol från växter och organiska syror. För målning på både målade och omålade ytor; puts, betong, väv, tapet och gips. Färgen är vattenlöslig och kan målas på ytor tidigare målade med plastfärg (vanlig vattenburen väggfärg). Lättmålad, ger inget stänk vid målning och har ingen tendens att gulna med tiden. Färgen avger inga kemikalier efterhand och har ingen negativ påverkan på naturen. Bra för både människa och natur.",
        productImg: ("https://www.auro.se/fileadmin/_processed_/csm_458-206-vaggfarg-555-mork-jade_2442c10af2.jpg"),
        productThumbImg: `url(${sommarmalvaThumb})`,
        colorImg: ("https://www.auro.se/fileadmin/filemount/produktbilder/farg-ytbehandling/farg/vaggfarg-555/458-206-vaggfarg-555-mork-jade-2.jpg"),
        roomImg: ("https://www.auro.se/fileadmin/_processed_/csm_Jade-1_6b1fa680cf.jpg"),
        size: '1 liter',
        alt: "Väggfärg Mörk Jade",
        åtgång: "Täcker ca 9 kvm",
        stock: "Tillverkas på beställning",
        price: 495,  
    },

    {
        productName: "Sandsten",
        artNr: "Art. nr: 458-131",
        productInfo: "Ekologisk vattenlöslig matt tak- och väggfärg. Tål våtavtorkning och har hög täckförmåga. Färgen är biologiskt nedbrytbar och certifierat emissionsfri. Färgen framställs av växtextrakt, krita, mineraler och jordpigment, med vårt patenterade bindemedel Replebin® som består av alkohol från växter och organiska syror. För målning på både målade och omålade ytor; puts, betong, väv, tapet och gips. Färgen är vattenlöslig och kan målas på ytor tidigare målade med plastfärg (vanlig vattenburen väggfärg). Lättmålad, ger inget stänk vid målning och har ingen tendens att gulna med tiden. Färgen avger inga kemikalier efterhand och har ingen negativ påverkan på naturen. Bra för både människa och natur.",
        productImg: ("https://www.auro.se/fileadmin/_processed_/csm_458-131-vaggfarg-555-sandsten_6112741cd5.jpg"),
        productThumbImg: `url(${sommarmalvaThumb})`,
        colorImg: ("https://www.auro.se/fileadmin/_processed_/csm_458-131-vaggfarg-555-sandsten-2_ea6ebf1c6a.png"),
        roomImg: ("https://www.auro.se/fileadmin/_processed_/csm__MG_0410_69fa6342e5.jpg"),
        size: '1 liter',
        alt: "Väggfärg Sandsten",
        åtgång: "Täcker ca 9 kvm",
        stock: "Tillverkas på beställning",
        price: 445,  
    },

    {
        productName: "Mellangrå",
        artNr: "Art. nr: 458-126",
        productInfo: "Ekologisk vattenlöslig matt tak- och väggfärg. Tål våtavtorkning och har hög täckförmåga. Färgen är biologiskt nedbrytbar och certifierat emissionsfri. Färgen framställs av växtextrakt, krita, mineraler och jordpigment, med vårt patenterade bindemedel Replebin® som består av alkohol från växter och organiska syror. För målning på både målade och omålade ytor; puts, betong, väv, tapet och gips. Färgen är vattenlöslig och kan målas på ytor tidigare målade med plastfärg (vanlig vattenburen väggfärg). Lättmålad, ger inget stänk vid målning och har ingen tendens att gulna med tiden. Färgen avger inga kemikalier efterhand och har ingen negativ påverkan på naturen. Bra för både människa och natur.",
        productImg: ("https://www.auro.se/fileadmin/filemount/produktbilder/farg-ytbehandling/farg/vaggfarg-555/458-126-vaggfarg-555-mellangra.jpg"),
        productThumbImg: `url(${sommarmalvaThumb})`,
        colorImg: ("https://www.auro.se/fileadmin/filemount/produktbilder/farg-ytbehandling/farg/vaggfarg-555/458-126-vaggfarg-555-mellangra-2.jpg"),
        roomImg: (".https://www.auro.se/fileadmin/_processed_/csm_Steel-1_3856f6161d.jpg"),
        size: '1 liter',
        alt: "Väggfärg Mellangrå",
        åtgång: "Täcker ca 9 kvm",
        stock: "Tillverkas på beställning",
        price: 445, 
    },

    {
        productName: "Turkos patricia",
        artNr: "Art. nr: 458-199",
        productInfo: "Ekologisk vattenlöslig matt tak- och väggfärg. Tål våtavtorkning och har hög täckförmåga. Färgen är biologiskt nedbrytbar och certifierat emissionsfri. Färgen framställs av växtextrakt, krita, mineraler och jordpigment, med vårt patenterade bindemedel Replebin® som består av alkohol från växter och organiska syror. För målning på både målade och omålade ytor; puts, betong, väv, tapet och gips. Färgen är vattenlöslig och kan målas på ytor tidigare målade med plastfärg (vanlig vattenburen väggfärg). Lättmålad, ger inget stänk vid målning och har ingen tendens att gulna med tiden. Färgen avger inga kemikalier efterhand och har ingen negativ påverkan på naturen. Bra för både människa och natur.",
        productImg: ("https://www.auro.se/fileadmin/filemount/produktbilder/farg-ytbehandling/farg/vaggfarg-555/458-196-vaggfarg-555-turkos-patricia.jpg"),
        productThumbImg: `url(${sommarmalvaThumb})`,
        colorImg: ("https://www.auro.se/fileadmin/filemount/produktbilder/farg-ytbehandling/farg/vaggfarg-555/458-196-vaggfarg-555-turkos-patricia-2.jpg"),
        roomImg: (".https://www.auro.se/fileadmin/_processed_/csm_turkos-patricia_488d48829e.jpg"),
        size: '1 liter',
        alt: "Väggfärg Turkos Patricia",
        åtgång: "Täcker ca 9 kvm",
        stock: "Tillverkas på beställning",
        price: 445, 
    },

    {
        productName: "Marmorvit",
        artNr: "Art. nr: 458-101",
        productInfo: "Ekologisk vattenlöslig matt tak- och väggfärg. Tål våtavtorkning och har hög täckförmåga. Färgen är biologiskt nedbrytbar och certifierat emissionsfri. Färgen framställs av växtextrakt, krita, mineraler och jordpigment, med vårt patenterade bindemedel Replebin® som består av alkohol från växter och organiska syror. För målning på både målade och omålade ytor; puts, betong, väv, tapet och gips. Färgen är vattenlöslig och kan målas på ytor tidigare målade med plastfärg (vanlig vattenburen väggfärg). Lättmålad, ger inget stänk vid målning och har ingen tendens att gulna med tiden. Färgen avger inga kemikalier efterhand och har ingen negativ påverkan på naturen. Bra för både människa och natur.",
        productImg: ("https://www.auro.se/fileadmin/_processed_/csm_458-101-vaggfarg-555-marmorvit_a848138c12.jpg"),
        productThumbImg: `url(${sommarmalvaThumb})`,
        colorImg: ("https://www.auro.se/fileadmin/_processed_/csm_458-101-vaggfarg-555-marmorvit-2_a6668cce34.jpg"),
        roomImg: ("https://www.auro.se/fileadmin/_processed_/csm_IMG_4726-kopia_dd51c87c4f.jpg"),
        size: '1 liter',
        alt: "Väggfärg Marmorvit",
        åtgång: "Täcker ca 9 kvm",
        stock: "Tillverkas på beställning",
        price: 385, 
    },


]

export default productData;


