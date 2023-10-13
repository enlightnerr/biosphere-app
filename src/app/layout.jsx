import './globals.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
export const metadata = {
  title: 'Biosphere',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-2 p-2">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
