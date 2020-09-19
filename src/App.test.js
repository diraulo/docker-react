import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders greeting message", () => {
  const { getByText } = render(<App />);
  const text = getByText(/Hi there/i);
  expect(text).toBeInTheDocument();
});
