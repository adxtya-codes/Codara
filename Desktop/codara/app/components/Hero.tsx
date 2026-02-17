import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-headline">
                        <span className="headline-line">We build intelligent</span>
                        <span className="headline-line">digital</span>
                        <span className="headline-line">systems that</span>
                        <span className="headline-line">scale</span>
                        <span className="headline-line">businesses</span>
                    </h1>

                    <p className="hero-description">
                        We design high-performance websites for your business (according to your requirements), Automation Tools to generate leads, WhatsApp automation systems and AI-powered business tools for modern Indian businesses.
                    </p>

                    <a
                        href="tel:+918810202799"
                        className="cta-button"
                    >
                        Book a Free Strategy Call
                    </a>


                </div>

                <div className="hero-image">
                    <Image
                        src="/mansitting.svg"
                        alt="Person working on laptop"
                        width={400}
                        height={400}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
