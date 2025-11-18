import PropertyCard from "@/components/PropertyCard";
// import properties from "@/properties.json";

async function fetchProperties() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  } catch (err) {
    console.error(err);
  }
}

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
