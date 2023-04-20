# Weather API

## Readme

Steps to deploy and test the service:

1. Git clone 
2. `yarn install`
3. Create a `.env` file, add envirnment variables `API_KEY`(anything is fine) and `OPEN_WEATHER_API_KEY` (the key for accessing Open Weather Map API)
4. `npx serverless offline start`
5. Send request to http://localhost:3000/development/weather
   - Sample request:
     - query parameters:
       - apiKey: the one you set in `.env`
       - postcode: 2000
       - countryCode: au



# Implementation

## File Structure

In addition to the folders in the boilerplate, I added additional folders: 

- `schemas`: stores classes that used to validate the data that comes out from service layer classes. 
- `dtos`: stores Data Transfer Object classes that are used for passing data between different layers.

## Architecture

Handler function (Parse and clean request data) -> Service layer function (handles business logic) -> API helper function (util function for fetching data using third-party API)

### Data Validation

Some basic data validation is used to validate the query parameters:

- checks if `countryCode` and `postcode` are presented in the query parameters
- checks if the country code is 2 English character
- check if the postcode is a string composed of digits

### API Helper Class

I added an API helper class for fetching weather data from third-party API, which extends the base `HttpClient` class.

## Security

The chat bot will attach a secret key in the header, which should be the same as the one that gets stored in the server-side. This won't be very secure with HTTP request, but with HTTPS request it is relatively safe. 

## Possible Improvements

1. When the postcode and country code do not match, return error message based on the response  received from OpenWeatherMap API.
2. Validate the numeric values of the data returned by OpenWeatherMap API by checking if they fall in a reasonable value range. This could be done with `class-validator`. 
