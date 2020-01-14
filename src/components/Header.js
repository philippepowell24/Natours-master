import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <div class="header__logo-box">
          <img src="img/logo-white.png" alt="logo" class="header__logo" />
        </div>

        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">outdoors</span>
            <span class="heading-primary--sub">is where life happens</span>
          </h1>

          <a href="/" class="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
