from flask import Flask, request, render_template
from lib.weather import get_current_weather
from utils.response_utils import capitalize_string, format_float
from waitress import serve
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Flask Server Instance
app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/weather')
def get_weather():
    
    city = request.args.get('city').strip()

    if not city:
        city = 'San Jose'

    raw_weather_data = get_current_weather(city)  

    # If city is not found, return a 404
    if raw_weather_data['cod'] == '404':
        return render_template('city-not-found.html', name=city), 404

    # Data to be passed to the template
    # Note: The template will use this data to render the HTML
    # Note: These raw data values come from the OpenWeatherMap API response and that is how i know what to use
    template_data = {
        'title': raw_weather_data['name'],
        'status': capitalize_string(raw_weather_data['weather'][0]['description']),
        'temp': format_float(raw_weather_data['main']['temp']),   
        'feels_like': format_float(raw_weather_data['main']['feels_like']),
    }

    return render_template('weather.html', **template_data)

if __name__ == '__main__':
    
    options = {
        'host': os.getenv('APP_HOST'),
        'port': os.getenv('APP_PORT')
    }

    serve(app, **options)