import React from "react";
import { render } from '@testing-library/react';
import SideModal from "../components/SideModalComponent/SideModal";

it("renders without crashing", () => {
  render(<SideModal modalHandler={function (): void {
      throw new Error("Function not implemented.");
  } } sideModalHandler={function (): void {
      throw new Error("Function not implemented.");
  } } />);
});