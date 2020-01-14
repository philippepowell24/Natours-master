import React from "react";

class Stories extends React.Component {
  render() {
    return (
      <section class="section-stories">
        <div class="bg-video">
          <video class="bg-video__content" autoPlay muted loop>
            <source src="img/video.mp4" type="video/mp4" />
            <source src="img/video.webm" type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">We make people genuinely happy</h2>
        </div>
        <div class="row">
          <div class="story">
            <figure class="story__shape">
              <img
                src="img/nat-8.jpg"
                alt="person on a tour 1"
                class="story__img"
              />
              <figcaption class="story__caption">Mary Smith</figcaption>
            </figure>
            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">
                I had the best week ever with my family
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="story">
            <figure class="story__shape">
              <img
                src="img/nat-9.jpg"
                alt="person on a tour 2"
                class="story__img"
              />
              <figcaption class="story__caption">Jack Wilson</figcaption>
            </figure>
            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">
                My life is completely different now
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi.
              </p>
            </div>
          </div>
        </div>
        <div class="u-center-text u-margin-top-huge">
          <a href="*" class="btn-text">
            Read all stories &rarr;
          </a>
        </div>
      </section>
    );
  }
}

export default Stories;
