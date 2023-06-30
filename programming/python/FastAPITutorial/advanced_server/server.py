from fastapi import FastAPI
from create_server import FastAPIServerCreator

server = FastAPIServerCreator(debug=True)

app = server.get_server()


@app.get("/")
def index():
    return {"message": "Hello World"}
