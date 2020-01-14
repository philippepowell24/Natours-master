import React from "react";

class Popup extends React.Component {
  render() {
    return (
      <div class="popup" id="popup">
        <div class="popup__content">
          <div class="popup__left">
            <img src="img/nat-8.jpg" alt="tour 1" class="popup__img" />
            <img src="img/nat-9.jpg" alt="tour 2" class="popup__img" />
          </div>
          <div class="popup__right">
            <a href="#section-tours" class="popup__close">
              &times;
            </a>
            <h2 class="heading-secondary u-margin-bottom-small">
              Start booking now
            </h2>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Important &ndash; Please read these terms before booking
            </h3>
            <p class="popup__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi.
            </p>
            <a href="*" class="btn btn--green">
              Book now
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
