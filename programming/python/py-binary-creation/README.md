The purpose of this super simple project is to showcase how to create an artifact (application binary) from a Python application.

While using Artifactory more, and learning more about SDL, DevOps, etc. I have become interested in understanding packaging, versioning, building, binaries etc. So, this made me curious in how I can take a python project and create a platform-independent executable binary out of it so others could use it **without needing to build the project on their own** i.e. downloading an app from a website requires download+install+enjoy the app. **It does not require the user to download the app, install deps / code, build it and then create an executable**. This obvious would be bad UX. 

So, with this curiosity I made this very, very basic Hello World program to understand how to create an application binary in Python and how to run it. Below are the steps to build and run the programe.

**Install Dependencies**
`pip install -r requirements.txt`

**Build the program into an executable**
`pyinstaller --onefile hello.py`

**Run the executable**
`./dist/hello`

> Note how we are not running using `python hello.py` or anything. This is made possible by making the program a C-executable binary program that our machine can understand and run.
