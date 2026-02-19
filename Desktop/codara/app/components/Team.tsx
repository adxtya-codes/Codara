'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Team() {
    const [submitted, setSubmitted] = useState(false);
    const teamMembers = [
        {
            name: 'Aditya',
            role: 'Backend Engineer & Strategist',
            description: 'Backend engineer and project manager specializing in scalable architecture, system design, and strategic planning. Drives technical vision and ensures seamless project execution.',
            image: '/team/aditya.jpeg',
            whatsapp: '918810202799',
            linkedin: 'https://www.linkedin.com/in/aditya-singh-41a895349/',
            website: 'https://adxtya.vercel.app/'
        },
        {
            name: 'Shaurya',
            role: 'Backend Engineer & Manager',
            description: 'Backend engineer and operations manager focused on server-side development, API architecture, and team coordination. Ensures efficient workflows and technical excellence.',
            image: '/team/shaurya.jpg',
            whatsapp: '919711987048',
            linkedin: 'https://www.linkedin.com/in/shaurya-swami-237513304'
        },
        {
            name: 'Himanshu',
            role: 'Marketing Specialist',
            description: 'Marketing team lead handling digital strategy, client outreach, and brand positioning. Connects our technical solutions with the right audience and drives business growth.',
            image: '/team/himanshu.jpeg',
            whatsapp: '918882989995'
        }
    ];

    return (
        <section className="team-section">
            <div className="team-container">
                <h2 className="team-headline">Meet the minds behind Codara</h2>

                <p className="team-description">
                    We're a passionate collective of designers, developers, and strategists who believe
                    great digital experiences are born from collaboration and creativity. With expertise
                    spanning full-stack development, UI/UX design, cloud architecture, and digital marketing,
                    our team brings diverse perspectives to every project. We don't just build websites and
                    apps—we craft solutions that drive real business results. From startups to established
                    enterprises across Dubai, India, and beyond, we've helped our clients transform their
                    digital presence and achieve measurable growth. What sets us apart? We're obsessed with
                    the details, committed to deadlines, and always available when you need us.
                </p>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="team-image-wrapper">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={300}
                                    height={300}
                                    className="team-image"
                                />
                            </div>
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <p className="team-member-description">{member.description}</p>
                            <div className="team-socials">
                                <a
                                    href={`https://wa.me/${member.whatsapp}?text=Hello%2C%20Codarist%20I%20would%20like%20to%20enquire%20for%20my%20project%21`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    title="WhatsApp"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </a>
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        title="LinkedIn"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                )}
                                {/* @ts-ignore */}
                                {member.website && (
                                    <a
                                        // @ts-ignore
                                        href={member.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        title="Website"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" y1="12" x2="22" y2="12" />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hiring-section" id="hiring">
                    <h2 className="team-headline">Come on board with us!</h2>
                    <p className="team-description">
                        Join our team of innovators. Fill out the form below to apply.
                    </p>

                    {submitted ? (
                        <div className="submission-success">
                            <h3>Let's go!</h3>
                            <p>We will get back to you soon!</p>
                            <button onClick={() => setSubmitted(false)} className="cta-button">Send Another</button>
                        </div>
                    ) : (
                        <>
                            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onLoad={() => {
                                if (submitted) return; // Prevent initial load trigger if logic differs
                            }}></iframe>
                            <form
                                className="hiring-form"
                                action="https://docs.google.com/forms/d/e/1FAIpQLSfzSkMR9OOjk9vVpia5XRwGqYBx-BIc5tg8QlvdRs1mPij9ag/formResponse"
                                method="POST"
                                target="hidden_iframe"
                                onSubmit={() => {
                                    setTimeout(() => setSubmitted(true), 1000); // Simulate success as we can't detect iframe load reliably cross-origin
                                }}
                            >
                                <div className="form-group">
                                    <input type="text" name="entry.580867206" placeholder="Your Name" required className="form-input" />
                                    <input type="email" name="entry.15657967" placeholder="Your Email" required className="form-input" />
                                    <input type="text" name="entry.1737831641" placeholder="Role Applying For" required className="form-input" />
                                </div>
                                <div className="form-group">
                                    <input type="url" name="entry.1694940078" placeholder="Portfolio / LinkedIn URL" className="form-input" />
                                    <input type="text" name="entry.1008020908" placeholder="Why do you want to join us?" required className="form-input" />
                                </div>
                                <button type="submit" className="cta-button">Send Application</button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
