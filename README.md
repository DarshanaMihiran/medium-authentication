# medium-authentication
# Movie and User Management Services

This project is a Node.js application that provides APIs for managing movies and users. It includes functionalities such as filtering, sorting, pagination, and authentication/authorization.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Movie Service](#movie-service)
  - [User Service](#user-service)
  - [Authentication and Authorization](#authentication-and-authorization)
- [Middleware](#middleware)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/movie-user-service.git
    cd movie-user-service
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create environment-specific files in the `env` directory (e.g., `env.development`, `env.production`).

4. Start the application:
    ```bash
    npm start
    ```

## Usage

To start the application, use the following command:
```bash
npm start
```
The application will run on the port specified in your environment variables.

## API Endpoints

### Movie Service

#### Get All Movies
- **Endpoint:** `/api/movies`
- **Method:** `GET`
- **Description:** Get all movies with filters, sorting, and pagination.
- **Parameters:**
  - `filter`: Filter criteria (e.g., `genre=Action`)
  - `sort`: Field to sort by (e.g., `release_date`)
  - `order`: Sort order (`asc` or `desc`)
  - `page`: Page number for pagination
  - `limit`: Number of items per page
- **Responses:**
  - `200`: A list of movies

#### Get Movie by ID
- **Endpoint:** `/api/movies/{id}`
- **Method:** `GET`
- **Description:** Get a movie by ID.
- **Parameters:**
  - `id`: ID of the movie to get
- **Responses:**
  - `200`: A movie
  - `404`: Movie not found

#### Create Movie
- **Endpoint:** `/api/movies/create`
- **Method:** `POST`
- **Description:** Create a new movie.
- **Parameters:**
  - `title`: Movie title
  - `year`: Release year
  - `genre`: Genre
  - `director`: Director
  - `rating`: Rating
  - `similarBestMovie`: Similar best movie
  - `scores`: Scores
  - `mainActors`: Main actors
- **Responses:**
  - `201`: Movie created successfully
  - `400`: Bad request, invalid input
  - `500`: Internal server error

### User Service

#### Get All Users
- **Endpoint:** `/api/users`
- **Method:** `GET`
- **Description:** Get all users with filters, sorting, and pagination.
- **Parameters:**
  - `filter`: Filter criteria
  - `sort`: Field to sort by
  - `order`: Sort order (`asc` or `desc`)
  - `page`: Page number for pagination
  - `limit`: Number of items per page
- **Responses:**
  - `200`: A list of users

#### Get User by ID
- **Endpoint:** `/api/users/{id}`
- **Method:** `GET`
- **Description:** Get a user by ID.
- **Parameters:**
  - `id`: ID of the user to get
- **Responses:**
  - `200`: A user
  - `404`: User not found

#### Create User
- **Endpoint:** `/api/users/create`
- **Method:** `POST`
- **Description:** Create a new user.
- **Parameters:**
  - `username`: Username
  - `firstname`: First name
  - `lastname`: Last name
  - `password`: Password
- **Responses:**
  - `201`: User created successfully
  - `400`: Bad request, invalid input
  - `500`: Internal server error

### Authentication and Authorization

#### Login
- **Endpoint:** `/api/token/login`
- **Method:** `POST`
- **Description:** User login.
- **Parameters:**
  - `username`: Username
  - `password`: Password
- **Responses:**
  - `200`: Access token
  - `401`: Unauthorized

#### Refresh Token
- **Endpoint:** `/api/token/access-token`
- **Method:** `POST`
- **Description:** Get a new access token using the refresh token.
- **Parameters:**
  - `refreshToken`: Refresh token
- **Responses:**
  - `200`: Access token
  - `401`: Unauthorized
  - `403`: Forbidden

## Middleware

- **verifyToken:** Verifies JWT tokens.
- **authorizeRoles:** Authorizes users based on roles.
- **inputValidationMiddleware:** Validates input data.

## Environment Variables

Set up environment-specific variables in the `env` directory (e.g., `env.development`, `env.production`). Key variables include:
- `ACCESS_TOKEN_SECRET`: Secret key for signing access tokens.
- `REFRESH_TOKEN_SECRET`: Secret key for signing refresh tokens.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to update this README file with more details as your project evolves.
