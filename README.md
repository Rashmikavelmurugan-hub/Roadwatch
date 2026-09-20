# 🚧 RoadWatch

### Public Infrastructure Issue Reporting and Monitoring System

RoadWatch is a web-based public infrastructure reporting platform designed to help citizens report road-related issues, such as potholes, damaged streetlights, and other infrastructure problems. The system aims to improve communication between the public and responsible authorities by providing a centralized platform for submitting and managing complaints.

The project combines a responsive frontend with a Java Spring Boot backend and PostgreSQL database integration.

---

## 📌 Project Overview

Public infrastructure issues often remain unresolved due to inefficient reporting methods and a lack of centralized monitoring. RoadWatch addresses this challenge by providing a digital platform where users can submit infrastructure-related complaints and track their reports.

The application is designed with a modular architecture that separates the frontend, backend, and database layers, making the system easier to maintain and extend.

---

## 🎯 Objectives

- Provide a digital platform for reporting public infrastructure issues.
- Enable users to submit complaints through a web interface.
- Store submitted reports in a centralized database.
- Develop REST APIs for communication between the frontend and backend.
- Improve transparency in infrastructure issue management.
- Create a foundation for future AI-based issue detection and prioritization.

---

## ✨ Features

### Frontend

- Responsive web interface
- Infrastructure issue reporting form
- Report submission functionality
- Report tracking interface
- About section
- User-friendly navigation
- Integration with backend REST APIs

### Backend

- Developed using Java and Spring Boot
- RESTful API architecture
- Report creation and retrieval endpoints
- Database connectivity using PostgreSQL
- Maven-based project management
- Environment-variable-based database configuration

### Testing and Code Quality

- Unit and integration testing support
- JUnit-based test cases
- Mockito-based testing
- JaCoCo code coverage reporting
- Maven build verification

---

## 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │       User           │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   RoadWatch Frontend │
                    │     HTML / CSS / JS  │
                    └──────────┬───────────┘
                               │
                         REST API
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Spring Boot API    │
                    │      Java Backend    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   PostgreSQL DB      │
                    │   Report Storage     │
                    └──────────────────────┘
```

---

## 🛠️ Technology Stack

| Component | Technology |
|-----------|------------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Java, Spring Boot |
| Build Tool | Apache Maven |
| Database | PostgreSQL |
| Testing | JUnit, Mockito |
| Code Coverage | JaCoCo |
| Version Control | Git and GitHub |
| Deployment Platform | Render |
| Development Environment | Visual Studio Code |
| Java Version | Java 21 |

---

## 📂 Project Structure

```text
Roadwatch/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── roadwatch/
│   │   │           └── roadwatch/
│   │   │               ├── RoadwatchApplication.java
│   │   │               ├── controller/
│   │   │               ├── model/
│   │   │               ├── repository/
│   │   │               └── service/
│   │   │
│   │   └── resources/
│   │       └── application.properties
│   │
│   └── test/
│       └── java/
│           └── com/
│               └── roadwatch/
│
├── pom.xml
├── .gitignore
└── README.md
```

> The exact package and folder structure may vary depending on the current implementation.

---

## 🔗 API Endpoints

### Reports API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reports` | Retrieves reports |
| POST | `/api/reports` | Creates a new report |

### Base URL

```text
http://localhost:8080
```

### API Path

```text
/api/reports
```

The backend uses RESTful communication to allow the frontend to interact with the report management system.

---

## ⚙️ Local Setup

### Prerequisites

Ensure the following tools are installed:

- Java Development Kit (JDK) 21
- Apache Maven
- PostgreSQL
- Git
- Visual Studio Code or another Java-compatible IDE

### Step 1: Clone the Repository

```bash
git clone https://github.com/Rashmikavelmurugan-hub/Roadwatch.git
```

Navigate to the project directory:

```bash
cd Roadwatch
```

### Step 2: Configure Database Environment Variables

The application uses environment variables for database configuration.

```properties
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.driver-class-name=org.postgresql.Driver
```

Configure the following environment variables in your local environment:

```text
DB_URL
DB_USERNAME
DB_PASSWORD
```

**Security Note:** Do not commit database passwords, credentials, or other sensitive information to GitHub.

### Step 3: Build the Project

```bash
mvn clean verify
```

### Step 4: Run the Application

```bash
mvn spring-boot:run
```

The backend is configured to run on:

```text
http://localhost:8080
```
**Note:** The application requires valid PostgreSQL environment variables and an accessible database connection ton start successfully

---

## 🧪 Testing

The project includes automated tests to validate backend functionality.

Run the test suite using:

```bash
mvn test
```

Run the complete Maven verification process using:

```bash
mvn clean verify
```

The verification process includes:

- Source compilation
- Test execution
- Package generation
- JaCoCo code coverage report generation

### Code Coverage

JaCoCo is integrated into the project to measure test coverage.

The generated report can be accessed from:

```text
target/site/jacoco/index.html
```

---

## 🌐 Deployment

The project uses Render for deployment.

### Frontend

```text
https://roadwatch-lsky.onrender.com
```

### Backend

```text
https://roadwatch-backend-rashmika.onrender.com
```

The frontend communicates with the backend through REST API requests.

> Deployment configuration and database connectivity may require environment-specific settings.

---

## 🔐 Security Considerations

The following practices are followed or planned for the project:

- Database credentials are configured using environment variables.
- Sensitive configuration values should not be committed to version control.
- `.gitignore` should be used to prevent accidental exposure of local configuration files.
- Production deployment should use secure HTTPS communication.
- Authentication and authorization can be added in future versions.

If database credentials have been accidentally exposed, the credentials should be rotated immediately.

---

## 🚀 Future Enhancements

The following features can be integrated in future versions:

- AI-based pothole and infrastructure issue detection
- Image-based report classification
- Automatic issue prioritization
- User authentication and authorization
- Admin dashboard
- Report status notifications
- Location-based issue mapping
- Authority-side report management
- Cloud database optimization
- Analytics and infrastructure issue visualization
- Mobile application support

---

## 📈 Project Status

| Component | Status |
|-----------|--------|
| Frontend Development | Completed |
| Backend Development | Implemented |
| PostgreSQL Integration | Configured |
| REST API Development | Implemented |
| GitHub Repository | Available |
| Automated Testing | Implemented |
| JaCoCo Integration | Implemented |
| Frontend Deployment | Configured |
| Backend Deployment | Configured |
| Final Database Connection Verification | Pending |

The project has successfully completed Maven compilation, automated testing, and verification. Final backend execution depends on correctly configuring the PostgreSQL connection details and environment variables.

---

## 👩‍💻 Developer

**Rashmika Velmurugan**

B.Tech – Artificial Intelligence and Data Science

### Areas of Interest

- Artificial Intelligence
- Data Science
- Backend Development
- Web Application Development
- Machine Learning
- Software Engineering

---

## 📜 License

This project is developed for educational and project development purposes.

A suitable open-source license can be added when the project is prepared for public distribution.

---

## ⭐ Acknowledgement

RoadWatch was developed as a project to explore web application development, REST API integration, database management, software testing, and the potential application of artificial intelligence in public infrastructure monitoring.

---

## 📌 Repository

GitHub Repository:

https://github.com/Rashmikavelmurugan-hub/Roadwatch
