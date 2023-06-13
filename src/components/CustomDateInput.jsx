import React from "react";
import { DateInput } from "@mantine/dates";

function CustomDateInput() {
  const customStyles = {
    input: {
      width: "160px",
      height: "65px",
      backgroundColor: "#f0f0f0",
      border: "1px solid #ccc",
    },
  };

  return <DateInput placeholder="" styles={customStyles} />;
}

export default CustomDateInput;
