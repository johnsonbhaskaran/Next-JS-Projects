"use client";

import Link from "next/link";
import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";

const PropertiesPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const pathname = usePathname();

  console.log("Hello World");

  return (
    <div>
      <h1 className='text-3xl'>Properties Page</h1>
      {/* <Link className='px-3 py-1 border rounded' href='/'>
        Go back Home
      </Link> */}
      <button className='px-3 py-1 border rounded' onClick={() => router.push("/")}>
        Go Home {id} {name} {pathname}
      </button>
    </div>
  );
};
export default PropertiesPage;
