// import React from "react";
import { render, screen } from "@testing-library/react";
import LoginForm from ".";
import { MemoryRouter } from "react-router-dom";

describe("Test login form", () => {
  const mockProps = () => {};
  it("Title render correctly", async () => {
    render(
      <MemoryRouter>
        <LoginForm onSubmit={mockProps} />
      </MemoryRouter>
    );
    const title = screen.getByText("Login Page");
    expect(title).toBeDefined();
  });

  it("Label Email render correctly", async () => {
    render(
      <MemoryRouter>
        <LoginForm onSubmit={mockProps} />
      </MemoryRouter>
    );
    const title = screen.getByText("Email");
    expect(title).toBeDefined();
  });

  it("Label Password render correctly", async () => {
    render(
      <MemoryRouter>
        <LoginForm onSubmit={mockProps} />
      </MemoryRouter>
    );
    const title = screen.getByText("Password");
    expect(title).toBeDefined();
  });

  it("Button Login render correctly", async () => {
    render(
      <MemoryRouter>
        <LoginForm onSubmit={mockProps} />
      </MemoryRouter>
    );
    const title = screen.getByText("Login");
    expect(title).toBeDefined();
  });

  it("Button Register render correctly", async () => {
    render(
      <MemoryRouter>
        <LoginForm onSubmit={mockProps} />
      </MemoryRouter>
    );
    const title = screen.getByText("Register");
    expect(title).toBeDefined();
  });
});
