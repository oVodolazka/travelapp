import Image from 'next/image'

const testimonials = [
    {
        name: 'Sebastian',
        job: 'Artist',
        imgSrc: '/assets/images/frontpage/pr2.jpeg',
        rating: 5,
        text: 'The itinerary was a perfect balance of exploration and relaxation, and their local insights added a unique touch to our adventure.'
    },
    {
        name: 'Janet',
        job: 'Model',
        imgSrc: '/assets/images/frontpage/pr3.jpeg',
        rating: 4,
        text: 'The attention to detail and customer care were exceptional, ensuring that every moment of our journey was enjoyable. If you are looking for a travel agency that goes the extra mile!'
    },
    {
        name: 'David',
        job: 'Office Manager',
        imgSrc: '/assets/images/frontpage/pr1.jpeg',
        rating: 4,
        text: 'The team went above and beyond to craft an itinerary that perfectly aligned with our interests. Their knowledge of the destinations and commitment to customer satisfaction were evident throughout the entire process. '
    },
];

const Testimonials = () => {

    return (
        <>
            {testimonials.map((item, index) => (
                <div key={index} className='bg-white rounded-2xl p-8 pt-10 relative'>
                    <Image src={item.imgSrc} width={200} height={200} alt='profile-pic' className='rounded-full object-cover absolute testionials-pic' />
                    <div className='flex justify-between pt-4'><h1 className='text-semibold'>{item.name}</h1>
                        <div className='flex'>
                            {[...Array(item.rating)].map((_, starIndex) => (
                                <p key={starIndex} className='text-yellow-300'>&#9733;</p>
                            ))}
                        </div>
                    </div>
                    <p className='font-[200] text-xs'>{item.job}</p>
                    <div className='mt-3'>{item.text}</div>
                </div>
            ))}
        </>
    )
}


export default Testimonials