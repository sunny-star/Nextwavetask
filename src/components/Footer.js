import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => (
    <footer className={styles.footer}>
        {/* Top Row: Newsletter & Contact */}
        <div className={styles.topRow}>
            <div className={styles.newsletter}>
                <h4>BE THE FIRST TO KNOW</h4>
                <p>Sign up for updates from mettà muse.</p>
                <form className={styles.subscribeForm}>
                    <input
                        type="email"
                        placeholder="Enter your e-mail..."
                        className={styles.subscribeInput}
                    />
                    <button type="submit" className={styles.subscribeBtn}>
                        SUBSCRIBE
                    </button>
                </form>
            </div>
            <div className={styles.contactCurrency}>
                <div className={styles.contact}>
                    <h4>CONTACT US</h4>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                </div>
                <div className={styles.currency}>
                    <h4>CURRENCY</h4>
                    <div className={styles.currencyRow}>
                        <span role="img" aria-label="us flag" className={styles.flag}>🇺🇸</span>
                        <span className={styles.currencyText}>USD</span>
                    </div>
                    <p className={styles.currencyNote}>
                        Transactions will be completed in Euros and a currency reference is available on hover.
                    </p>
                </div>
            </div>
        </div>

        <hr className={styles.divider} />

        {/* Middle Row: Links & Social */}
        <div className={styles.middleRow}>
            <div className={styles.linksGroup}>
                <h4>mettà muse</h4>
                <ul>
                    <li>About Us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                </ul>
            </div>
            <div className={styles.linksGroup}>
                <h4>QUICK LINKS</h4>
                <ul>
                    <li>Orders & Shipping</li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className={styles.socialGroup}>
                <h4>FOLLOW US</h4>
                <div className={styles.socialIcons}>
                    <a href="www.google.com"><img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram" /></a>
                    <a href="www.google.com"><img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" alt="LinkedIn" /></a>
                </div>
                <h4 className={styles.acceptsTitle}>mettà muse ACCEPTS</h4>
                <div className={styles.paymentIcons}>
                    <img src="https://img.icons8.com/color/32/google-pay-india.png" alt="GPay" />
                    <img src="https://img.icons8.com/color/32/mastercard-logo.png" alt="Mastercard" />
                    <img src="https://img.icons8.com/color/32/visa.png" alt="Visa" />
                    <img src="https://img.icons8.com/color/32/paypal.png" alt="Paypal" />
                    <img src="https://img.icons8.com/color/32/amex.png" alt="Amex" />
                    <img src="https://img.icons8.com/color/32/apple-pay.png" alt="Apple Pay" />
                    <img src="https://img.icons8.com/color/32/apple-pay.png" alt="Apple Pay" />
                </div>
            </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className={styles.bottomRow}>
            Copyright © 2023 mettamuse. All rights reserved.
        </div>
    </footer>
);

export default Footer;
