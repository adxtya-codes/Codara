'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-container">
                <Link href="/" className="logo">
                    <span className="wave-letter" style={{ animationDelay: '0s' }}>c</span>
                    <span className="wave-letter" style={{ animationDelay: '0.1s' }}>o</span>
                    <span className="wave-letter" style={{ animationDelay: '0.2s' }}>d</span>
                    <span className="wave-letter" style={{ animationDelay: '0.3s' }}>a</span>
                    <span className="wave-letter" style={{ animationDelay: '0.4s' }}>r</span>
                    <span className="wave-letter" style={{ animationDelay: '0.5s' }}>a</span>
                </Link>
                <nav className="nav-links">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/#services">Services</Link>
                    <Link href="/#contact">Contact</Link>
                </nav>
                <button
                    className="mobile-menu-button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>
            <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </nav>
        </header>
    );
}
