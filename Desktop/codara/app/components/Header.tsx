'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') return 'active';
        if (path !== '/' && pathname?.startsWith(path)) return 'active';
        return '';
    };

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
                    <Link href="/" className={isActive('/')}>Home</Link>
                    <Link href="/about" className={isActive('/about')}>About</Link>
                    <Link href="/what-we-do" className={`nav-link ${isActive('/what-we-do')}`}>What We Do</Link>
                    <Link href="/demo-sites" className={`nav-link ${isActive('/demo-sites')}`}>Demos</Link>
                    <Link href="/pricing" className={`nav-link ${isActive('/pricing')}`}>Pricing</Link>
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
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className={isActive('/')}>Home</Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={isActive('/about')}>About</Link>
                <Link href="/what-we-do" onClick={() => setMobileMenuOpen(false)} className={isActive('/what-we-do')}>What We Do</Link>
                <Link href="/demo-sites" onClick={() => setMobileMenuOpen(false)} className={isActive('/demo-sites')}>Demos</Link>
                <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className={isActive('/pricing')}>Pricing</Link>
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </nav>
        </header>
    );
}
