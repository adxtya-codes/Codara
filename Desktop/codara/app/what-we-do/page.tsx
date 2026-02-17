import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WhatWeDo() {
    const services = [
        {
            title: 'Website Development',
            description: 'We build beautiful, fast websites for your business. Whether you need a simple 5-page site or a complex platform where you can add and manage content yourself, we\'ve got you covered. Your website will look great on phones, tablets, and computers.'
        },
        {
            title: 'WhatsApp Automation Bots',
            description: 'Imagine having a smart assistant that replies to your WhatsApp messages instantly - even when you\'re sleeping! Our bots can answer questions, collect customer details, share information about your products or services, and even book appointments automatically.'
        },
        {
            title: 'Chatbots for Your Business',
            description: 'Never miss a customer inquiry again. Our chatbots work 24/7 on your website, answering common questions, helping visitors find what they need, and collecting their contact information so you can follow up later.'
        },
        {
            title: 'Automation Tools',
            description: 'Stop doing repetitive tasks manually. We create custom automation tools that handle boring, time-consuming work for you - like sending follow-up messages, organizing leads, tracking customer interactions, and generating reports. This gives you more time to focus on growing your business.'
        }
    ];

    return (
        <main>
            <Header />

            <section className="what-we-do-hero">
                <div className="what-we-do-hero-container">
                    <h1 className="what-we-do-hero-headline">What We Do</h1>
                    <p className="what-we-do-hero-description">
                        We help businesses work smarter with simple digital solutions that save time and bring in more customers.
                    </p>
                </div>
            </section>

            <section className="what-we-do-section">
                <div className="what-we-do-container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="how-it-works">
                        <h2>How It Works</h2>
                        <div className="steps-container">
                            <div className="work-step">
                                <div className="step-number">1</div>
                                <h3>Tell Us What You Need</h3>
                                <p>We'll have a quick chat to understand your business and what you're looking for.</p>
                            </div>
                            <div className="work-step">
                                <div className="step-number">2</div>
                                <h3>We Build It For You</h3>
                                <p>Our team creates exactly what you need, keeping you updated along the way.</p>
                            </div>
                            <div className="work-step">
                                <div className="step-number">3</div>
                                <h3>You Start Getting Results</h3>
                                <p>Once everything is ready, you'll see more leads, save time, and grow your business.</p>
                            </div>
                        </div>
                    </div>

                    <div className="what-we-do-cta">
                        <h2>Ready to Work Smarter?</h2>
                        <p>Let's talk about how we can help your business grow</p>
                        <a href="tel:+918810202799" className="main-cta-button">Book a Free Strategy Call</a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
