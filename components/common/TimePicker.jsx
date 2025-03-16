"use client";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

export default function TimePickerComponent({onChange}) {
  const [value, setValue] = useState(new Date());
  return (
    <DatePicker
      disableDayPicker
      value={value}
      format="hh:mm A"
      plugins={[<TimePicker hideSeconds />]}
      onChange={(value) => onChange(value.toString())}
    />
  );
}
