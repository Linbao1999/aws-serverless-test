# Weather API

## Readme

Steps to deploy and test the service:

1. Git clone 
2. `yarn install`
3. `npx serverless offline start`
4. Send request to http://localhost:3000/development/weather
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

Handler function -> Service layer function -> API helper function

### Data Validation

Some basic data validation is used to validate the query parameters:

- checks if `countryCode` and `postcode` are presented in the query parameters
- checks if the country code is 2 English character
- check if the postcode is a string composed of digits

### API Helper Class

I added an API helper class for fetching weather data from third-party API, which extends the base `HttpClient` class.

## Security

Given that the API is only supposed to be used by the chatbot, I will assume that the chat bot can store a secret key to authenticate itself to the server. 

## Possible Improvements

1. When the postcode and country code do not match, return error message based on the response  received from OpenWeatherMap API.
2. Validate the numeric values of the data returned by OpenWeatherMap API by checking if they fall in a reasonable value range, but it is very unlikely for them to return invalid data. This could be done with `class-validator`. 