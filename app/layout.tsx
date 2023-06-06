import '../styles/globals.css';
import Nav from '@/components/Nav';

export const metadata = {
    title: 'Planarians',
    description: 'Collecting land planarian data',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header>
                    <Nav />
                </header>
                <main>
                    <article>{children}</article>
                </main>
            </body>
        </html>
    );
}
