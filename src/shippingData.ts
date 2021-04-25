import postnord from "./img/postnord.jpeg";
import dhl from "./img/DHL.jpg";

export interface ShippingData {
  id: number
  alt: string
  title: string,
  description: string,
  avatar: string,
  price: number
}


const shippingData: ShippingData[] = [
  {
    id: 1,
    alt: 'PostNord Varubrev',
    title: "PostNord Varubrev",
    description: "Leverans 1-2 dagar. pris: 29kr",
    avatar: postnord,
    price: 29
  },
  {
    id: 2,
    alt: "PostNord Ombud",
    title: "PostNord Ombud",
    description: "Leverans 3-4 dagar. pris: 39kr",
    avatar: postnord,
    price: 39
  },
  {
    id: 3,
    alt: "DHL Ombud",
    title: "DHL Ombud",
    description: "Leverans 5-7-4 dagar. pris: 0kr",
    avatar: dhl,
    price: 0
  }
];
export default shippingData;