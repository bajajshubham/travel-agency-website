import { Switch } from "@mui/material";
import { mount } from "enzyme";

import Accessibility from "./Accessibility";

const component=(prop)=>{
return mount(<Accessibility{...prop}/>);
}


describe('Accessibility Component', () => {
let wrapper=null;

beforeEach(()=>{
    wrapper=component();
});

it("is rendered", ()=>{
    const Options=wrapper.find(".Options-box");
    expect(Options.length).toBe(1);
});



})