import PropertyCard from '@/PropertyCard'
import Link from 'next/link'
import connectDB from '@/config/database'
import Property from '@/models/Property'

const HomeProperties = async () => {
  await connectDB()
  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean()

  return (
    <>
      <section className='px-4 py-6'>
        <div className='px-4 py-6 m-auto container-xl lg:container'>
          <h2 className='mb-6 text-3xl font-bold text-center text-blue-500'>
            Recent Properties
          </h2>
          {recentProperties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              {recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className='max-w-lg px-6 m-auto my-6'>
        <Link
          href='/properties'
          className='block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700'
        >
          View All Properties
        </Link>
      </section>
    </>
  )
}

export default HomeProperties
