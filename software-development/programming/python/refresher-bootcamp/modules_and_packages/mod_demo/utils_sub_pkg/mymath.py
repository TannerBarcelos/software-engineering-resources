def add(*args):
    start = 0
    for arg in args:
        start += arg
    return start


def sub(*args):
    start = 0
    for arg in args:
        start -= arg
    return start


def mul(*args):
    start = 1
    for arg in args:
        start *= arg
    return start


def div(*args):
    start = 1
    for arg in args:
        start /= arg
    return start


if __name__ == "__main__":
    print("Running mymath.py as main")
    print(add(1, 2, 3, 4, 5))
    print(sub(1, 2, 3, 4, 5))
    print(mul(1, 2, 3, 4, 5))
    print(div(1, 2, 3, 4, 5))

# else is not necessary, but it is good practice to have it / using it for demonstration purposes
else:
    print("Importing mymath.py as module")
