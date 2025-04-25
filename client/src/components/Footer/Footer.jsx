import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <img src={"/vite2.png"} alt="SwasXpress" className="footer-logo" />
                    <p className="footer-description">
                        SwadXpress delivers delicious, healthy meals straight to your doorstep. 
                        Experience the taste of premium quality food with our fast and reliable 
                        delivery service. Your satisfaction is our recipe for success!
                    </p>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><FaFacebookF /></a>
                        <a href="#" className="social-icon"><FaTwitter /></a>
                        <a href="#" className="social-icon"><FaInstagram /></a>
                        <a href="#" className="social-icon"><FaLinkedinIn /></a>
                        <a href="#" className="social-icon"><FaYoutube /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Menu</a></li>
                        <li><a href="#">How It Works</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <ul className="footer-links">
                        <li>Thankot, Kathmandu, Nepal</li>
                        <li>Email: hello@swadxpress.com</li>
                        <li>Phone: +977 9876543210</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <p className="footer-description">
                        Subscribe to get special offers, free giveaways, 
                        and once-in-a-lifetime deals.
                    </p>
                    <form className="newsletter-form">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="newsletter-input"
                            required 
                        />
                        <button type="submit" className="newsletter-button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 SwadXpress. All rights reserved. | Privacy Policy | Terms & Conditions</p>
            </div>
        </footer>
    );
};

export default Footer;