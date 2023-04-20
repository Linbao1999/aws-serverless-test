import { IsNumber, IsString } from 'class-validator';

// a schema class for validating the weather data
export class WeatherDataSchema {
    @IsNumber()
    lon: number;
    @IsNumber()
    lat: number;
    @IsString()
    main: string;
    @IsString()
    description: string;
    @IsNumber()
    temp: number;
    @IsNumber()
    feels_like: number;
    @IsNumber()
    temp_min: number;
    @IsNumber()
    temp_max: number;
    @IsString()
    pressure: number;
    @IsNumber()
    humidity: number;

    constructor(lon: number, lat: number, main: string, description: string, temp: number, feels_like: number, temp_min: number, temp_max: number, pressure: number, humidity: number) {
        this.lon = lon;
        this.lat = lat;
        this.main = main;
        this.description = description;
        this.temp = temp;
        this.feels_like = feels_like;
        this.temp_min = temp_min;
        this.temp_max = temp_max;
        this.pressure = pressure;
        this.humidity = humidity;
    }
}