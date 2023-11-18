from utils_sub_pkg.mymath import (
    add,
    sub,
    mul,
    div,
)  # import only add, sub, mul, div from mymath.py

from lib_sub_pkg.printer import *  # import everything from printer.py

# lib_sub_pkg is not a package, it's a sub-package (same as utils_sub_pkg)


# remember, python scripts are modules, and modules are objects and packages are collections of modules

# if you run this script as main, __name__ will be __main__
if __name__ == "__main__":
    printer("Running main as main")
    printer(add(1, 2, 3, 4, 5))
    printer(sub(1, 2, 3, 4, 5))
    printer(mul(1, 2, 3, 4, 5))
    printer(div(1, 2, 3, 4, 5))

# __name__ is the name of the module, if you run this script as main, __name__ will be __main__
# and it is the name of the module that is being run. It is used to check if the module is being run as main
# or if it is being imported into another module. If it is being run as main, then __name__ will be __main__
