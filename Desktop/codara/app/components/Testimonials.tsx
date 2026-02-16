import Image from 'next/image';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Amir Hassan",
            role: "Founder, GTA Cars",
            location: "Dubai, UAE",
            content: "Codara transformed our digital presence. The new platform increased our inquiry rate by 40%. Their understanding of the premium market is unmatched.",
        },
        {
            name: "Rajesh Kumar",
            role: "CEO, TechFlow Solutions",
            location: "Bangalore, India",
            content: "Delivered beyond expectations. The team is incredibly professional, responsive, and technically sound. Highly recommend for complex projects.",
        },
        {
            name: "Priya Sharma",
            role: "Marketing Director, Fun-Art",
            location: "Mumbai, India",
            content: "The AI art generator they built is flawless. User engagement skyrocketed thanks to the intuitive UI and smooth performance.",
        },
        {
            name: "Sarah Mitchell",
            role: "Product Manager, EZ-Poster",
            location: "San Francisco, USA",
            content: "Fast turnaround, clean code, and excellent communication. They understood our vision from day one and executed perfectly.",
        },
        {
            name: "Mohammed Al-Rashid",
            role: "CTO, RuneLuck",
            location: "Abu Dhabi, UAE",
            content: "Built our entire gaming platform in record time. The scalability and performance they delivered exceeded all our requirements.",
        },
        {
            name: "Ananya Patel",
            role: "Founder, DesignHub",
            location: "Delhi, India",
            content: "Working with Codara was seamless. They brought fresh ideas, solved complex problems, and delivered a product we're proud of.",
        },
        {
            name: "James Thompson",
            role: "Director, TechVentures",
            location: "London, UK",
            content: "Outstanding work on our fintech platform. The attention to security and user experience was impressive. Codara delivered a world-class product.",
        },
        {
            name: "Li Wei",
            role: "VP Engineering, DataSync",
            location: "Singapore",
            content: "Exceptional technical skills and project management. They handled our complex data integration challenges with ease and professionalism.",
        },
        {
            name: "Emily Rodriguez",
            role: "Startup Founder, QuickServe",
            location: "Toronto, Canada",
            content: "From concept to launch in just 8 weeks! Codara made our vision a reality with incredible speed and quality. Couldn't be happier.",
        }
    ];

    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <p className="testimonials-label">TESTIMONIALS</p>
                <h2 className="testimonials-headline">
                    Trusted by clients across<br />
                    the globe.
                </h2>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="testimonial-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                    <span className="testimonial-location">{testimonial.location}</span>
                                </div>
                            </div>
                            <p className="testimonial-text">
                                "{testimonial.content}"
                            </p>
                        </div>
                    ))}

                    <div className="testimonial-card testimonial-more">
                        <div className="testimonial-more-content">
                            <div className="testimonial-more-icon">+</div>
                            <h4>More to come...</h4>
                            <p>We're constantly working with amazing clients. Check back soon for more success stories!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
