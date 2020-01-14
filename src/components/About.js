import React from "react";

class About extends React.Component {
  render() {
    return (
      <section class="section-about">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            Exciting tours for adventurous people !
          </h2>
        </div>
        <div class="row">
          <div class="col-1-of-2">
            <h3 class="heading-tertiary u-margin-bottom-small">
              You're going to fall in love with nature !
            </h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before !
            </h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="/#" class="btn-text">
              Learn More &rarr;
            </a>
          </div>
          <div class="col-1-of-2">
            <div class="composition">
              <img
                srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
                alt="nature_image--1"
                class="composition__photo composition__photo--p1"
                src="img/nat-1-large.jpg"
              />

              <img
                srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
                alt="nature_image--2"
                class="composition__photo composition__photo--p2"
                src="img/nat-2-large.jpg"
              />

              <img
                srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
                alt="nature_image--3"
                class="composition__photo composition__photo--p3"
                src="img/nat-3-large.jpg"
              />
              {/*
              <img
                src="img/nat-1-large.jpg"
                alt="nature_image--1"
                class="composition__photo composition__photo--p1"
              />
              <img
                src="img/nat-2-large.jpg"
                alt="nature_image--2"
                class="composition__photo composition__photo--p2"
              />
              <img
                src="img/nat-3-large.jpg"
                alt="nature_image--3"
                class="composition__photo composition__photo--p3"
              />
              */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
