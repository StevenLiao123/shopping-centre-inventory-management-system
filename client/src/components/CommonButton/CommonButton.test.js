import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CommonButton } from "./CommonButton";

describe("Test <Button />", () => {
  it("test button", () => {
    const props = {
      title: "Test button"
    };

    const spy = jest.fn();
    const { getByTestId } = render(
      <CommonButton
        title={props.title}
        callback={spy}
      />
    );

    expect(getByTestId("test-button").textContent).toBe("Test button");
    fireEvent.click(getByTestId("test-button"));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
