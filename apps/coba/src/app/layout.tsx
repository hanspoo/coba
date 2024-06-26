/* eslint-disable @next/next/no-sync-scripts */
import { Footer, Header } from '@coba/components';
import './global.css';

export const metadata = {
  title: 'Welcome to coba',
  description: 'Generated by create-nx-workspace',
};

const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-theme="night">
      <head>
        <title>Coba</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="mx-auto max-w-screen-xl h-screen flex flex-col justify-between">
          <div>
            <Header />
            <div>{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
