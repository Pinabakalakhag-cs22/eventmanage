# Event Management Application

This is a web application that allows users to manage and register for events. Users can register, create events, register for events, view their registered events, and cancel registrations.

## Features

- User registration and login
- Event creation and management
- User registration for events
- Viewing registered events
- Cancellation of event registrations

## Project Structure

```
event-management-app
├── src
│   ├── controllers          # Contains controllers for handling requests
│   ├── models               # Contains data models for User, Event, and Registration
│   ├── routes               # Contains API routes for authentication, events, and registrations
│   ├── services             # Contains business logic for authentication, events, and registrations
│   ├── middlewares          # Contains middleware for authentication and error handling
│   ├── utils                # Contains utility functions
│   ├── app.ts               # Entry point of the application
│   └── types                # Contains TypeScript interfaces
├── public
│   ├── css                  # Contains CSS styles
│   ├── js                   # Contains client-side JavaScript
│   └── index.html           # Main HTML file for the web application
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd event-management-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Access the application in your web browser at `http://localhost:3000`.

## API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in an existing user

### Event Routes
- `POST /api/events` - Create a new event
- `GET /api/events` - Retrieve all events

### Registration Routes
- `POST /api/registrations` - Register a user for an event
- `GET /api/registrations` - Retrieve registered events for a user
- `DELETE /api/registrations/:id` - Cancel a registration

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.