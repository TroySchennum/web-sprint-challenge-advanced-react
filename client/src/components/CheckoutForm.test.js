import React from "react";
import { render, fireEvent, findAllByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders correctly", () => {
    render(<CheckoutForm />);
  });

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm />);

    const header = getByText(/checkout form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const {  getByText, findAllByText } = render(<CheckoutForm />);
    const submitButton = getByText(/Checkout!/i);

    fireEvent.click(submitButton);
    fireEvent.click(submitButton);

    findAllByText(/You have ordered/i);
});
