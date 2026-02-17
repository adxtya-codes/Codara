'use client';

import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: 'When will I be charged for my order?',
            answer: 'You will be charged immediately upon placing your order. Payment is processed securely through our payment gateway, and you will receive a confirmation email with your receipt.'
        },
        {
            question: 'Whats your return policy?',
            answer: 'We offer a 30-day return policy for all our services. If you\'re not satisfied with the delivered product, you can request a full refund within 30 days of delivery, no questions asked.'
        },
        {
            question: 'How do I make a warranty claim?',
            answer: 'To make a warranty claim, simply contact our support team with your order details and a description of the issue. We\'ll review your claim and provide a resolution within 48 hours.'
        },
        {
            question: 'Do I have to pay customs fees or duty on my package?',
            answer: 'Customs fees and duties depend on your country\'s regulations. We ship from India, and any applicable customs fees are the responsibility of the buyer. We recommend checking with your local customs office for specific rates.'
        },
        {
            question: 'How do I make a warranty claim?',
            answer: 'Contact our support team with your order number and issue description. Our team will guide you through the warranty claim process and ensure a quick resolution.'
        },
        {
            question: 'Where can I change or cancel my order?',
            answer: 'You can change or cancel your order within 24 hours of placement by contacting our support team. After 24 hours, orders enter production and cannot be modified or cancelled.'
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <p className="faq-label">FAQ</p>
                <h2 className="faq-headline">
                    Here it is what people ask us most oftenly
                </h2>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="faq-item"
                        >
                            <div
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3>{faq.question}</h3>
                                <svg
                                    className={`faq-icon ${openIndex === index ? 'open' : ''}`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
