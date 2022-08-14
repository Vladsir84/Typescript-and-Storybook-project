import React from "react";
import { render } from '@testing-library/react';
import Checkbox from "../components/SideModalComponent/checkbox";

it("renders without crashing", () => {
  render(<Checkbox />);
});