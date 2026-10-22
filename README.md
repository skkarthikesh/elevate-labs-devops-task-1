
# Elevate Labs DevOps Task 1

Project Overview

This project demonstrates a basic CI/CD pipeline for a Node.js web application using GitHub Actions and Docker.

The pipeline automatically runs application tests and builds and publishes a Docker image to Docker Hub when changes are pushed to the `main` branch.

 Technologies Used

* Node.js
* Express.js
* Docker
* Docker Hub
* Git and GitHub
* GitHub Actions
* Node.js built-in test runner

Project Structure

```text
elevate-labs-devops-task-1/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── test/
│   └── app.test.js
├── .gitignore
├── app.js
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

Application Features

* Express.js web application.
* Health-check endpoint at `/health`.
* Automated application testing.
* Docker containerization.
* Automated CI/CD using GitHub Actions.
* Docker image publishing to Docker Hub.

 Run Locally

1. Install dependencies

```bash
npm ci
```

### 2. Run tests

```bash
npm test
```

3. Start the application

```bash
npm start
```

Open `http://localhost:3000` in your browser.

Health endpoint:

`http://localhost:3000/health`

Expected response:

```json
{
  "status": "healthy"
}
```

Run with Docker

Build the Docker image

```bash
docker build -t elevate-node-app .
```

Start the container

```bash
docker run -d --name elevate-node-app -p 3000:3000 elevate-node-app
```

Open `http://localhost:3000`.

Stop and remove the container

```bash
docker rm -f elevate-node-app
```

Docker Hub

Published image:

`skkarthikesh/elevate-node-app:latest`

Pull the image:

```bash
docker pull skkarthikesh/elevate-node-app:latest
```

CI/CD Pipeline

The GitHub Actions workflow performs these tasks:

1. Checks out the repository.
2. Sets up the Docker build environment.
3. Runs the Node.js application tests.
4. Authenticates with Docker Hub using GitHub repository secrets.
5. Builds the Docker image.
6. Pushes the image to Docker Hub.

The workflow has been executed successfully, with both the test job and Docker image publishing job passing.

GitHub Repository

https://github.com/skkarthikesh/elevate-labs-devops-task-1

Author

S K Karthikesh
