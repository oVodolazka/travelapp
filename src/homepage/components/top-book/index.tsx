import Image from 'next/image'

const hotels = [
    {
        name: 'Luxury Haven Hotel',
        price: '$3000',
        location: 'City Center, New York',
        imgSrc: '/assets/images/frontpage/hotel2.jpeg',
        rating: 4.8,
    },
    {
        name: 'Seaside Paradise Resort',
        price: '$1500',
        location: 'Beachfront, Miami',
        imgSrc: '/assets/images/frontpage/bg2.jpeg',
        rating: 4.5,
    },
    {
        name: 'Mountain View Lodge',
        price: '$2000',
        location: 'Serenity Valley, Colorado',
        imgSrc: '/assets/images/frontpage/hotel3.webp',
        rating: 4.3,
    },
    {
        name: 'Urban Retreat Inn',
        price: '$1805',
        location: 'Downtown, San Francisco',
        imgSrc: '/assets/images/frontpage/hotel2.jpeg',
        rating: 4.7,
    },
    {
        name: 'Riverside Retreat Resort',
        price: '$2500',
        location: 'Riverfront, New Orleans',
        imgSrc: '/assets/images/frontpage/bg4.jpeg',
        rating: 4.6,
    },
    {
        name: 'Historic Elegance Hotel',
        price: '$2200',
        location: 'Old Town, Boston',
        imgSrc: '/assets/images/frontpage/bg7.jpeg',
        rating: 4.4,
    },
    {
        name: 'Natures Hideaway Lodge',
        price: '$1800',
        location: 'Woodland Retreat, Oregon',
        imgSrc: '/assets/images/frontpage/bg6.jpeg',
        rating: 4.2,
    },
    {
        name: 'Skyline View Hotel',
        price: '$2800',
        location: 'Sky High Tower, Chicago',
        imgSrc: '/assets/images/frontpage/bg7.jpeg',
        rating: 4.9,
    },
]

const TopBook = () => {

    return (
        <>
            {hotels.map((item) => (
                <div key={item.name} className='mt-3 rating relative duration-700 ease-in-out hover:scale-105 flex flex-col items-center'>
                    <Image src={item.imgSrc} width={280} height={400} alt='hotel' className='aspect-[4/3] rounded-2xl w-full md:w-58 h-60 object-cover' />
                    <div className='flex justify-between mt-4'>
                        <p className='font-semibold'>{item.name}</p>
                        <p className='font-semibold'>{item.price}</p>
                    </div>
                    <div className='flex items-center'>
                        <Image src={'/assets/images/frontpage/location.png'} height={5} width={18} alt='locations' className='mr-2 w-auto h-auto' />
                        <p>{item.location}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TopBook