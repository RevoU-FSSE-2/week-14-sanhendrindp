import CategoryForm from ".";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Test category form", () => {
  const mockProps = jest.fn();

  test("Label name render correctly", async () => {
    render(
      <BrowserRouter>
        <CategoryForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Name");
    expect(title).toBeDefined();
  });

  test("Label status render correctly", async () => {
    render(
      <BrowserRouter>
        <CategoryForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Status");
    expect(title).toBeDefined();
  });

  test("Button submit render correctly", async () => {
    render(
      <BrowserRouter>
        <CategoryForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Submit");
    expect(title).toBeDefined();
  });

  test("Button back render correctly", async () => {
    render(
      <BrowserRouter>
        <CategoryForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Back");
    expect(title).toBeDefined();
  });

  test("Input name & status render correctly", async () => {
    render(
      <BrowserRouter>
        <CategoryForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const nameInput = screen.getByPlaceholderText("Category name");
    const statusSelect = screen.getByRole("combobox");
    expect(nameInput).toBeDefined();
    expect(statusSelect).toBeDefined();
  });

  test("onSubmit category form works correctly", async () => {
    render(
      <BrowserRouter>
        <CategoryForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const nameInput = screen.getByPlaceholderText("Category name");
    const statusSelect = screen.getByRole("combobox");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(nameInput, { target: { value: "Apple" } });
    fireEvent.change(statusSelect, { target: { value: true } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockProps).toHaveBeenCalledTimes(1);
      expect(mockProps).toHaveBeenCalledWith({
        name: "Apple",
        is_active: true,
      });
    });
  });
});
