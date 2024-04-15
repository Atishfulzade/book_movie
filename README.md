### BookMyMovie

BookMyMovie is a web application for browsing and booking movie tickets. This project utilizes the following technologies:

- **Frontend**: React
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Deployment**: Vercel (frontend), Heroku (backend)

#### Frontend

The frontend of BookMyMovie is built using React, a popular JavaScript library for building user interfaces. It provides a sleek and intuitive interface for users to browse available movies and book tickets.

**Frontend Deployment Link**: [BookMyMovie Frontend](https://book-movie-lake.vercel.app/)

#### Backend

The backend of BookMyMovie is powered by Node.js with Express, a fast and minimalist web framework for Node.js. It handles the business logic of the application, including user authentication, movie data management, and booking transactions.

**Backend Deployment Link**: [BookMyMovie Backend](https://movie-book-api-e4e1fddd3872.herokuapp.com/)

#### Database

BookMyMovie uses MongoDB, a flexible and scalable NoSQL database, for storing movie data, user information, and booking details. MongoDB provides efficient data storage and retrieval, making it suitable for handling the dynamic nature of movie bookings.

#### Getting Started

To run the BookMyMovie project locally, follow these steps:

1. Clone the repository:

```
git clone <repository-url>
cd book-movie
```

2. Install dependencies for both frontend and backend:

```
cd frontend
npm run dev
cd ../backend
npm install
```

3. Set up environment variables:

   - Create a `.env` file in the `backend` directory.
   - Define environment variables for MongoDB connection string,  and any other necessary configurations.

4. Start the frontend and backend servers:

```
cd frontend
npm start
cd ../backend
npm start
```

5. Access the application in your web browser:

   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

#### Contributing

Contributions to BookMyMovie are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

#### License

This project is licensed under the MIT License. See the `LICENSE` file for details.

#### Acknowledgements

Special thanks to the contributors and open-source community for their valuable contributions to this project.
