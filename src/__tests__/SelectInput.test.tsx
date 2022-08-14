import React from "react";
import { render } from '@testing-library/react';
import SelectInput from "../components/SideModalComponent/SelectInput";

it("renders without crashing", () => {
  render(<SelectInput />);
});