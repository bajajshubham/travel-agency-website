import { mount } from "enzyme";
import DestinationFilter from "./DestinationFilter";
import DestinationSearchFilter from "./DestinationSearchFilter";
import { TextField } from "@mui/material";

describe("Destination Filters Component", () => {
  let wrapper = null;

  const component = (prop) => {
    return mount(<DestinationFilter {...prop} />);
  };

  beforeEach(() => {
    wrapper = component();
  });

  it("is rendered", () => {
    const dest = wrapper.find({ "data-testid": "destination-filter" });
    expect(dest.length).toBe(1);
  });

  it("renders Destination search filters correctly", () => {
    const dest = wrapper.find(DestinationSearchFilter);
    expect(dest.length).toBe(2);
  });

  it("renders Radius Text Feild correctly", () => {
    const dest = wrapper.find(TextField);
    expect(dest.length).toBe(3); // 2 from DestinationSearchFilter
  });
});
