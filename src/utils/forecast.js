const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=91d03c327b9967ab6e2b8e45e8b2e94c&query=' + latitude + ',' + longitude +'&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'In ' + body.location.region + ' it is currently ' + body.current.temperature + ' degress Farenhite out. There is a ' + body.current.precip + '% chance of rain.' + ' The sky here is ' + body.current.weather_descriptions[0] + ' the wind speed here is ' + body.current.wind_speed + ' km/h')
        }
    })
}

module.exports = forecast