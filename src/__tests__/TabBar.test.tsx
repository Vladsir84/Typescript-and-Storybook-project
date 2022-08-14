import React from "react";
import { render } from '@testing-library/react';
import TabBar from "../components/TabBarComponent/TabBar";

it('renders without crashing', () => {
  render(<TabBar />);
});