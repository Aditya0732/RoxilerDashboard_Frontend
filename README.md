***Transaction Dashboard***
Deployed Link - https://roxilerdashboard-frontend.onrender.com/

*NOTE* - When we just open the website the backend will take upto 50 to 60 seconds to load for first API call as it is deployed on render free tier.

This is a React-based web application that allows users to view and analyze transaction data. The application fetches data from a backend API and displays it in a user-friendly format, including tables, charts, and statistics.


*Features*
Transaction Table: Displays a list of transactions with pagination and search functionality.

Month Selection: Users can select a specific month to view transactions for that period.

Search: Users can search for transactions based on product title, description, or price.

Statistics: Displays statistical information about the transactions, such as total revenue, total products sold, and average price.

Bar Chart: Visualizes the total revenue and products sold per month.Used react-chartjs-2 package.

Pie Chart: Visualizes the percentage contribution of each product category to the total revenue.Used react-chartjs-2 package.

Toaster Messages: Displays success or error messages when fetching data from the API.

Loader: Shows a loading spinner while data is being fetched from the API.

*Technologies Used*

*Frontend*

React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for styling the application.
Axios: A promise-based HTTP client for making API requests.

*Backend*

Node.js: A JavaScript runtime for building server-side applications.
Express.js: A minimal and flexible Node.js web application framework.
MongoDB: A NoSQL database for storing transaction data.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
Cors: A Node.js middleware for providing a Connect/Express middleware that can be used to enable CORS with various options.

*Deployment*

Both backend and frontend are deployed on render.
