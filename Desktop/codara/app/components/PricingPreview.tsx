import Link from 'next/link';

export default function PricingPreview() {
    return (
        <section className="pricing-preview-section">
            <div className="pricing-preview-container">
                <div className="pricing-preview-header">
                    <p className="pricing-label">Flexible Plans</p>
                    <h2 className="pricing-headline">Pricing tailored for your growth</h2>
                    <p className="pricing-subheadline">
                        Choose from our individual services or get the comprehensive combo package.
                    </p>
                </div>

                <div className="preview-grid">
                    {/* Website Starter */}
                    <div className="preview-card">
                        <div className="preview-card-header">
                            <span className="preview-tier">Starter Website</span>
                            <span className="preview-price">₹5,999</span>
                        </div>
                        <p className="preview-description">Perfect for establishing your digital presence.</p>
                        <ul className="preview-features">
                            <li>✔ 5 Page Professional Website</li>
                            <li>✔ Mobile Responsive</li>
                            <li>✔ Enquiry Form</li>
                        </ul>
                    </div>

                    {/* Combo Deal - Highlighted */}
                    <div className="preview-card popular">
                        <div className="popular-tag">BEST VALUE</div>
                        <div className="preview-card-header">
                            <span className="preview-tier">Website + Bot Combo</span>
                            <span className="preview-price">₹10,999<span className="period">/yr</span></span>
                        </div>
                        <p className="preview-description">Complete digital system with 24/7 automation.</p>
                        <ul className="preview-features">
                            <li>✔ Professional Website Included</li>
                            <li>✔ Advanced WhatsApp Bot</li>
                            <li>✔ Hosting & Maintenance Included</li>
                            <li>✔ Instant Lead Capture</li>
                        </ul>
                        <Link href="/pricing" className="preview-cta">View Deal</Link>
                    </div>

                    {/* WhatsApp Bot */}
                    <div className="preview-card">
                        <div className="preview-card-header">
                            <span className="preview-tier">Smart Bot</span>
                            <span className="preview-price">₹7,999</span>
                        </div>
                        <p className="preview-description">Automate customer interactions efficiently.</p>
                        <ul className="preview-features">
                            <li>✔ Guided Conversation Flow</li>
                            <li>✔ Appointment Booking</li>
                            <li>✔ Automated Follow-ups</li>
                        </ul>
                    </div>
                </div>

                <div className="pricing-footer">
                    <Link href="/pricing" className="view-all-plans-btn">
                        View All Plans & Features
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
