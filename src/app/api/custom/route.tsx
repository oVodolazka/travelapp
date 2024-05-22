export const GET = async () => {
    try {
        const cities = ["Paris", "Amsterdam", "Rome, IT", "Venice, IT", "Milan", "Bologna", "Lyon", "Barcelona", "Madrid", "Lisbon"];
        const apiKey = "0a68066f5fdfc3e8a52176455dde11ab";

        const weatherData = [];

        for (const city of cities) {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&APPID=${apiKey}`
                );

                if (!response.ok) {
                    throw new Error(`Error fetching data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();
                weatherData.push(data);
            } catch (error) {
                console.error(`Error fetching data for ${city}: ${error.message}`);
            }
        }

        return new Response(JSON.stringify(weatherData), { status: 200 });

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
};
