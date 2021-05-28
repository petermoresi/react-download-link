import React from "react";
import { render, screen } from "@testing-library/react";
import DownloadLink from "./index";

describe("DownloadLink", () => {
  it("should set role property if specified", () => {
    render(<DownloadLink role="test" />);

    screen.getByRole("test");
  });

  it("should set default role if role prop is not specified", () => {
    render(<DownloadLink />);

    screen.getByRole("link");
  });

  it("should set test id property if specified", () => {
    render(<DownloadLink testId="test-id" />);

    screen.getByTestId("test-id");
  });
});
