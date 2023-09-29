import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from ".";
import { BrowserRouter } from "react-router-dom";

describe("Test login form", () => {
  const mockProps = jest.fn();
  test("Title render correctly", async () => {
    render(
      <BrowserRouter>
        <LoginForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Login Page");
    expect(title).toBeDefined();
  });

  test("Label Email render correctly", async () => {
    render(
      <BrowserRouter>
        <LoginForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Email");
    expect(title).toBeDefined();
  });

  test("Label Password render correctly", async () => {
    render(
      <BrowserRouter>
        <LoginForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Password");
    expect(title).toBeDefined();
  });

  test("Button Login render correctly", async () => {
    render(
      <BrowserRouter>
        <LoginForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Login");
    expect(title).toBeDefined();
  });

  test("Button Register render correctly", async () => {
    render(
      <BrowserRouter>
        <LoginForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Register");
    expect(title).toBeDefined();
  });

  test("onSubmit for login page works correctly", async () => {
    render(
      <BrowserRouter>
        <LoginForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const emailInput = screen.getByPlaceholderText("Your email");
    const passwordInput = screen.getByPlaceholderText("Your password");
    const loginButton = screen.getByText("Login");
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();

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
