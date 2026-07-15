import { Inter, IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-ibm-plex-mono' });

export const metadata = {
  title: 'Vignesh E — React.js, Next.js & Appian Developer',
  description: 'Portfolio of Vignesh E, frontend and low-code developer focused on React.js, Next.js, and Appian integrations.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
