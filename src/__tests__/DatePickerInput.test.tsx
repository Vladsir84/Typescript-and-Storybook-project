import React from "react";
import { render } from '@testing-library/react';
import DatePickerInput from "../components/SideModalComponent/datePickerInput";

it("renders without crashing", () => {
  render(<DatePickerInput />);
});