from flask import render_template
from dotenv import load_dotenv
from waitress import serve
import conf
from create_app import create_app

load_dotenv()

if __name__ == '__main__':
    # Create the Flask app using the app factory pattern
    app = create_app()

    @app.route('/')
    @app.route('/index')
    def index():
        return render_template('index.html')

    serve(app, host=conf.APP_HOST, port=conf.APP_PORT)
    