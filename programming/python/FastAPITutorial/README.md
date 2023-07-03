# Intro to FastAPI

## Getting Started

> This project uses virtual environments with Anaconda. If you do not have Anaconda installed, you can download it [here](https://www.anaconda.com/products/individual)

1. To install all the dependencies and create a virtual environment, run the following within your cwd ([read more here](https://docs.conda.io/projects/conda/en/latest/commands/create.html))
   `conda create --prefix ./venv --file requirements.txt`

   > --prefix ./venv will create a virtual environment in the current working directory called venv and be prefixed with the path to the venv. This is useful if you want to keep your virtual environments in a specific directory. However, this might cause your env path to be very
   > large. To configure conda to remove the prefix path, run the following command
   > `conda config --set env_prompt '({name})'`

2. Activate the environment with the following
   `conda activate ./venv`

3. Run the Server

   > You can run the basic example or the advanced example. Both do the same thing, but the advanced example has more code and comments to help you understand what is going on for a more complex project.

- Basic Example
  `Make run-basic-server`

- Advanced Example
  `Make run-advanced-server`
