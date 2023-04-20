import { HttpClient } from "../utils";
import { getWeatherDto } from "../dtos/weather.dto";
import { WeatherDataSchema } from "../schemas/weatherData.schema";

export class WeatherApi extends HttpClient {
    private apiKey: string;
    constructor() {
        super('https://api.openweathermap.org/data/2.5');

        // Read the API key from the environment
        this.apiKey = process.env.OPEN_WEATHER_API_KEY;
    }

    public async getWeather(payload: getWeatherDto): Promise<WeatherDataSchema> {
        const data = await this.client.get(`/weather?zip=${payload.postcode},${payload.countryCode}&appid=${this.apiKey}`);
        const formattedData = new WeatherDataSchema(
            data.data.coord.lon,
            data.data.coord.lat,
            data.data.weather[0].main,
            data.data.weather[0].description,
            data.data.main.temp,
            data.data.main.feels_like,
            data.data.main.temp_min,
            data.data.main.temp_max,
            data.data.main.pressure,
            data.data.main.humidity,
        );
        return formattedData;
    }
}

