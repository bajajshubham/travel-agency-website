import { Autocomplete } from "@mui/material";
import { mount } from "enzyme";
import DestinationSearchFilter from './DestinationSearchFilter'

describe("Destination Filters Component", () => {
  let wrapper = null;

  const component = (prop) => {
    return mount(<DestinationSearchFilter {...prop} />);
  };

  beforeEach(() => {
    wrapper = component();
  });

  it("is rendered", () => {
    const dest = wrapper.find({ "data-testid": "destination-search-filter" });
    expect(dest.length).toBe(1);
  });

  it("renders Autocomplete select dropdown correctly", () => {
    const dest = wrapper.find(Autocomplete);
    expect(dest.length).toBe(1);
  });
})