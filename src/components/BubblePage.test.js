import React from "react";
import { getByTestId, render, screen, waitFor, cleanup } from "@testing-library/react";
import BubblePage from "./BubblePage";

afterEach(cleanup)

test("Renders BubblePage without errors", () => {
  render(<BubblePage/>)
});

// test("Fetches data and renders the bubbles on mounting", async () => {
//   render(<BubblePage/>);
//   await waitFor(expect(getByTestId('colorUL')).toBeInTheDocument())
// });

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading