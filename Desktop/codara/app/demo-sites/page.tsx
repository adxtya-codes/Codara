'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DemoSites() {
    return (
        <main className="demo-page">
            <Header />

            {/* Hero Section */}
            <section className="demo-hero">
                <div className="demo-hero-container">
                    <h1 className="demo-hero-headline">
                        Explore Ready-Built<br />
                        <span className="text-gradient">Industry Website Systems</span>
                    </h1>
                    <p className="demo-hero-subtext">
                        Professionally designed websites tailored for real businesses. Fully customisable to match your brand, goals, and vision.
                    </p>
                    <div className="demo-hero-buttons">
                        <a href="https://cardemo-codara.vercel.app/" target="_blank" rel="noopener noreferrer" className="demo-btn-primary">View Car Dealership Demo</a>
                        <a href="https://tuition-demo.vercel.app/" target="_blank" rel="noopener noreferrer" className="demo-btn-primary">View Tuition Centre Demo</a>
                        <a href="tel:+918810202799" className="demo-btn-outline">Request Custom Website</a>
                    </div>
                </div>
            </section>

            {/* Car Dealership Section */}
            <section className="demo-product-section">
                <div className="demo-container">
                    <div className="demo-product-card">
                        <div className="demo-product-content">
                            <h2 className="demo-product-title">Car Dealership Website Example</h2>

                            <div className="demo-features-grid">
                                <div className="demo-feature-column">
                                    <h3>Built For</h3>
                                    <ul>
                                        <li>Used car dealers</li>
                                        <li>Luxury car showrooms</li>
                                        <li>Auto resellers</li>
                                        <li>Vehicle brokers</li>
                                    </ul>
                                </div>
                                <div className="demo-feature-column">
                                    <h3>What This Website Includes</h3>
                                    <ul>
                                        <li>Vehicle listing layout</li>
                                        <li>Search and filtering system</li>
                                        <li>Dedicated vehicle detail pages</li>
                                        <li>WhatsApp enquiry integration</li>
                                        <li>Lead capture form</li>
                                        <li>Mobile responsive design</li>
                                        <li>SEO-ready structure</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tuition Centre Section */}
            <section className="demo-product-section">
                <div className="demo-container">
                    <div className="demo-product-card">
                        <div className="demo-product-content">
                            <h2 className="demo-product-title">Tuition Centre Website Example</h2>

                            <div className="demo-features-grid">
                                <div className="demo-feature-column">
                                    <h3>Built For</h3>
                                    <ul>
                                        <li>Coaching centres</li>
                                        <li>Competitive exam institutes</li>
                                        <li>Language institutes</li>
                                        <li>Private tuition businesses</li>
                                        <li>Online coaching brands</li>
                                    </ul>
                                </div>
                                <div className="demo-feature-column">
                                    <h3>What This Website Includes</h3>
                                    <ul>
                                        <li>Course listing structure</li>
                                        <li>Batch and schedule display</li>
                                        <li>Student testimonials section</li>
                                        <li>Admission enquiry form</li>
                                        <li>Results showcase section</li>
                                        <li>WhatsApp contact integration</li>
                                        <li>Mobile responsive layout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Designed Around Your Vision */}
            <section className="demo-info-section">
                <div className="demo-container">
                    <div className="demo-info-block">
                        <h2>Designed Around Your Vision</h2>
                        <div className="demo-info-grid">
                            <div className="demo-info-item">
                                <p>Every demo you see represents a complete industry-ready website system.</p>
                            </div>
                            <div className="demo-info-item">
                                <p>Each website is structured to support real business operations while maintaining a clean, professional design that builds trust and credibility.</p>
                            </div>
                            <div className="demo-info-item">
                                <p>Your final website will reflect your unique brand identity and business goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="demo-process-section">
                <div className="demo-container">
                    <h2 className="section-title">How It Works</h2>
                    <div className="demo-steps">
                        <div className="demo-step">
                            <div className="step-number">1</div>
                            <p>Choose a website system closest to your industry</p>
                        </div>
                        <div className="demo-step">
                            <div className="step-number">2</div>
                            <p>Share your business details</p>
                        </div>
                        <div className="demo-step">
                            <div className="step-number">3</div>
                            <p>We tailor it to your brand</p>
                        </div>
                        <div className="demo-step">
                            <div className="step-number">4</div>
                            <p>Launch your website professionally</p>
                        </div>
                    </div>
                    <p className="demo-footer-tagline">Simple. Structured. Professional.</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
