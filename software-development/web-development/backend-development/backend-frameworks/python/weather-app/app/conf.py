import os

# Overides for development
DEBUG = os.getenv('PYTHON_ENV') == 'development'

# Flask app config
APP_NAME = os.getenv('APP_NAME', 'weather-app')
APP_HOST = os.getenv('APP_HOST', '0.0.0.0')
APP_PORT = os.getenv('APP_PORT', 4242)
