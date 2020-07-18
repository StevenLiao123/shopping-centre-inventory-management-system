import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Test <Card />", () => {
  it("test card", () => {
    const props = {
      _id: "342342rerdfs3sd",
      name: "test",
      streetName: "test-street",
      suburb: "test-suburb",
      state: "test-state",
      postCode: "test-postCode",
      callback: () => {}
    };

    const spy = jest.fn();
    const { getByTestId } = render(
      <Card {...props}/>
    );

    expect(getByTestId("test-name").textContent).toBe("Name: test");
    expect(getByTestId("test-streetName").textContent).toBe("Street Name: test-street");
    expect(getByTestId("test-suburb").textContent).toBe("Suburb: test-suburb");
    expect(getByTestId("test-state").textContent).toBe("State: test-state");
    expect(getByTestId("test-postCode").textContent).toBe("Post Code: test-postCode");
  });
});
