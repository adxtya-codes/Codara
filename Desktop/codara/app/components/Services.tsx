import Image from 'next/image';

export default function Services() {
    const services = [
        {
            title: 'Website Development',
            description: 'Building fast, scalable, and secure websites to showcase and grow your business',
        },
        {
            title: 'Chat Bots',
            description: 'AI-powered chatbots that can handle customer queries and provide instant support',
        },
        {
            title: 'Whatsapp, Discord and Telegram Bots',
            description: 'Automating tasks, engaging users, and enhancing interactions across these platforms while you sit worry free',
        },
        {
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile apps for iOS and Android',
        },
        {
            title: 'Automation Tools',
            description: 'We have a list of ideas specific to your business, We can automate almost anything!',
        },
        {
            title: 'Digital Marketing and Brand Identity',
            description: 'We Provide Digital Marketing and Brand Identity services to help you grow your business',
        },
    ];

    return (
        <section className="services-section" id="services">
            <div className="services-container">
                <div className="services-intro">
                    <div className="services-illustration">
                        <Image
                            src="/services.svg"
                            alt="Services illustration"
                            width={200}
                            height={200}
                        />
                    </div>
                    <h2 className="services-headline">
                        At Codara, we are committed to delivering high-quality design solutions that drive business growth, We have helped 50+ clients all over the world.
                    </h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
