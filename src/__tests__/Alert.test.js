/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  test("displays an error message", () => {
    // const component = render(<Alert message="Error!" />);
    // const alertMessageNode = component.getByText("Error!");
    // expect(alertMessageNode).toBe("Error!");
    const { getByText } = render(<Alert message="Error!" />);
    expect(getByText(/Error/).textContent).toBe("Error!");
  });
});
