# ContactVault-Backend-API

This project is a Node.js-based backend API for a contact management system. It provides user authentication, error handling, and CRUD operations for managing contacts. The API supports login, registration, and viewing of the current user.

## Features
- User Authentication: Register and login users using JWT tokens.
- Password Security: Passwords are hashed using bcrypt.
- Contact Management: Users can perform CRUD (Create, Read, Update, Delete) operations on contacts.
- Error Handling: Middleware to handle errors consistently.
- Token Validation: Protect routes with JWT-based authentication.

## Technologies Used
- Node.js: JavaScript runtime.
- Express: Web framework for building APIs.
- MongoDB & Mongoose: For data storage and object modeling.
- JWT: JSON Web Tokens for secure authentication.
- bcrypt: Password hashing library.
- dotenv: For environment variable management.
- express-async-handler: Error handling for async routes.
- Nodemon: Development dependency for live reloading.


## API Endpoints

### Authentication
- POST /api/users/login: Login a user and get a token.
- GET /api/users/current: Get details of the currently logged-in user (requires a valid token).
- POST /api/users/register: Register a new user.

### Contacts
- GET /api/contacts: Get all contacts (requires a valid token).
- POST /api/contacts: Create a new contact (requires a valid token).
- GET /api/contacts/: Get a specific contact by ID (requires a valid token).
- PUT /api/contacts/: Update a contact by ID (requires a valid token).
- DELETE /api/contacts/: Delete a contact by ID (requires a valid token).

### Middleware
- validateToken: Ensures that a valid JWT token is present in the request headers for protected routes.
- errorHandler: A custom middleware to handle errors in a consistent format across the API.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Conclusion

This project was a self-development and learning experience, where I deepened my understanding of backend development, authentication, and error handling. I gained valuable insights from online resources, particularly YouTube tutorials and official documentation available on Google, which were instrumental in helping me build and complete this project. The journey has been both challenging and rewarding, further solidifying my interest in backend technologies and Node.js development.
