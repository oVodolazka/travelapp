import TopBook from '@/homepage/components/top-book';
import Image from 'next/image'
import Search from '@/components/search';
import Partners from '@/components/partners';
import Link from 'next/link';
import Testimonials from '@/homepage/components/testimonials';
import news from '@/consts/news';
import NewsList from '@/components/news-list';

export const metadata = {
  title: 'Fancy Testimonials Slider - Cruip Tutorials',
  description: 'Page description',
}

const Home = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image src="/assets/images/frontpage/bg2.jpeg"
        width={700}
        height={700}
        alt="Picture of the author"
        className="w-full h-[430px]">
      </Image>

      <div className='w-9/12 max-w-screen-xl'>
        <div className="bg-white relative top-[-145px] shadow-lg rounded-2xl p-8 shadow" >
          <h5 className="text-sky-600 text-4xl font-bold">Good Morning!</h5>
          <p className="text-3xl my-3">Explore beautiful places in the world with JETSET</p>
          <Search />
        </div>
        <div className=''>
          <h4 className='text-center'>WHY CHOOSE US?</h4>
          <div className='pt-10 grid gap-10 md:grid-cols-3 grid-cols-1'>
            <div className='flex items-center flex-col'>
              <div className='bg-sky-50 w-14 h-14 rounded flex items-center justify-center'>
                <Image src="/assets/icons/price-icon.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                  className="w-7 h-7"
                />
              </div>
              <h1 className='text-center mt-8 mb-2'>Beyond Travel – We Create Moments!</h1>
              <p className='w-10/12 text-center'>At JETSET, we dont just plan trips; we craft moments that last a lifetime. Choose us for a travel experience that goes beyond the ordinary. Immerse yourself in the joy of exploration while we handle the details. Join us in creating unforgettable memories and be your passport to extraordinary journeys.
              </p>
            </div>
            <div className='flex items-center flex-col'>
              <div className='bg-sky-50 w-14 h-14 rounded flex items-center justify-center '>
                <Image src="/assets/icons/secure-icon.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                  className="w-7 h-7"
                />
              </div>
              <h1 className='text-center m-8 mb-2'>Unforgettable Memories!</h1>
              <p className='w-10/12 text-center'>Why settle for ordinary when you can have extraordinary? We specialize in crafting tailor-made experiences just for you. Choose us for personalized itineraries, handpicked accommodations, and unique adventures. Your dream vacation begins with JETSET – where every moment is curated with care.</p>
            </div>
            <div className='flex items-center flex-col'>
              <div className='bg-sky-50 w-14 h-14 rounded flex items-center justify-center '>
                <Image src="/assets/icons/exp-icon.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                  className="w-7 h-7"
                />
              </div>
              <h1 className='text-center mt-8 mb-2'>Discover Your World with Confidence!</h1>
              <p className='w-10/12 text-center'>Choose us, JETSET , for worry-free adventures! Our expert team crafts seamless travel experiences, ensuring every detail is meticulously planned. From exotic destinations to hidden gems, embark on a journey with us, where your only focus is creating memories.</p>
            </div>
          </div>
        </div>
        <div className='mt-32 h-44'>
          <h4 className='text-center'>OUR PARTNERS</h4>
          <Partners />
        </div>
        <div className='mt-20 mb-32 flex flex-col justify-center relative'>
          <h4 className='text-center'>TOP BOOK NOW</h4>
          <div className='flex mt-16 grid gap-10 xl:grid-cols-4 md:grid-cols-2 grod-cols-1 '>
            <TopBook />
          </div>
        </div>
      </div>
      <div className='h-20 w-full bg-maldives h-fit flex justify-center'>
        <div className='w-9/12 max-w-screen-xl pt-36 mb-20'>
          <h5 className='mb-28'>EXPLORE MALDIVES</h5>
          <div className='border-b border-white mb-16'></div>
          <div className='flex flex-col xl:flex-row items-center'>
            <div className='xl:w-5/12 w-full'>
              <h3 className='text-white text-semibold xl:w-10/12 w-full '>The Maldives is a haven for water enthusiasts, offering world-class snorkeling and diving amidst vibrant coral reefs teeming with marine life. Sunset cruises, spa retreats, and romantic beach dinners make it an ideal destination for couples seeking a romantic getaway. </h3>
              <button className='bg-white py-3 px-8 mt-6 rounded-full'>See All</button>
            </div>
            <div className='w-12/12 xl:w-7/12 flex flex-col md:flex-row justify-start xl:justify-between xl:mt-0 mt-10'>
              <div className='mt-10 md:mt-0'>
                <Image src={'/assets/images/frontpage/mal1.avif'} width={180} height={300} alt='hotel' className='h-56 w-full rounded-2xl object-cover' />
                <h2 className='text-white bold mt-2'>Serene Serendipoty</h2>
              </div>
              <div className='xl:mx-4 md:mx-10 mx-0 mt-10 md:mt-0'>
                <Image src={'/assets/images/frontpage/mal4.jpeg'} width={180} height={300} alt='hotel' className='h-56 w-full rounded-2xl object-cover' />
                <h2 className='text-white mt-2'>Verdant Vista</h2>
              </div>
              <div className='mt-10 md:mt-0'>
                <Image src={'/assets/images/frontpage/mal3.jpeg'} width={180} height={300} alt='hotel' className='h-56 w-full rounded-2xl object-cover' />
                <h2 className='text-white mt-2'>Azure Heaven</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-9/12 max-w-screen-xl mt-10 mb-20'>
        <div className='flex justify-between flex-col items-center'>
          <h4 className='my-16'>FEATURE NEWS</h4>
          <div className='grid gap-10 md:grid-cols-3 grid-cols-1 justify-between'>
            <NewsList news={news.slice(0, 3)} />
          </div>
          <Link href='/news'>
            <button className='mt-14 border px-4 py-3 rounded-2xl w-32 my-0 mx-auto'> See All -</button>
          </Link>
        </div>
      </div>
      <div className='testimonials h-fit w-full flex flex-col items-center'>
        <h4 className='text-white my-20 font-[700]'>Testimonials</h4>
        <div className='grid gap-16 md:gap-10 lg:grid-cols-3 grid-cols-1 w-9/12 max-w-screen-xl mb-32'>
          <Testimonials />
        </div>
      </div>
      <div className='md:w-9/12 w-full max-w-screen-xl md:py-[160px] py-[80px]'>
        <div className='flex rounded-2xl flex-col md:flex-row'>
          <Image src={'/assets/images/frontpage/bg9.avif'} width={180} height={300} alt='hotel' className='md:w-5/12 w-full h-auto md:rounded-s-2xl object-cover' />
          <div className='md:w-7/12 bg-slate-100 rounded-e-2xl xl:p-16 md:p-6  p-12'>
            <span className='md:text-4xl text-s text-center font-semibold'>Get special offers, and more from travelworld</span>
            <div className='bg-white p-3 rounded-full justify-between md:mt-8 mt-4 flex shadow-md'> <input placeholder='Enter your email' type="text" className="ms-5 border-none focus:outline-none focus:border-none hover:border-none" />
              <button className='bg-sky-600 rounded-full text-white md:text-s text-xs md:px-5 md:py-2 px-3 py-1'>Subscribe</button> </div>
          </div>
        </div>
      </div>
    </main>
  );
}


export default Home