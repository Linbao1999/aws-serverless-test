import { returnResponse, errorResponse } from "./return";
import { getWeather } from "../services";
import { getWeatherDto } from "../dtos/weather.dto";
export const myhandler = async (event: any) => {
  try{

    // this is my code, this is my destiny

    const countryCode = event.queryStringParameters.countryCode;
    const postcode = event.queryStringParameters.postcode;
    const apiKey = event.queryStringParameters.apiKey;
    if (!countryCode || !postcode || !apiKey) {
      throw new Error("Missing required parameters");
    }

    if(apiKey !== process.env.API_KEY){
      throw new Error("Invalid API key");
    }

    // check if the country code is valid by verifying if it is 2 english letters
    if (!/^[a-zA-Z]{2}$/.test(countryCode)) {
      throw new Error("Invalid country code");
    }
    // check if the postcode is valid by verifying if it is a string of numbers
    if (!/^\d+$/.test(postcode)) {
      throw new Error("Invalid postcode");
    }
    const weather = await getWeather(new getWeatherDto(postcode, countryCode));
    return returnResponse(JSON.stringify(weather));
  }catch(e){
    return errorResponse(e.message);
  }
}

export const handler = myhandler;