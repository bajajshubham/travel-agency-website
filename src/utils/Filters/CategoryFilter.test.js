import { mount } from "enzyme";
import CategoryFilter from "./CategoryFilter";

describe("Categories Filters Component", () => {
  let wrapper = null;

  const component = (prop) => {
    return mount(<CategoryFilter {...prop} />);
  };

  beforeEach(() => {
    wrapper = component();
  });

  it("is rendered", () => {
    const category = wrapper.find(".category-filter");
    expect(category.length).toBe(1);
  });
});
