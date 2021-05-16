import { render } from "@testing-library/svelte";
import Foo from "../src/foo.svelte";

describe("Foo component", () => {
  test("should render component correctly", () => {
    const { container } = render(Foo, {
      props: {
        background: 'red',
        name: 'Singh'
      }
  });

    expect(container).toContainHTML('<body><div><h2 style="background: red;">Hello i am <p>Singh</p></h2></div></body>');
  });
});
