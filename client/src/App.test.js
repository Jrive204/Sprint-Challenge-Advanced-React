import React from "react";
import { shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";

import App from "./App";
import PlayerGrid from "./components/PlayerGrid";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from "./components/Player";
import Header from "./components/Header";

configure({ adapter: new Adapter() });

const player = [
  {
    name: "Alex Morgan",
    country: "United States",
    searches: 100,
    id: 0
  },
  {
    name: "Megan Rapinoe",
    country: "United States",
    searches: 99,
    id: 1
  }
];

describe("App component", () => {
  it("Check if Title is correct", () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find("h1").text();
    expect(text).toEqual(
      "Women's World Cup players ranked by search interest from Google Trends"
    );
  });

  it("Check if header is correct", () => {
    const wrapper = shallow(<Header />);
    const text = wrapper.find("div").text();
    expect(text).toEqual("Women's World Cup Info");
  });
  it("matches the snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("matches the snapshot", () => {
    const tree = renderer.create(<PlayerGrid player={player} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// describe("Addition", () => {
//   it("knows that 2 and 2 make 4", () => {
//     expect(2 + 2).toBe(4);
//   });
// });
