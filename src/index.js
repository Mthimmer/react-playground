import "./style/App.scss";

import React from "react";
import ReactDOM, { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

let h1 = React.createElement("h1", null, "Hello world!");

// runs everytime object rerenders
// useEffect(() => {});
// runs at start
// useEffect(() => {}, []);

class Helloworld1 extends React.Component {
  render() {
    return React.createElement(
      "p",
      this.props,
      "hello " + this.props.frameworkname + " world!!!" + this.props.title
    );
  }
}

class HelloWorld2 extends React.Component {
  render() {
    return (
      <div>
        <h1>1. Hello world!</h1>
        <h1>2. Hello world!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <>
      <h1 className="p-5 mb-2 bg-dark text-white">Bootstrap test</h1>
      <App />
      <h1 className="p-5 mb-2 bg-dark text-white">Componenten test</h1>

      {/* {React.createElement(
        "div",
        null,
        React.createElement(Helloworld),
        React.createElement(Helloworld),
        React.createElement(Helloworld)
      )} */}
      {React.createElement(
        "div",
        null,
        React.createElement(Helloworld1, {
          id: "ember",
          n: "Ember.js",
          title: "A framework for creating ambitious web applications.",
        }),
        React.createElement(Helloworld1, {
          id: "backbone",
          n: "Backbone.js",
          title: "Backbone.js gives structure to web applications...",
        }),
        React.createElement(Helloworld1, {
          id: "angular",
          n: "Angular.js",
          title: "Superheroic JavaScript MVW Framework",
        })
      )}
      <HelloWorld2 />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
