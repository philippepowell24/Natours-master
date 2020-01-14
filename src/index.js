import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import Main from "./components/Main";

import "./sass/main.scss";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Main />
      <Footer />
      <Popup />
      {/*
      <section class="grid-test">
        <div class="row">
          <div class="col-1-of-2">Col 1 of 2</div>
          <div class="col-1-of-2">Col 1 of 2</div>
        </div>
        <div class="row">
          <div class="col-1-of-3">Col 1 of 3</div>
          <div class="col-1-of-3">Col 1 of 3</div>
          <div class="col-1-of-3">Col 1 of 3</div>
        </div>
        <div class="row">
          <div class="col-1-of-3">Col 1 of 3</div>
          <div class="col-2-of-3">Col 2 of 3</div>
        </div>
        <div class="row">
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-1-of-4">Col 1 of 4</div>
        </div>
        <div class="row">
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-2-of-4">Col 2 of 4</div>
        </div>
        <div class="row">
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-3-of-4">Col 3 of 4</div>
        </div>
      </section>
      */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
