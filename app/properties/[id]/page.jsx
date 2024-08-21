import PropertyHeaderImage from '@/components/PropertyHeaderImage'
import PropertyDetails from '@/components/PropertyDetails'
import connectDB from '@/config/database'
import Property from '@/models/Property'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const PropertyPage = async ({ params }) => {
  await connectDB()
  const property = await Property.findById(params.id).lean()

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className='container px-6 py-6 m-auto'>
          <Link
            href='/properties'
            className='flex items-center text-blue-500 hover:text-blue-600'
          >
            <FaArrowLeft className='mr-2' /> Back to Properties
          </Link>
        </div>
      </section>
      <section class='bg-blue-50'>
        <PropertyDetails property={property} />
        <div class='container m-auto py-10 px-6'></div>
        <div class='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'></div>
      </section>
    </>
  )
}

export default PropertyPage
