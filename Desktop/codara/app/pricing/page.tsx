import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Pricing() {
    const websiteServices = [
        {
            tier: 'Starter',
            price: '₹5,999',
            badge: 'ESSENTIAL',
            description: 'Professional. Clean. Trust-Building. A complete website designed to make your business look credible and modern.',
            features: [
                'Modern design aligned with your business',
                'Enquiry/contact form integration',
                'Mobile & desktop optimized',
                'Structured layout for clarity'
            ],
            popular: false
        },
        {
            tier: 'Dynamic',
            price: '₹9,999',
            badge: 'POPULAR',
            description: 'Flexible. Scalable. Business-Ready. A powerful website that allows you to update content anytime.',
            features: [
                'Editable content system',
                'Built-in lead collection setup',
                'SEO-ready structure',
                'Conversion-focused design',
                'Customizable admin panel'
            ],
            popular: true
        },
        {
            tier: 'Pro',
            price: '₹14,999',
            badge: 'PREMIUM',
            description: 'Built for Performance & Growth. A strategic website designed to convert visitors into serious enquiries.',
            features: [
                'High-converting landing pages',
                'Advanced lead tracking',
                'Analytics integration',
                'Optimized user journey'
            ],
            popular: false
        }
    ];

    const whatsappServices = [
        {
            tier: 'Basic Bot',
            price: '₹4,999',
            badge: 'BASIC',
            description: 'Instant response. Zero missed enquiries. Ensures every message gets a professional reply.',
            features: [
                '24/7 automated replies',
                'Collect customer details automatically',
                'Structured response system',
                'Automatic follow up and reminders'
            ],
            popular: false
        },
        {
            tier: 'Smart Bot',
            price: '₹7,999',
            badge: 'SMART',
            description: 'Smart conversations. Better conversions. Reduces manual work while increasing enquiry quality.',
            features: [
                'Guided conversation flow',
                'Booking/appointment option',
                'Automated follow-ups',
                'Admin panel'
            ],
            popular: true
        },
        {
            tier: 'Advanced Automation',
            price: '₹9,999',
            badge: 'ADVANCED',
            description: 'Complete WhatsApp sales system. Transforms WhatsApp into a structured sales pipeline.',
            features: [
                'Auto follow-ups & reminders',
                'Lead qualification logic',
                'Simple lead dashboard',
                'Workflow automation',
                'Generative AI Chatbot'
            ],
            popular: false
        }
    ];

    return (
        <main>
            <Header />

            <section className="pricing-hero">
                <div className="pricing-hero-container">
                    <h1 className="pricing-hero-headline">Simple, Transparent Pricing</h1>
                    <p className="pricing-hero-description">
                        Choose the perfect plan for your real estate business. No hidden fees, no surprises.
                    </p>
                </div>
            </section>

            <section className="pricing-section">
                <div className="pricing-container">
                    {/* Website Plans */}
                    <div className="pricing-category">
                        <div className="category-header">
                            <h2 className="category-title">Website Packages</h2>
                            <p className="category-subtitle">Establish your digital presence with confidence.</p>
                        </div>
                        <div className="pricing-grid">
                            {websiteServices.map((service, index) => (
                                <div key={index} className={`pricing-card ${service.popular ? 'popular' : ''}`}>
                                    {service.popular && <div className="popular-badge">Most Popular</div>}
                                    <div className="pricing-card-header">
                                        <div className="tier-badge">{service.badge}</div>
                                        <h3 className="tier-name">{service.tier} Website</h3>
                                        <div className="tier-price">{service.price}</div>
                                    </div>
                                    <p className="tier-description">{service.description}</p>
                                    <ul className="features-list">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <span className="check-icon">✔</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="tel:+918810202799" className="pricing-cta">Get Started</a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* WhatsApp Plans */}
                    <div className="pricing-category">
                        <div className="category-header">
                            <h2 className="category-title">WhatsApp Automation Plans</h2>
                            <p className="category-subtitle">Automate your customer interactions and never miss a lead.</p>
                        </div>
                        <div className="pricing-grid">
                            {whatsappServices.map((service, index) => (
                                <div key={index} className={`pricing-card ${service.popular ? 'popular' : ''}`}>
                                    {service.popular && <div className="popular-badge">Recommended</div>}
                                    <div className="pricing-card-header">
                                        <div className="tier-badge">{service.badge}</div>
                                        <h3 className="tier-name">{service.tier}</h3>
                                        <div className="tier-price">{service.price}</div>
                                    </div>
                                    <p className="tier-description">{service.description}</p>
                                    <ul className="features-list">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <span className="check-icon">✔</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="tel:+918810202799" className="pricing-cta">Get Started</a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Combo Plan */}
                    <div className="pricing-category combo-category">
                        <div className="combo-card">
                            <div className="combo-header">
                                <div className="combo-label">🚀 BEST VALUE</div>
                                <h2>Website + WhatsApp Bot Combo</h2>
                                <p>Complete Digital System</p>
                            </div>

                            <div className="combo-content">
                                <div className="combo-description">
                                    <h3>Complete Digital Ecosystem</h3>
                                    <p>Get your professional website and intelligent WhatsApp automation working together as one powerful system. This combo ensures your business not only looks professional online but also responds instantly to enquiries — 24/7.</p>

                                    <div className="combo-price-block">
                                        <div className="combo-price">₹10,999 <span className="period">/ Year</span></div>
                                        <div className="combo-savings">One-time setup + full-year peace of mind</div>
                                    </div>

                                    <a href="tel:+918810202799" className="combo-cta">Get The Combo Deal</a>
                                </div>

                                <div className="combo-features-grid">
                                    <div className="combo-feature-column">
                                        <h4>💻 Professional Website</h4>
                                        <ul>
                                            <li>✔ Modern responsive design</li>
                                            <li>✔ Structured layout for credibility</li>
                                            <li>✔ Enquiry/contact form integration</li>
                                            <li>✔ Fast loading & optimized performance</li>
                                        </ul>
                                    </div>
                                    <div className="combo-feature-column">
                                        <h4>🤖 WhatsApp Automation Bot</h4>
                                        <ul>
                                            <li>✔ Instant auto-replies</li>
                                            <li>✔ Structured conversation flow</li>
                                            <li>✔ Customer detail collection</li>
                                            <li>✔ Automated response system</li>
                                        </ul>
                                    </div>
                                    <div className="combo-feature-column">
                                        <h4>🌐 Hosting & Maintenance Included</h4>
                                        <ul>
                                            <li>✔ Secure hosting</li>
                                            <li>✔ Regular updates</li>
                                            <li>✔ Performance monitoring</li>
                                            <li>✔ Ongoing technical support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="additional-services">
                        <h2 className="additional-title">Additional Services</h2>
                        <div className="additional-grid">
                            <div className="additional-card">
                                <h3>WhatsApp Catalogue Setup</h3>
                                <div className="additional-price">₹2,999</div>
                                <ul className="additional-features">
                                    <li>Upload Catalogue Photos</li>
                                    <li>Add Price & Details</li>
                                    <li>Appointment Booking</li>
                                    <li>Categories (Buy / Rent / Commercial)</li>
                                </ul>
                            </div>
                            <div className="additional-card">
                                <h3>Hosting & Maintenance</h3>
                                <div className="additional-price">
                                    ₹4,999<span>/yearly</span>
                                </div>
                                <p className="price-desc" style={{ marginBottom: '10px', color: '#888' }}>Keeps your website fast, secure, and worry-free.</p>
                                <p className="price-note">*applicable on all type of projects</p>
                                <ul className="additional-features">
                                    <li>Secure hosting</li>
                                    <li>Regular updates</li>
                                    <li>Performance monitoring</li>
                                    <li>Ongoing support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-cta-section">
                        <h2>Ready to get started?</h2>
                        <p>Contact us for a quick demo and see how our systems work for real estate enquiries</p>
                        <a href="https://cal.com/codara" target="_blank" rel="noopener noreferrer" className="main-cta-button">Book a Free Strategy Call</a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
