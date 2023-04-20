// DTOs for weather data
// Path: src\dtos\weather.dto.ts
export class getWeatherDto {
    postcode: string;
    countryCode: string;

    constructor(postcode: string, countryCode: string) {
        this.postcode = postcode;
        this.countryCode = countryCode;
    }
}