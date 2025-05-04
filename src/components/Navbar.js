import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>LOGO</div>

            {/* Desktop menu */}
            <ul className={styles.menu}>
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>

            {/* Hamburger for mobile */}
            <div
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter") setMenuOpen(!menuOpen); }}
            >
                <div />
                <div />
                <div />
            </div>

            {/* Icons */}
            <div className={styles.icons}>
                <span className={styles.icon}>♡</span>
                <span className={styles.icon}>🛒</span>
                <span className={styles.icon}>👤</span>
            </div>

            {/* Mobile menu (optional) */}
            {menuOpen && (
                <ul className={styles.mobileMenu}>
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
