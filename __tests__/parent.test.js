import { render } from "@testing-library/svelte";
import App from "../src/parent.svelte";

describe("App component", () => {
  test("should render component correctly", () => {
    const { container } = render(App);

    expect(container).to.not.be.null;
  });
});
