import ObservationService from '@/services/observation.service';
import Link from 'next/link';

export default function Home() {
    return (
        <section id="home">
            <h1>Home</h1>

            <Link href={'/observations'}>Observations</Link>
        </section>
    );
}
