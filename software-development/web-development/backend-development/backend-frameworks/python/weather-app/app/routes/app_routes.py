from flask import Blueprint
from .weather_routes import weather_routes

# Root blueprint which is a container for all other blueprints prefixed with /api (see app/server.py)
api = Blueprint('api', __name__)

api.register_blueprint(weather_routes, url_prefix='/weather')