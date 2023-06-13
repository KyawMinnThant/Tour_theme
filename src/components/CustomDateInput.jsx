import React from "react";
import { DateInput } from "@mantine/dates";

function CustomDateInput() {
  const customStyles = {
    input: {
      width: "160px",
      height: "65px",
      backgroundColor: "#585d6b",
      border: "none",
      borderRadius: "0px",
    },
  };

  return <DateInput placeholder="" styles={customStyles} />;
}

export default CustomDateInput;
