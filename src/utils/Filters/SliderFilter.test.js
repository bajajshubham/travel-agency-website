import { mount } from "enzyme";
import SliderFilter from "./SliderFilter";
import Slider from "@mui/material/Slider";

describe("Slider Filters Component", () => {
  let wrapper = null;

  const component = (prop) => {
    return mount(<SliderFilter {...prop} />);
  };

  beforeEach(() => {
    wrapper = component();
  });

  it("is rendered", () => {
    const slider = wrapper.find(Slider);
    expect(slider.length).toBe(1);
  });

  it("is rendered correctly according to variation 1", () => {
    const prop_1 = {
      sendValues: jest.fn(),
    };
    wrapper = component(prop_1);
    const slider = wrapper.find(Slider);
    expect(typeof slider.prop("onChange")).toBe("function");
  });
});
