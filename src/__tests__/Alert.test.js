/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";
import "@testing-library/jest-dom";

describe("Alert", () => {
  test("displays an error message", () => {
    // const component = render(<Alert message="Error!" />);
    // const alertMessageNode = component.getByText("Error!");
    // expect(alertMessageNode).toBe("Error!");
    const { getByText } = render(<Alert message="Error!" />);
    expect(getByText(/Error/).textContent).toBe("Error!");
  });

  test("displays a success message", () => {
    const { getByText } = render(<Alert message="Success!!!" success />);

    expect(getByText(/Success/).textContent).toBe("Success!!!");
  });

  test("does not render an error or a success message if message props is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });
});
