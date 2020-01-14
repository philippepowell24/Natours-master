import React from "react";
import About from "./About";
import Features from "./Features";
import Tours from "./Tours";
import Stories from "./Stories";
import Book from "./Book";

class Main extends React.Component {
  render() {
    return (
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Book />
      </main>
    );
  }
}

export default Main;
