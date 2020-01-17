import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import PlayerGrid from "./components/PlayerGrid";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from "./components/Player";

configure({ adapter: new Adapter() });

describe("App component", () => {
  it("Check if Title is correct", () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find("h1").text();
    expect(text).toEqual(
      "Women's World Cup players ranked by search interest from Google Trends"
    );
  });

  it("Check if Class is correct", () => {
    const wrapper = shallow(<PlayerGrid player={[]} />);
    wrapper.find("div").hasClass("PlayerGrid");
  });

  it("Check if props is being passed", () => {
    const wrapper = shallow(<PlayerGrid player={[]} />);
    wrapper.props();
  });
});

// describe("Addition", () => {
//   it("knows that 2 and 2 make 4", () => {
//     expect(2 + 2).toBe(4);
//   });
// });
