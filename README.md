# tech-trek

## How to setup development environment (Linux)
1. Clone this repository `git clone https://github.com/prakhar9998/tech-trek`.
2. `cd tech-trek`.
2. Install virtualenv (if haven't already) by running this command in terminal `pip install virtualenv`.
3. Run `python3 -m venv env`.
4. `source env/bin/activate` to activate the virtual environment.
5. Run `pip install -r requirements.txt` to install the dependencies.
6. Run migrations using `python manage.py migrate`.
7. `python manage.py runserver` and you're ready.

## Setting up frontend 
1. `npm install` to add all the packages of react
2. `npn start` to run the frontend server