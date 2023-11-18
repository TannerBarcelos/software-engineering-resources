from flask import Flask
from routes.app_routes import api
import conf # conf is a python module and therefore we can load all its contents into the Flask config using from_object() method

# Application factory -> https://flask.palletsprojects.com/en/2.3.x/patterns/appfactories/
def create_app() -> Flask:
    #  template_folder='../templates', static_folder='../static' if this file was nested somewhere else like app/utils/create_app.py
    app = Flask(__name__)

    # Load the app configuration from conf.py   https://flask.palletsprojects.com/en/2.0.x/config/
    app.config.from_object(conf)

    # Register root blueprint (wrapper for all routes)
    app.register_blueprint(api, url_prefix='/api')

    return app
