"use client";
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";

export default function DatePickerComponent({onChange}) {
  const [value, setValue] = useState(new Date());
console.log(value?.toString(), "value");  
  return <DatePicker  
   format="MMMM DD YYYY" value={value}    onChange={(value) => onChange(value.toString())} // Add parentheses to call the function
   />;
}
