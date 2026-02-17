import Header from '../components/Header';
import Footer from '../components/Footer';
import Team from '../components/Team';

export default function TeamPage() {
    return (
        <main>
            <Header />
            <div className="pt-24">
                <Team />
            </div>
            <Footer />
        </main>
    );
}
