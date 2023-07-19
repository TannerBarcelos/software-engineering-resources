## Weather App

This is a learning project for me to learn Flask with Python. I use NodeJS / TS primarily and want to use Python more to do web backend stuff. Therefore, I am **not** using React / separate frontend for this project. I want to focus on the backend and the tutorial I am following is using Jinja2 templates.

### Running the Project Locally

1. Rename `env.local` to `.env` and provide values for each entry in the file.

   > Head to [OpenWeatherMap](https://openweathermap.org/) to get an API key.

2. Create a virtual environment

   ```bash
   python -m venv .venv
   ```

3. Activate the virtual environment

   ```bash
   source .venv/bin/activate
   ```

4. Install the dependencies

   ```bash
   pip install -r ./requirements/requirements.txt
   ```

5. Run the app

   ```bash
   cd app
   python server.py
   ```

6. Open the app in your browser at `http://localhost:<PORT_FROM_.ENV>`

7. When you are done, kill the app and deactivate the virtual environment

   ```bash
    # Kill the app
    CTRL + C

    # Deactivate the virtual environment
   deactivate
   ```

### Running the Project in Docker (Preferred) [WIP]
