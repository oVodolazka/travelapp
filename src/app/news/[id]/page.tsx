import React from 'react'
import news from '@/consts/news';
import Image from 'next/image';

interface IPageProps {
    params: {
        id: string
    }
}

const NewsItem = ({ params }: IPageProps) => {
    const item = news.find(item => item.id == params.id)

    if (!item) {
        return null;
    }

    return (
        <>
        <Image src={item.imgSrc} width={1000} height={1000} alt={item.description} className='w-full h-96 object-cover'/>
        
        <div className='flex flex-col items-center'>
            <div className='w-9/12 max-w-screen-xl mt-10 mb-20'>

                <h4 className='mt-10 mb-8 text-center'>
                    {item.description}
                </h4>
                <p className='text-xl text-center leading-8 text-semebold'>
                    {item.text}
                </p>
            </div>
        </ div>
        </>
    )
}

export default NewsItem