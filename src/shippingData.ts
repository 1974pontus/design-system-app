import postnord from "./img/postnord.jpeg";
import dhl from "./img/DHL.jpg";

export interface ShippingData {
    id: number
    title: string,
    description: string,
    avatar: string,
    price: number
}


const shippingData: ShippingData[] = [
    {
      id: 1,
      title: "PostNord Varubrev",
      description: "kommer när det kommer",
      avatar: postnord,
      price: 29
    },
    {
      id: 2,
      title: "PostNord Ombud",
      description: "kömmerrrr när det kommer",
      avatar: postnord,
      price: 39
    },
    {
      id: 3,
      title: "DHL Ombud",
      description: "kommer här där det kommer",
      avatar: dhl,
      price: 0
    }
  ];
export default shippingData;