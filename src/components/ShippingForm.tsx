import React, { useState, useEffect, useContext } from "react";
import "antd/dist/antd.css";
import { Radio } from "antd";
import shippingData, { ShippingData } from "../shippingData";
import ShippingFormRow from "./shippingFormRow";

import {CartContext} from "../context"

interface Props {
  shippingData: ShippingData[];
}

export default function ShippingForm(props: Props) {
  const [value, setValue] = useState(1);
  const { setSelectedShipping } = useContext(CartContext)

  const onChange = (e: any) => {
    console.log("value", e.target.value);
    
    setValue(e.target.value);
  };
  
  useEffect(() => { 
    setSelectedShipping(value - 1); // offset to 0 index
    console.log(value)
  }, [value]);

  return (
    <Radio.Group onChange={onChange} value={value} defaultValue={1}>
      <ShippingFormRow item={props.shippingData[0]}></ShippingFormRow>
      <ShippingFormRow item={props.shippingData[1]}></ShippingFormRow>
      <ShippingFormRow item={props.shippingData[2]}></ShippingFormRow>
    </Radio.Group>
  );
}