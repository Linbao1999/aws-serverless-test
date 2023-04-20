import { WeatherDataSchema } from '../schemas/weatherData.schema'
import { WeatherApi } from '../api/weatherApi';
import { getWeatherDto } from '../dtos/weather.dto';
export const getWeather = async (payload: getWeatherDto): Promise<WeatherDataSchema> => {
  const weatherApi = new WeatherApi();
  const weather = await weatherApi.getWeather(payload);
  return weather;  
};
