import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProcessSteps from './components/ProcessSteps';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <Services />
            <Projects />
            <ProcessSteps />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    );
}
