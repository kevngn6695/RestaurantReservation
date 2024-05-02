import React from "react";

import { shallow } from "enzyme";
import { expect } from "chai";

import Button from "../components/Button";

describe("Button Component", () => {
  it("should render a text correctly", () => {
    const buttonText = "Continue";
    const wrapper = shallow(<Button>{buttonText}</Button>);
    expect(wrapper.text()).toEqual(buttonText);
  });
});
