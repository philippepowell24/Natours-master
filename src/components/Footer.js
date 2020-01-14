import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="footer__logo-box">
          <picture class="footer__logo">
            <source
              srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
              media="(max-width: 37.5em)"
              src="img/logo-green-2x.png"
            />
            <img
              srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
              alt="Full logo"
              class="footer__logo"
            />
          </picture>
        </div>
        <div class="row">
          <div class="col-1-of-2">
            <div class="footer__navigation">
              <ul class="footer__list">
                <li class="footer__item">
                  <a href="*" class="footer__link">
                    Company
                  </a>
                </li>
                <li class="footer__item">
                  <a href="*" class="footer__link">
                    Contact us
                  </a>
                </li>
                <li class="footer__item">
                  <a href="*" class="footer__link">
                    Careers
                  </a>
                </li>
                <li class="footer__item">
                  <a href="*" class="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li class="footer__item">
                  <a href="*" class="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-1-of-2">
            <p class="footer__copyright">
              Built by Natours Development Team. Copyright &copy; Natours Inc.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
