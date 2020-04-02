import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Radio } from "antd";
import shippingData, { ShippingData } from "../shippingData";
import ShippingFormRow from "./shippingFormRow";

interface Props {
  shippingData: ShippingData[];
}

export default function ShippingForm(props: Props) {
  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const setSelectedShipping = (value: number) => {
   let price = shippingData[0].price
   if (value === 1) {
     price = shippingData[0].price
   } if (value === 2) {
     price = shippingData[1].price
   } if (value === 3) {
     price = shippingData[2].price
   }
   return price
 };
  

  useEffect(() => { 
    setSelectedShipping(value);
    console.log(value)
  }, [value]);

  return (
    <Radio.Group onChange={onChange} value={value}>
      <ShippingFormRow item={props.shippingData[0]}></ShippingFormRow>
      <ShippingFormRow item={props.shippingData[1]}></ShippingFormRow>
      <ShippingFormRow item={props.shippingData[2]}></ShippingFormRow>
    </Radio.Group>
  );
}