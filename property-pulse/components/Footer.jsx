import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-200 mt-auto py-4'>
      <div className='flex md:flex-row flex-col justify-between items-center mx-auto px-4 container'>
        <div className='mb-4 md:mb-0'>
          <Image src={logo} alt='Logo' className='w-auto h-8' />
        </div>
        <div className='flex flex-wrap justify-center md:justify-start mb-4 md:mb-0 text-gray-900'>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/properties'>Properties</Link>
            </li>
            <li>
              <Link href='/terms'>Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='mt-2 md:mt-0 text-gray-500 text-sm'>
            &copy; {currentYear} PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
