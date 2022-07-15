import React, { useState } from "react";
import Checkbox from "./checkbox";
import DatePickerInput from "./datePickerInput";
import CloseIcon from "../icons/CloseIcon";
import SelectInput from "./SelectInput";
import SideModalButton from "./SideModalButton";

const SideModal = () => {
  const checkboxes = [
    { id: 1, title: "Business centre" },
    { id: 2, title: "Shopping centre" },
    { id: 3, title: "Factory" },
    { id: 4, title: "Manual" },
  ];

  const datepickers = [
    { id: 1, title: "From" },
    { id: 2, title: "To" },
  ];

  const selctinputs = [
    { id: 1, title: "From" },
    { id: 2, title: "To" },
  ];

  const checkboxes2 = [
    { id: 1, title: "Avalon" },
    { id: 2, title: "Patriot" },
    { id: 3, title: "Kiev Invest" },
  ];

  return (
    <div className="sidemodal">
      <CloseIcon />
      <div className="sidemodal-header">
        <span className="filter">Filter</span>
        <span className="clean">Clean</span>
      </div>
      <span className="section-title">Scripts</span>
      <div className="industries">
        {checkboxes.map((el: any) => (
          <div key={el.id} className="industry">
            <Checkbox />
            <span className="industry-title">{el.title}</span>
          </div>
        ))}
      </div>
      <span className="section-title">Implementation period</span>
      <div className="industries">
        {datepickers.map((el: any) => (
          <div key={el.id} className="date">
            <span className="date-title">{el.title}</span>
            <DatePickerInput />
          </div>
        ))}
      </div>
      <span className="section-title">By client</span>
      <div className="industries">
        {checkboxes2.map((el: any) => (
          <div key={el.id} className="industry">
            <Checkbox />
            <span className="industry-title">{el.title}</span>
          </div>
        ))}
      </div>
      <span className="section-title">Cost</span>
      {selctinputs.map((el: any) => (
        <div key={el.id} className="date">
          <span className="date-title">{el.title}</span>
          <SelectInput />
        </div>
      ))}
      <SideModalButton />
    </div>
  );
};

export default SideModal;
