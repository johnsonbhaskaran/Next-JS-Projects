import Link from "next/link";

const PropertiesPage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Properties Page</h1>
      <Link className='px-3 py-1 border rounded' href='/'>
        Go back Home
      </Link>
    </div>
  );
};
export default PropertiesPage;
