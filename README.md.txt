# Hotel Listing Web Application

### Tech Stacks - Backend: Django, Frontend: Angular, Database: Postgres

### External Library/Packages - Bootstrap

### Initial Requirements
- Python 3
- Angular
- Node
- Django

Running the Application

- Backend
1 - Create a virtual python 3 environment and add the django project name `myproject` inside it.
2 - Make a database name  `akamai_edge` and update the postgres password in `myproject/settings.py`
3 - Run migrations using `python manage.py migrate` command.
4 - Import the hotel dataset from `dataset/Singapore_Listings.csv`.
5 - Run the Backend server using `python manage.py runserver`

- Frontend 

1 - Install node module using `npm install`
2 - Run the frontend using `npm start`