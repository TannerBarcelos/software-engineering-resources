from flask import Blueprint, request, render_template
from lib.weather import get_current_weather
from lib.status_codes import StatusCodes
from utils.response_utils import capitalize_string, format_float

weather_routes = Blueprint('weather', __name__)

@weather_routes.route('/')
def get_weather():
    city = request.args.get('city').strip()
    if not city:
        city = 'Honolulu'

    raw_weather_data = get_current_weather(city)
    response_code = int(raw_weather_data['cod']) 

    if response_code == StatusCodes.NOT_FOUND.value:
        return render_template('city-not-found.html', name=city), StatusCodes.NOT_FOUND.value

    template_data = {
        'title': raw_weather_data['name'],
        'status': capitalize_string(raw_weather_data['weather'][0]['description']),
        'temp': format_float(raw_weather_data['main']['temp']),   
        'feels_like': format_float(raw_weather_data['main']['feels_like']),
    }

    return render_template('weather.html', **template_data), StatusCodes.OK.value