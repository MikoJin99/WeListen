# Getting Started with WeListen Project

WeListen is built using React library and Flask. It's a senior design project made by [Meihui Jin](), [Yanjun Meng](https://github.com/ymeng1834), [ChrisXu](https://github.com/chrisxhhh/), [Kewei Zhang](https://github.com/jeffzhkw/).

# Quick Start

Under root dictionary:

### `flask run`

To start a development server.

### `npm start`

For frontend debugging.

# !----Attention for Backend Development----!

Use virtual environement. Here are list of commands:

### `python -m venv venv`

Create your virtual environment called `(venv)`.\
It's expected to run when setting up the python virtual environment for the first time.

### `source venv/bin/activate `

Activate the virtual environment. \
Once activated, you will see `(venv)` at the very front each line within the terminal

### `pip install -r requirements.txt`

Run the command under `(venv)`.\
Install packages stated in the requirement.txt into virtual environment.\
Run every time after the .txt changed.

### `pip freeze > requirements.txt`

Run the command under `(venv)`.\
Save current packages information to requirement.txt.\
Run for every inclusion of new packages.\
Run before commit to github.

### `deactivate`

Run the command under `(venv)`.\
Exit the virtual environment.

# To Move React Built Files to Flask

Under front-end folder, in the terminal, type in sequence:

### `npm run build`

Builds the app for production to the `/front-end/build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run clearFlask`

Deletes the previous version in Flask folder(`/static` and `/template`).

### `npm run toFlask`

Moves the built files from React folder(`/front-end/build`) to the Flask folder(`/static` and `/template`).
