import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find the Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <meta name='color-scheme' content='dark light' />
      </head>
      <body>
        <Navbar>MainLayout</Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
};
export default MainLayout;
