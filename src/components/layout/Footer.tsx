/** @format */

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* Top Footer */}
      <div>
        {/* Column 1: Brand + Contact */}
        <div>
          <h3>
            <Link to="/">Scruto Mart</Link>
          </h3>
          <p>
            Brief description about the company goes here. One or two lines
            only.
          </p>
          <p>Got Questions? Call us 24/7</p>
          <p>
            <a href="tel:+0123456789">+0123 456 789</a>
          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">How to Shop</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div>
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Payment Methods</a></li>
            <li><a href="#">Money-back Guarantee</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4: My Account */}
        <div>
          <h4>My Account</h4>
          <ul>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
            <li>
              <Link to="/cart">View Cart</Link>
            </li>
            <li>
              <Link to="/wishlist">My Wishlist</Link>
            </li>
            <li>Track My Order</li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div>
        {/* Newsletter */}
        <div>
          <p>Subscribe to our Newsletter</p>
          <input type="email" placeholder="Enter your email" />
          <button type="button">Subscribe</button>
        </div>

        {/* Social Links */}
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        {/* Copyright */}
        <p>© {new Date().getFullYear()} Scruto Mart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
