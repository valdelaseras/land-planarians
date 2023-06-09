import '../theme/styles/globals.css';
import Nav from '@/components/Nav';
// import { ThemeProvider } from "@mui/material";
// import { theme } from "@/theme/theme";

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
        // <ThemeProvider theme={theme}>
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
        // </ThemeProvider>
    );
}
