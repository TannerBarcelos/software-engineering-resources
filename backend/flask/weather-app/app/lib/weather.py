"""
Weather Module
"""
from pprint import pprint
import requests
import os

"""
This function will get the current weather for a given city

Parameters
----------
city: str
    The city to get the weather for
"""

def get_current_weather(city='Honolulu'): 
    api_key = os.getenv('OPEN_WEATHER_API_KEY')
    base_url = os.getenv('OPEN_WEATHER_BASE_URL')
    url = f"{base_url}?q={city}&units=imperial&appid={api_key}"
    response = requests.get(url).json()
    pprint(response)
    return response

# Using as a script rather than a module / flask app
if __name__ == "__main__":
    city = input('Enter a city to get weather for: ').strip()

    # If user does not enter a city, intercept the empty string and use San Jose as the default
    if not city:
        city = 'Honolulu'

    get_current_weather(city)