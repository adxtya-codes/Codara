import Image from 'next/image';
import Header from '../components/Header';
import Team from '../components/Team';
import Footer from '../components/Footer';

export default function About() {
    return (
        <main>
            <Header />

            <section className="about-hero">
                <div className="about-hero-container">
                    <div className="about-hero-content">
                        <h1 className="about-hero-headline">
                            We are a<br />
                            passionate<br />
                            team
                        </h1>
                        <p className="about-hero-description">
                            At Codara, we combine creativity with technical expertise to build
                            intelligent digital systems that help businesses scale and succeed
                            in the modern world.
                        </p>
                    </div>
                    <div className="about-hero-image">
                        <Image
                            src="/group.png"
                            alt="Codara Team"
                            width={600}
                            height={600}
                            className="group-image"
                            priority
                        />
                    </div>
                </div>
            </section>

            <Team />

            <Footer />
        </main>
    );
}
