import React from "react";

class Features extends React.Component {
  render() {
    return (
      <section class="section-features">
        <div class="row">
          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-world" />
              <h3 class="heading-tertiary u-margin-bottom-small">
                Explore the World
              </h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-compass" />
              <h3 class="heading-tertiary u-margin-bottom-small">
                Meet Nature
              </h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-map" />
              <h3 class="heading-tertiary u-margin-bottom-small">
                Find your Way
              </h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-heart" />
              <h3 class="heading-tertiary u-margin-bottom-small">
                Live a healthier life
              </h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
