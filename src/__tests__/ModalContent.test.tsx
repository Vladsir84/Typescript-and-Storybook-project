import React from "react";
import { render } from '@testing-library/react';
import ModalContent from "../components/ModalComponent/ModalContent";

it("renders without crashing", () => {
  render(<ModalContent modalHandler={function (): void {
      throw new Error("Function not implemented.");
  } } /> );
});
