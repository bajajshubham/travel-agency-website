import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  let wrapper = null;

  const component = (path) => {
    return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
        <App />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    wrapper = component();
  });

  it("is rendered", () => {
    const app = wrapper.find({ "data-testid": "App" });
    expect(app.length).toBe(1);
  });
});
