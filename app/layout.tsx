import "../styles/globals.css";
import Header from './Header';

type Props = {
    children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
    return (
        <html lang="pt-br">
            <head>
                <title>Meta Messenger</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="crossorigin"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                    rel="stylesheet"
                />
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}