from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def index():
    return {"message": "Hello World"}


# Run the server using uvicorn
# uvicorn basic_server.server:app --reload


"""
This example shows how to create a basic FastAPI server with a single endpoint within the server.py file.

This does not use the FastAPIServerCreator class from the advanced_server folder and instead creates the FastAPI server directly in the server.py file.

While this is fine, the advanced_server approach is better for larger projects with many endpoints as it keeps the server.py file clean and the FastAPI server can be created in a separate file.
"""
