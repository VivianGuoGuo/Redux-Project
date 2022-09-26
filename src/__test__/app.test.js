import { render, screen, cleanup } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import changeHandler, { Header } from "../component/header/Header";
import { useAppleDispatch } from "../redux/hooks";

jest.mock("../redux/hooks");

describe("app", () => {
  beforeEach(() => {
    useAppleDispatch.mockImplementation(changeHandler);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should header in the component", () => {
    render(<Header />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  it("should call dispatch in header", () => {
    render(<Header />);
    const openBtn = screen.getByText("Open");
    useEvent.click(openBtn);
    expect(useAppleDispatch).toHaveBeenCalled();
    expect(useAppleDispatch).toHaveBeenLastCalledWith();
  });
});
