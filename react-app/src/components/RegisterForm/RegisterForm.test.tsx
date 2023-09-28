import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RegisterForm from ".";

describe("Test register form", () => {
  const mockProps = jest.fn();
  it("Title render correctly", async () => {
    render(
      <MemoryRouter>
        <RegisterForm onSubmit={mockProps} />
      </MemoryRouter>
    );
    const title = screen.getByText("Register Page");
    expect(title).toBeDefined();
  });

  it("Label Name render correctly", async () => {
    render(
      <MemoryRouter>
        <RegisterForm onSubmit={mockProps} />
      </MemoryRouter>
    );
    const title = screen.getByText("Name");
    expect(title).toBeDefined();
  });

  it("Label Email render correctly", async () => {
    render(
      <MemoryRouter>
        <RegisterForm onSubmit={mockProps} />
      </MemoryRouter>
    );
    const title = screen.getByText("Email");
    expect(title).toBeDefined();
  });

  it("Label Password render correctly", async () => {
    render(
      <MemoryRouter>
        <RegisterForm onSubmit={mockProps} />
      </MemoryRouter>
    );
    const title = screen.getByText("Password");
    expect(title).toBeDefined();
  });

  it("Button Register render correctly", async () => {
    render(
      <MemoryRouter>
        <RegisterForm onSubmit={mockProps} />
      </MemoryRouter>
    );
    const title = screen.getByText("Register");
    expect(title).toBeDefined();
  });

  it("Button Back render correctly", async () => {
    render(
      <MemoryRouter>
        <RegisterForm onSubmit={mockProps} />
      </MemoryRouter>
    );
    const title = screen.getByText("Back");
    expect(title).toBeDefined();
  });

  it("onSubmit for register page works correctly", async () => {
    render(
      <MemoryRouter>
        <RegisterForm onSubmit={mockProps} />
      </MemoryRouter>
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
