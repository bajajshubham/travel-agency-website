import { mount } from "enzyme";
import Filters from "./Filters";

describe("Filters Component", () => {
  let wrapper = null;

  const component = (prop) => {
    return mount(<Filters {...prop} />);
  };

  beforeEach(() => {
    wrapper = component();
  });

  it("is rendered", () => {
    const Filters = wrapper.find(".filter-wrapper");
    expect(Filters.length).toBe(1);
  });
});
