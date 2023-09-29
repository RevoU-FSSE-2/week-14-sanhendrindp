import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterForm from ".";

describe("Test register form", () => {
  const mockProps = jest.fn();
  test("Title render correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Register Page");
    expect(title).toBeDefined();
  });

  test("Label name render correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Name");
    expect(title).toBeDefined();
  });

  test("Label email render correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Email");
    expect(title).toBeDefined();
  });

  test("Label password render correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Password");
    expect(title).toBeDefined();
  });

  test("Button register render correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Register");
    expect(title).toBeDefined();
  });

  test("Button back render correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Back");
    expect(title).toBeDefined();
  });

  test("onSubmit for register page works correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const nameInput = screen.getByPlaceholderText("Your name");
    const emailInput = screen.getByPlaceholderText("Your email");
    const passwordInput = screen.getByPlaceholderText("Your password");
    const registerButton = screen.getByText("Register");
    expect(nameInput).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();

    fireEvent.change(nameInput, { target: { value: "User" } });
    fireEvent.change(emailInput, { target: { value: "user@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "User24@awesome" } });
    fireEvent.click(registerButton);

    await waitFor(() => {
      expect(mockProps).toHaveBeenCalledTimes(1);
      expect(mockProps).toHaveBeenCalledWith({
        name: "User",
        email: "user@gmail.com",
        password: "User24@awesome",
      });
    });
  });
});
