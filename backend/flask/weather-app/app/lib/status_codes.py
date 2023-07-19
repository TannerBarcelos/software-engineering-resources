from enum import Enum

class StatusCodes(Enum):
    """
    Enum class for status codes to be used in the application.
    """
    OK = 200
    CREATED = 201
    DELETED = 204
    BAD_REQUEST = 400
    UNAUTHORIZED = 401
    NOT_FOUND = 404
    ERROR = 500
    SERVICE_UNAVAILABLE = 503
    GATEWAY_TIMEOUT = 504
