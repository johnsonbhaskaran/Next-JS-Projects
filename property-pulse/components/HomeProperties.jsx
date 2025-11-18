import Link from "next/link";
import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";

const HomeProperties = () => {
  const recentProperties = properties.sort(() => Math.random() - Math.random()).slice(0, 3);

  return (
    <>
      <section className='px-4 py-6'>
        <div className='m-auto container-xl lg:container'>
          <h2 className='mb-6 font-bold text-blue-500 text-3xl text-center'>Recent Properties</h2>
          <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
            {recentProperties === 0 ? (
              <p>No properties found</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>
      <section className='m-auto my-10 px-6 max-w-lg'>
        <Link
          href='/properties'
          className='block bg-black hover:bg-gray-700 px-6 py-4 rounded-xl text-white text-center'
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};
export default HomeProperties;
