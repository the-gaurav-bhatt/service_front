import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Source_Sans_Pro } from 'next/font/google';

export const metadata = {
  title: 'A+ Pathshala',
  description:
    'A+ Pathshala promises to get your first job or internship in tech through A+ Score. It provides bootcamps and courses and guidance on how to succeed in tech Industry. And earn 10 times your salary.  ',
  icons: {
    icon: '/logo.png',
  },
};

import Providers from './Providers';
// If loading a variable font, you don't need to specify the font weight
const ssp = Source_Sans_Pro({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ssp.className}>
        <Providers>
          <header>
            <Navbar />
          </header>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
