// import React from "react";
import { render } from "@testing-library/react";
import LoginForm from ".";
import { MemoryRouter } from "react-router-dom";

describe("test login form", () => {
  const mockProps = () => {};
  it("title render correctly", async () => {
    render(
      <MemoryRouter>
        <LoginForm onSubmit={mockProps} />
      </MemoryRouter>
    );
  });
});
