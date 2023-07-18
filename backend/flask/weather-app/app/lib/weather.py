"""
Weather Module
"""

from dotenv import load_dotenv
from pprint import pprint
import os
import requests

load_dotenv()


"""
This function will get the current weather for a given city

Parameters
----------
city: str
    The city to get the weather for
"""
def get_current_weather(city='San Jose'): 
    api_key = os.getenv("OPEN_WEATHER_API_KEY")
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&appid={api_key}"
    response = requests.get(url).json()
    pprint(response)
    return response

# Using as a script rather than a module / flask app
if __name__ == "__main__":
    city = input('Enter a city to get weather for: ').strip()

    # If user does not enter a city, intercept the empty string and use San Jose as the default
    if not city:
        city = 'San Jose'

    get_current_weather(city)