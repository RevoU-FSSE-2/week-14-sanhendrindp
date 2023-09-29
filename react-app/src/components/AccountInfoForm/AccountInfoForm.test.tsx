import AccountInfoForm from ".";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("Test account info form", () => {
  test("Title render correctly", async () => {
    render(
      <BrowserRouter>
        <AccountInfoForm />
      </BrowserRouter>
    );
    const title = screen.getByText("Account Information");
    expect(title).toBeDefined();
  });

  test("Label name render correctly", async () => {
    render(
      <BrowserRouter>
        <AccountInfoForm />
      </BrowserRouter>
    );
    const title = screen.getByText("Your Name");
    expect(title).toBeDefined();
  });

  test("Label email render correctly", async () => {
    render(
      <BrowserRouter>
        <AccountInfoForm />
      </BrowserRouter>
    );
    const title = screen.getByText("Your Email");
    expect(title).toBeDefined();
  });
});
