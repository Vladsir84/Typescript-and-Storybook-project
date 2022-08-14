import React from "react";
import { render } from '@testing-library/react';
import SideModalButton from "../components/SideModalComponent/SideModalButton";

it('renders without crashing', () => {
  render(<SideModalButton modalHandler={function (): void {
      throw new Error("Function not implemented.");
  } } />);
});