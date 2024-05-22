import Image from 'next/image';
import React from 'react';


interface IWeatherData {
    base: string;
    main: {
        [key: string]: number;
    };
    name: string;
    sys: {
        [key: string]: number;
    };
}

interface IInspiredCardProps {
    data: IWeatherData;
}

const DateTimeDisplay = ({ timestamp }) => {
    const date = new Date(timestamp * 1000); 
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    return (
        <span className='text-xl text-white'>{formattedTime}</span>
    );
};


const InspiredCard: React.FC<IInspiredCardProps> = ({ data }) => {


    return (
        <div className='border-2 border-white relative'>
            <Image src={`/assets/images/inspired/${data.name}.jpeg`} width={200} height={300} alt={data.name} className=' w-full h-full object-cover' />
            <div className="absolute inset-0 flex-col p-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 rounded-md">
                <p className="text-white text-center mr-2 text-4xl">{data.name}</p>
                <p className="text-white text-center text-4xl">{Math.round(data.main.temp)} °C</p>
                <div className='flex flex-col m-4'>
                    <div className='flex'>
                        <p className='text-white text-xl'>  &#9788; Sunrise: <DateTimeDisplay timestamp={data.sys.sunrise} /></p>
                    </div>
                    <div className='flex'>
                        <p className='text-white text-xl'> &#9790; Sunset: <DateTimeDisplay timestamp={data.sys.sunset} /></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InspiredCard;
