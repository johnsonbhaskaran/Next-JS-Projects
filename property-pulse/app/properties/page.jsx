import PropertyCard from "@/components/PropertyCard";
import fetchProperties from "@/utils/fetchProperties";
// import properties from "@/properties.json";

fetchProperties();

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  // Sort properties by ascending date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className='px-4 py-6'>
      <div className='m-auto px-4 py-6 container-xl lg:container'>
        {properties.length === 0 ? (
          <p>No properties found.</p>
        ) : (
          <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default PropertiesPage;
