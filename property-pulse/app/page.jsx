import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Welcome</h1>
      <Link className='px-3 py-1 border rounded' href='/properties'>
        Show Properties
      </Link>
    </div>
  );
};
export default HomePage;
