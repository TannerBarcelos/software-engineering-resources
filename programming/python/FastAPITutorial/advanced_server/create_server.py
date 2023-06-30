from fastapi import FastAPI

"""
This file contains the FastAPIServerCreator class which is used to create a FastAPI server with a single line of code in server.py.
Using this class, the server.py file can be kept clean and the FastAPI server can be created in a separate file.
This is useful when the server.py file is large and has many endpoints.
This is for clean code and is not necessary. The server.py file can be used to create the FastAPI server. (see documentation for more details)
"""


class FastAPIServerCreator:
    """
    FastAPI server creator class to create a FastAPI server with a single line of code in server.py
    """

    def __init__(self, debug=False):
        self.debug = debug
        # Create the FastAPI server when the class is initialized (when the server.py is imported) and store it in a private variable __server__ (double underscore) so that it can be accessed later using the get_server() method
        self.__server__ = self.__create_server__()

    def __create_server__(self):
        """
        Create a FastAPI server
        :return: FastAPI server
        """
        app = FastAPI(
            debug=self.debug,
            title="FastAPI Server",
            description="FastAPI Server",
            version="1.0.0",
            docs_url="/docs",
        )
        return app

    def get_server(self):
        """
        Get the FastAPI server
        :return: FastAPI server
        """
        return self.__server__
