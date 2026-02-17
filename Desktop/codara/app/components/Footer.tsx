import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>codara</h3>
                        <p>Building intelligent digital systems that help businesses scale and succeed in the modern world.</p>
                        <a
                            href="https://wa.me/918810202799?text=Hello%2C%20Codarist%20I%20would%20like%20to%20enquire%20for%20my%20project%21"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-cta"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="footer-cta-icon">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Chat on WhatsApp
                        </a>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>MENU</h4>
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/#services">Services</Link>
                            <Link href="/#contact">Contact</Link>
                        </div>

                        <div className="footer-column">
                            <h4>SERVICES</h4>
                            <Link href="/#services">Web Development</Link>
                            <Link href="/#services">Mobile Apps</Link>
                            <Link href="/#services">UI/UX Design</Link>
                            <Link href="/#services">Digital Marketing</Link>
                        </div>

                        <div className="footer-column">
                            <h4>CONTACT</h4>
                            <div className="footer-contact-group">
                                <span className="footer-contact-label">WhatsApp:</span>
                                <a href="https://wa.me/918810202799?text=Hello%2C%20Codarist%20I%20would%20like%20to%20enquire%20for%20my%20project%21" target="_blank" rel="noopener noreferrer">+91 88102 02799</a>
                                <a href="https://wa.me/919711987048?text=Hello%2C%20Codarist%20I%20would%20like%20to%20enquire%20for%20my%20project%21" target="_blank" rel="noopener noreferrer">+91 97119 87048</a>
                                <a href="https://wa.me/918882989995?text=Hello%2C%20Codarist%20I%20would%20like%20to%20enquire%20for%20my%20project%21" target="_blank" rel="noopener noreferrer">+91 88829 89995</a>
                            </div>
                            <div className="footer-contact-group">
                                <span className="footer-contact-label">Call:</span>
                                <a href="tel:+918810202799">+91 88102 02799</a>
                            </div>
                            <div className="footer-contact-group">
                                <span className="footer-contact-label">Email:</span>
                                <a href="mailto:teamcodara@gmail.com">teamcodara@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Codara. Building intelligent systems for modern businesses.</p>
                </div>
            </div>
        </footer>
    );
}
