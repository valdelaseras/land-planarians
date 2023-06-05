import '../styles/globals.css'

export const metadata = {
    title: 'Planarians',
    description: 'Collecting land planarian data',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
