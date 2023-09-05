# Weather
Simple microservices to handle weather all accros the world

# Routes

| name                      | params   | description                   |
|---------------------------|:---------|------------------------------:|
| `/weather/city`           | city (string)     | Request weather from a city name, require geocode service communication to translate name into location         |
| `/weather/location`       | lat,lng (float)  | Request weather from location               |

# Weather data

Use [this](https://open-meteo.com) free api to request weather data.

# Env

Env var requirement :

| name                  | description                   | default       |
|-----------------------|-------------------------------|---------------|
| WEATHER_API_ENDPOINT  | weather api endpoint          |
| WEATHER_API_KEY       | weather api key               |
| GEOCODE_URL           | weather api key               | `http://locahost:3010/geocode`
| HOST                  | MS host default "localhost"   | `locahost`
| PORT                  | MS port default 3000          | `3000`
