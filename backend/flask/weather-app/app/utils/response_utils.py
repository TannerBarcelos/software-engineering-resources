def capitalize_string(string) -> str:
    """Capitalize the first letter of a string.

    Args:
        string (str): The string to capitalize.

    Returns:
        str: The capitalized string.
    """
    return string.capitalize()

def format_float(num, precision=1) -> str:
    """Format a float to one decimal place.

    Args:
        num (float): The float to format.

    Returns:
        str: The formatted float.
    """
    return f"{num:.{precision}f}"