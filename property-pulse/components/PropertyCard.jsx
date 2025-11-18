import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaRulerCombined, FaMoneyBill, FaMapMarker } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className='relative shadow-md rounded-xl'>
      <Image
        src={`/images/properties/${property.images[1]}`}
        height={0}
        width={0}
        sizes='100vw'
        alt=''
        className='rounded-t-xl w-full h-auto'
      />
      <div className='bg-blue-50 p-4 rounded-b-xl text-black'>
        <div className='mb-6 text-left lg:text-left md:text-center'>
          <div className='text-gray-600'>{property.type}</div>
          <h3 className='font-bold text-xl'>{property.name}</h3>
        </div>
        <h3 className='top-[10px] right-[10px] absolute bg-white/80 px-4 py-2 rounded-lg font-bold text-blue-500 md:text-center text-right lg:text-right'>
          ${getRateDisplay()}
        </h3>

        <div className='flex justify-center gap-4 mb-4 text-gray-500'>
          <p>
            <FaBed className='inline mr-1' /> {property.beds}{" "}
            <span className='md:hidden lg:inline'>Beds</span>
          </p>
          <p>
            <FaBath className='inline mr-1' /> {property.baths}{" "}
            <span className='md:hidden lg:inline'>Baths</span>
          </p>
          <p>
            <FaRulerCombined className='inline mr-1' />
            {property.square_feet} <span className='md:hidden lg:inline'>sqft</span>
          </p>
        </div>

        <div className='flex justify-center gap-4 mb-4 text-green-900 text-sm'>
          {property.rates.nightly && (
            <p>
              <FaMoneyBill className='inline mr-1 mb-1' /> Nightly
            </p>
          )}
          {property.rates.weekly && (
            <p>
              <FaMoneyBill className='inline mr-1 mb-1' /> Weekly
            </p>
          )}
          {property.rates.monthly && (
            <p>
              <FaMoneyBill className='inline mr-1 mb-1' /> Monthly
            </p>
          )}
        </div>

        <div className='mb-5 border border-gray-100'></div>

        <div className='flex lg:flex-row flex-col justify-between mb-4'>
          <div className='flex gap-2 mb-4 lg:mb-0 align-middle'>
            <FaMapMarker className='mt-1 text-orange-700' />
            <span className='text-orange-700'>
              {property.location.city} {property.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg h-[36px] text-white text-sm text-center'
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
