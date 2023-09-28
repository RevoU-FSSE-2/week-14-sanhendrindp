// import React from "react";
import { render } from "@testing-library/react";
import LoginForm from ".";

describe("test login form", () => {
  const mockProps = () => {};
  it("title render correctly", async () => {
    render(<LoginForm onSubmit={mockProps} />);
  });
});
