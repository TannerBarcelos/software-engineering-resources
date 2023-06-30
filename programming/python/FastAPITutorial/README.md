### Intro to FastAPI

#### Setting up the project

> This project uses virtual environments with Anaconda (although `pip` works as well).

1. To install all the dependencies and create a virtual environment, run the following within your cwd ([read more here](https://docs.conda.io/projects/conda/en/latest/commands/create.html))
   `conda create -p ./env -f requirements.txt`

2. Activate the environment with the following
   `conda activate ./env`

3. Change directory into the example you want

- Basic Example: `cd basic_server`
- Advanced Example: `cd advanced_server`

#### Run the Server

> Ensure you followed the steps above, and changed into the directory of choice from step 3

- Basic Example
  `uvicorn advanced_server.server:app --reload`

- Advanced Example
  `uvicorn basic.server:app --reload`
