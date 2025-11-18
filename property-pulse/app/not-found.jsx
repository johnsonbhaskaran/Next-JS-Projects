import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className='flex-grow bg-blue-50 min-h-screen'>
      <div className='m-auto py-24 max-w-2xl container'>
        <div className='bg-white shadow-md m-4 md:m-0 mb-4 px-6 py-24 border rounded-md'>
          <div className='flex justify-center'>
            <FaExclamationTriangle className='text-yellow-400 text-8xl' />
          </div>
          <div className='text-center'>
            <h1 className='mt-4 mb-2 font-bold text-3xl'>Page Not Found</h1>
            <p className='mb-10 text-gray-500 text-xl'>
              The page you are looking for does not exist.
            </p>
            <Link
              href='/'
              className='bg-blue-700 hover:bg-blue-800 px-6 py-4 rounded font-bold text-white'
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-grow'></div>
    </section>
  );
};
export default NotFoundPage;
