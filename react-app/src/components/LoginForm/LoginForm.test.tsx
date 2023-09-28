import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from ".";
import { MemoryRouter } from "react-router-dom";

describe("Test login form", () => {
  const mockProps = jest.fn();
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

  it("onSubmit for login page works correctly", async () => {
    render(
      <MemoryRouter>
        <LoginForm onSubmit={mockProps} />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText("Your email");
    const passwordInput = screen.getByPlaceholderText("Your password");
    const loginButton = screen.getByText("Login");
    // expect(emailInput).toBeDefined();
    // expect(passwordInput).toBeDefined();

    fireEvent.change(emailInput, { target: { value: "user@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "User24@awesome" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(mockProps).toHaveBeenCalledTimes(1);
      expect(mockProps).toHaveBeenCalledWith({
        email: "user@gmail.com",
        password: "User24@awesome",
      });
    });
  });
});
