import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface INewsItem {
    description: string;
    text: string;
    imgSrc: string;
    date: string;
    id: string
}

interface INewsListProps {
    news: INewsItem[]
}

const NewsList = ({ news }: INewsListProps) => {

    return (
        <>
            {news.map((item: INewsItem) => (
                <div key={item.id} className='h-full'>
                    <Link href={`news/${item.id}`} className='rounded-2xl shadow  mt-7 md:mt-0 pb-4 shadow-md flex flex-col justify-between h-full'>
                        <div className=''>
                            <Image src={item.imgSrc} width={200} height={200} alt='news' className='w-full rounded-t-2xl h-60 object-cover' />
                            <div className='px-5 mt-4 flex'>
                                <Image src={"/assets/icons/calendar-icon.png"} width={30} height={18} alt='calendar' className='mr-2 w-5 h-5' />
                                <p>{item.date}</p>
                            </div>
                            <div>
                                <h2 className='px-5 mt-2 font-bold'>{item.description}</h2>
                            </div>
                            <p className='px-5 mt-2'>{`${item.text.split('.').slice(0,2).join('.')}.`}</p>
                        </div>
                        <div className='flex px-5 mt-4'>
                            <div className='border rounded-full w-6 h-6 flex justify-center items-center text-sky-600 border-sky-600'>&#10095;</div>
                            <span className='ml-2 text-sky-600'>Read more</span>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default NewsList

