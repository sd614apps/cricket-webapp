# cricket-webapp

- Frontend: ReactJS
- Backend: NodeJS
- Database: PostgreSQL

### Set up the backend server:

- Install Node.js and npm (Node Package Manager) on your machine if you haven't already.
- Create a new directory for your project and navigate to it in the terminal.
- Initialize a new Node.js project using `npm init`.
- Install required dependencies like Express (a popular Node.js framework) using `npm install express`.
- Set up a basic Express server that will handle HTTP requests and connect to the PostgreSQL database.
- `npm i express body-parser pg`
- Create a new directory on your computer for the project.
- Create a new file named server.js and paste the backend code provided into it.
- Open a terminal, navigate to the project directory, and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
- Install the required dependencies by running `npm install express body-parser pg`.
- Make sure you have PostgreSQL installed and running on your machine. Create a new database and update the PostgreSQL connection details in the `server.js` file.
- Start the backend server by running node server.js. The server will listen on port 3000 by default.


### Set up the PostgreSQL database:

- Install PostgreSQL on your machine if you haven't already.
- Create a new database for your cricket website.
- Set up tables and define the necessary schemas to store data related to players, matches, scores, etc.

#### Install PostgreSQL:

- For Windows: Download the PostgreSQL installer from the official website and follow the installation instructions.
- For macOS: You can use Homebrew by typing brew install postgresql in the terminal. Alternatively, you can download the installer from the official website.
- For Linux: Use your distribution's package manager. For example, on Ubuntu, you can use `sudo apt-get install postgresql`.

#### Start the PostgreSQL Service:

- On Windows, the PostgreSQL service usually starts automatically after installation. If it doesn't, go to "Services" in the Control Panel and start the PostgreSQL service.
- On macOS, you can start it with `brew services start postgresql`.
- On Linux, you can usually use `sudo service postgresql start`.

#### Access PostgreSQL:

- Open your terminal or command prompt.
- Access PostgreSQL by typing `psql -U postgres`. This tries to access PostgreSQL using the default postgres user. It may ask for a password; this is the password you set during installation.

#### Create a Database:

- Once inside PostgreSQL, create a new database by typing `CREATE DATABASE your_database_name;` (don't forget the semicolon).

#### Create a User and Grant Privileges (optional):

- You can create a new user by typing `CREATE USER your_username WITH PASSWORD 'your_password';`.
- Next, grant all privileges on the database to the new user: `GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_username;`.
```sql
GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_username;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO your_username;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO your_username;
```

#### Exit PostgreSQL:

- Type \q and hit Enter to exit PostgreSQL.

#### Configure Your Node.js Application:

In your Node.js application's server.js file, make sure the connection configuration matches the database name, username, and password you just created.
Example:

```javascript
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_password',
  port: 5432,
});
```

#### Create Tables:

- You can create tables for your database either by using a script or by connecting to the database and issuing SQL commands. For example:

```sql
CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age INTEGER,
  country VARCHAR(50)
);
```

#### Test Your Application:

- Run your Node.js application and make sure it can connect to the PostgreSQL database.


### Create the frontend application using ReactJS:

- Set up a new ReactJS project using Create React App or any other preferred method.
- Design the UI/UX components for your cricket website, including pages for displaying player profiles, match schedules, live scores, etc.
- Use React Router to handle navigation between different pages.
- Implement forms and input fields to allow users to submit data (e.g., player details, match results).
- `npm i react axios`
- Create a new directory within your project directory called `frontend`.
- Open a new terminal, navigate to the frontend directory, and run `npx create-react-app .` (the dot at the end is important). This command will set up a new React project in the frontend directory.
- Replace the content of src/App.js in the React project with the frontend code provided.
- Open a terminal, navigate to the frontend directory, and run `npm start` to start the React development server.


### Establish connectivity between the frontend and backend:

- Define RESTful API endpoints in your Node.js server to handle requests from the frontend.
- Use libraries like pg or pg-promise to connect your Node.js server to the PostgreSQL database and perform CRUD operations.
- Implement API routes for retrieving and manipulating data in the database (e.g., fetching player information, adding a new match, updating scores).
- Utilize Axios or fetch API on the frontend to send HTTP requests to the backend and receive responses.


### Integrate frontend and backend:

- Update the ReactJS components to consume data from the API endpoints.
- Implement functionality for sending data to the backend for storage or updating existing records.
- Display data retrieved from the backend in the frontend components.


### Deploy your application:

- Set up a hosting environment for both the frontend and backend. You can use services like Heroku, AWS, or Netlify.
- Configure the necessary deployment scripts and files for each environment.
- Deploy your frontend application and backend server to their respective hosting platforms.


### Access the Cricket Website:

- Open your web browser and visit http://localhost:3000 to access the cricket website.
- The frontend should display a form to add players, and the list of players should be displayed below the form.
- When you add a player through the form, it should be sent to the backend server and stored in the PostgreSQL database. The list of players will then be updated with the new player.