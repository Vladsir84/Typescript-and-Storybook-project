import React, { useState } from "react";
import Select from "react-select";

const SelectInput = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: "0",
    label: "0",
  });

  const customStyles = {
    input: (provided: any) => ({
      ...provided,
      height: '40px',
    }),
    singleValue: (provided: any) => {
      const opacity = 0.5 ;
      return { ...provided, opacity };
    },
  };

  const options = [
    { value: "0", label: "0" },
    { value: "1000", label: "1000" },
    { value: "10000", label: "10000" },
    { value: "100000", label: "100000" },
    { value: "1000000", label: "1000000" },
    { value: "10000000", label: "10000000" },
    { value: "100000000", label: "100000000" },
  ];

  // type options = { label: string; value: string };

  // const handleSelectionChange = (option: options | null) => {
  //   if (option) {
  //     setSelectedOption(option);
  //   }
  // };

  return (
    <div style={{ width: "190px", marginRight: "80px" }}>
      <Select
        styles={customStyles}
        defaultValue={selectedOption}
        // onChange={handleSelectionChange}
        options={options}
      />
    </div>
  );
};

export default SelectInput;
