import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Pricing() {
    const websiteServices = [
        {
            tier: 'Starter',
            price: '₹7,999',
            icon: '🥉',
            features: [
                '5 Pages (Home, About, Listings, Contact)',
                'Enquiry Form',
                'Mobile Responsive Design'
            ]
        },
        {
            tier: 'Dynamic',
            price: '₹14,999',
            icon: '🥈',
            features: [
                'Add / Edit Properties Anytime',
                'Lead Collection System',
                'Basic SEO Setup'
            ],
            popular: true
        },
        {
            tier: 'Pro',
            price: '₹24,999',
            icon: '🥇',
            features: [
                'Landing Pages for Ads',
                'Advanced Lead Tracking',
                'Analytics Setup'
            ]
        }
    ];

    const whatsappServices = [
        {
            tier: 'Basic Bot',
            price: '₹4,999',
            icon: '🥉',
            features: [
                'Instant Auto Reply',
                'Collect Name, Budget & Location',
                'Share Property Details'
            ]
        },
        {
            tier: 'Smart Bot',
            price: '₹11,999',
            icon: '🥈',
            features: [
                'Property Auto-Send',
                'Site Visit Booking Option',
                'Follow-Up Reminder'
            ],
            popular: true
        },
        {
            tier: 'Advanced Automation',
            price: '₹19,999',
            icon: '🥇',
            features: [
                'Auto Follow-Ups',
                'Missed Call Automation',
                'Lead Qualification',
                'Simple Lead Dashboard'
            ]
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
                    <div className="pricing-category">
                        <div className="category-header">
                            <span className="category-icon">🌐</span>
                            <h2 className="category-title">Real Estate Website Services</h2>
                        </div>
                        <div className="pricing-grid">
                            {websiteServices.map((service, index) => (
                                <div key={index} className={`pricing-card ${service.popular ? 'popular' : ''}`}>
                                    {service.popular && <div className="popular-badge">Most Popular</div>}
                                    <div className="pricing-card-header">
                                        <span className="tier-icon">{service.icon}</span>
                                        <h3 className="tier-name">{service.tier} Website</h3>
                                        <div className="tier-price">{service.price}</div>
                                    </div>
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

                    <div className="pricing-category">
                        <div className="category-header">
                            <span className="category-icon">🤖</span>
                            <h2 className="category-title">WhatsApp Automation Services</h2>
                        </div>
                        <div className="pricing-grid">
                            {whatsappServices.map((service, index) => (
                                <div key={index} className={`pricing-card ${service.popular ? 'popular' : ''}`}>
                                    {service.popular && <div className="popular-badge">Most Popular</div>}
                                    <div className="pricing-card-header">
                                        <span className="tier-icon">{service.icon}</span>
                                        <h3 className="tier-name">{service.tier}</h3>
                                        <div className="tier-price">{service.price}</div>
                                    </div>
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

                    <div className="additional-services">
                        <h2 className="additional-title">Additional Services</h2>
                        <div className="additional-grid">
                            <div className="additional-card">
                                <span className="additional-icon">📲</span>
                                <h3>WhatsApp Property Catalogue Setup</h3>
                                <div className="additional-price">₹2,999</div>
                                <ul className="additional-features">
                                    <li>Upload Property Photos</li>
                                    <li>Add Price & Details</li>
                                    <li>Categories (Buy / Rent / Commercial)</li>
                                </ul>
                            </div>
                            <div className="additional-card">
                                <span className="additional-icon">🔧</span>
                                <h3>Hosting & Maintenance</h3>
                                <div className="additional-price">₹1,999<span>/month</span></div>
                                <ul className="additional-features">
                                    <li>Website Hosting</li>
                                    <li>Regular Updates</li>
                                    <li>Technical Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-cta-section">
                        <h2>Ready to get started?</h2>
                        <p>Contact us for a quick demo and see how our systems work for real estate enquiries</p>
                        <a href="tel:+918810202799" className="main-cta-button">Book a Free Strategy Call</a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
