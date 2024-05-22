'use client';
import { useEffect, useState } from "react";
import InspiredCard from "./components/inspired-card";

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

const GetIspired: React.FC = () => {
    const [weather, setWeather] = useState<IWeatherData[]>([]);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/custom/');
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data: IWeatherData[] = await response.json();
            setWeather(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className='flex flex-col items-center mt-10 mb-44'>
            <div className="w-9/12 max-w-screen-xl">
                <h4 className="text-center mb-10">Where to go on holiday? Get inspired!</h4>
                <p className="font-light text-xl text-center mt-10 mb-8">
                    Welcome to a world of wanderlust and endless horizons! Embark on a journey with our travel page, where every image tells a story and every weather description paints a vivid picture of adventure. Discover the allure of diverse destinations through a captivating collection of images that showcase the beauty of each place in every season.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    {weather.map((item, index) => <InspiredCard key={index} data={item} />)}
                </div>
            </div>
        </section>
    );
};

export default GetIspired;