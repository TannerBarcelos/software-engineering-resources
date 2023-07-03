from create_server import FastAPIServerCreator

server = FastAPIServerCreator(debug=True)

app = server.get_server()


@app.get("/")
def index():
    return {"message": "Hello World"}


# Run the server using uvicorn
# uvicorn advanced_server.server:app --reload from root (above advanced_server folder)
