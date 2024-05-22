import Image from 'next/image';

const Footer = () => {

  return (
    <footer className=' text-white bg-sky-950'>
      <div className="flex justify-center py-6">
        <div className="flex flex-wrap justify-between w-9/12 max-w-screen-xl">
          <div className='flex'>
            <div className='flex flex-col md:mr-20 mr-10'>
              <h1 className='mb-2'>Support</h1>
              <span className='font-[200]'>Help Center</span>
              <span className='font-[200]'>Safety Information</span>
              <span className='font-[200]'>Guides</span>
            </div>
            <div className='flex flex-col md:mr-20 mr-10'>
              <h1 className='mb-2'>Company</h1>
              <span className='font-[200]'>About Us</span>
              <span className='font-[200]'>Privacy Policy</span>
              <span className='font-[200]'>Guides</span>
              <span className='font-[200]'>Community Blog</span>
            </div>
            <div className='flex flex-col'>
              <h1 className='mb-2'>Contact</h1>
              <span className='font-[200]'>FAQ</span>
              <span className='font-[200]'>Get In Touch</span>
              <span className='font-[200]'>Partnerships</span>
              <span className='font-[200]'>Terms Of Services</span>
            </div>
          </div>
          <div className='flex flex-col md:items-end'>
            <h1 className='mb-2'>Social</h1>
            <div className='flex jusricy-between'>
              <Image src="/assets/icons/tiktok.svg" height="20" width="20" alt='youtube' className='me-3' />
              <Image src="/assets/icons/twitter.svg" height="20" width="20" alt='youtube' className='me-3' />
              <Image src="/assets/icons/facebook.svg" height="20" width="20" alt='youtube' className='me-3' />
              <Image src="/assets/icons/youtube.svg" height="20" width="20" alt='youtube' className='' />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}


export default Footer