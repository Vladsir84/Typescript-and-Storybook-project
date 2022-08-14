import React from "react";
import { render } from '@testing-library/react';
import Card from "../components/CardComponent/Card";

it("renders without crashing", () => {
  render(<Card />);
});
