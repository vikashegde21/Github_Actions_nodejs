# My Node.js Project

A Node.js REST API project with CI/CD pipeline using GitHub Actions.

## Features

- Express.js REST API
- Error handling middleware
- Testing with Jest
- ESLint for code quality
- GitHub Actions CI/CD pipeline
- Security with Helmet
- CORS enabled
- HTTP request logging with Morgan

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update the values
4. Start the server:
   ```bash
   npm start
   ```

## Development

Start the development server with hot reload:
```bash
npm run dev
```

## Testing

Run tests:
```bash
npm test
```

## Linting

Check code style:
```bash
npm run lint
```

Fix code style issues:
```bash
npm run lint:fix
```

## API Endpoints

- GET `/api/data` - Get all items
- GET `/api/data/:id` - Get item by ID
- POST `/api/data` - Create new item

## CI/CD Pipeline

The GitHub Actions pipeline:
- Runs on multiple Node.js versions (14.x, 16.x, 18.x)
- Installs dependencies
- Runs linting
- Runs tests
- Builds the project

## Project Structure

```
src/
├── controllers/    # Request handlers
├── models/        # Data models
├── routes/        # API routes
├── services/      # Business logic
├── middleware/    # Custom middleware
└── app.js         # Application entry point

tests/             # Test files
```