import postnord from "../../img/postnord.jpeg";
import dhl from "../../img/DHL.jpg";

export interface ShippingData {
  id: number;
  alt: string;
  title: string;
  description: string;
  avatar: string;
  price: number;
}

const shippingData: ShippingData[] = [
  {
    id: 1,
    alt: "PostNord Varubrev",
    title: "PostNord Varubrev",
    description: "kommer när det kommer",
    avatar: postnord,
    price: 29
  },
  {
    id: 2,
    alt: "PostNord Ombud",
    title: "PostNord Ombud",
    description: "kömmerrrr när det kommer",
    avatar: postnord,
    price: 39
  },
  {
    id: 3,
    alt: "DHL Ombud",
    title: "DHL Ombud",
    description: "kommer här där det kommer",
    avatar: dhl,
    price: 0
  }
];
export default shippingData;
