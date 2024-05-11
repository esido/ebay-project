import { IoLogoFacebook } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__content">
            <div>
              <h5>Buy</h5>
              <ul>
                <li>Registration</li>
                <li>Bidding & buying help</li>
                <li>Stores</li>
                <li>eBay for Charity</li>
                <li>Charity shop</li>
                <li>Seasonal Sales and Events</li>
                <li>eBay gift cards</li>
              </ul>
            </div>
          </div>
          <div className="footer__content">
            <div>
              <h5>Sell</h5>
              <ul>
                <li>Start selling</li>
                <li>How to sell</li>
                <li>Business sellers</li>
                <li>Affialiates</li>
              </ul>
            </div>
            <div>
              <h5>Tools & apps</h5>
              <ul>
                <li>Developers</li>
                <li>Security center</li>
                <li>Site map</li>
              </ul>
            </div>
          </div>
          <div className="footer__content">
            <div>
              <h5>eBay Companies</h5>
              <ul>
                <li>TCGplayer</li>
              </ul>
            </div>

            <div>
              <h5>Stay connected</h5>
              <ul>
                <li>
                  <IoLogoFacebook /> facebook
                </li>
                <li>
                  <FaSquareTwitter /> Twitter
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__content">
            <div>
              <h5>About eBay</h5>
              <ul>
                <li>Company info</li>
                <li>News</li>
                <li>Deferred Prosecution</li>
                <li>Investors</li>
                <li>Careers</li>
                <li>Diversity & Inclusion</li>
                <li>Global impact</li>
                <li>Government relations</li>
                <li>Advertise with us</li>
                <li>Policies</li>
                <li>Verified Right Owner Program</li>
                <li>eCi licenses</li>
              </ul>
            </div>
          </div>
          <div className="footer__content">
            <div>
              <h5>Help & Contact</h5>
              <ul>
                <li>Seller centre</li>
                <li>Contact us</li>
                <li>eBay Returns</li>
              </ul>
            </div>
            <div>
              <h5>Community</h5>
              <ul>
                <li>Announcements</li>
                <li>eBay community</li>
                <li>eBay for Business Podcast</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p>
            Copyright © 1995-2024 eBay Inc. All Rights Reserved. Accessibility,
            User Agreement, Payment terms of use, Privacy, Cookies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
