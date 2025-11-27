import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { test, expect } from "vitest";

test("renders hello message", () => {
  render(<App />);
  expect(screen.getByText(/hello react/i)).toBeInTheDocument();
});
