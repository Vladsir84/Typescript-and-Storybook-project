import React from "react";
import { render } from '@testing-library/react';
import ToggleButton from "../components/SideModalComponent/toggleButton";

it("renders without crashing", () => {
  render(<ToggleButton />);
});