const Hero = () => {
  return (
    <section className='bg-blue-700 mb-4 py-20'>
      <div className='flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='text-center'>
          <h1 className='font-extrabold text-white text-4xl sm:text-5xl md:text-6xl'>
            Find The Perfect Rental
          </h1>
          <p className='my-4 text-white text-xl'>
            Discover the perfect property that suits your needs.
          </p>
        </div>
        {/* <!-- Form Component --> */}
        <form className='flex md:flex-row flex-col items-center mx-auto mt-3 w-full max-w-2xl'>
          <div className='mb-4 md:mb-0 md:pr-2 w-full md:w-3/5'>
            <label htmlFor='location' className='sr-only'>
              Location
            </label>
            <input
              type='text'
              id='location'
              placeholder='Enter Location (City, State, Zip, etc'
              className='bg-white px-4 py-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 w-full text-gray-800'
            />
          </div>
          <div className='md:pl-2 w-full md:w-2/5'>
            <label htmlFor='property-type' className='sr-only'>
              Property Type
            </label>
            <select
              id='property-type'
              className='bg-white px-4 py-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 w-full text-gray-800'
            >
              <option value='All'>All</option>
              <option value='Apartment'>Apartment</option>
              <option value='Studio'>Studio</option>
              <option value='Condo'>Condo</option>
              <option value='House'>House</option>
              <option value='Cabin Or Cottage'>Cabin or Cottage</option>
              <option value='Loft'>Loft</option>
              <option value='Room'>Room</option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 mt-4 md:mt-0 md:ml-4 px-6 py-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 w-full md:w-auto text-white'
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};
export default Hero;
