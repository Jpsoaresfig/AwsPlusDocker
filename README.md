<body>

  <h1>AwsPlusDocker 🚀</h1>

  <p>
    Demonstration project integrating <strong>AWS + Docker</strong> using
    <strong>Spring Boot</strong> (backend) and <strong>React</strong> (frontend),
    orchestrated with <strong>Docker Compose</strong>.
  </p>

  <h2>📌 Overview</h2>
  <p>
    This repository demonstrates a modern architecture where backend and
    frontend applications are fully containerized, enabling smooth local
    development and preparing the project for cloud deployment, especially
    on AWS.
  </p>

  <ul>
    <li>Containerized Spring Boot backend</li>
    <li>Containerized React frontend</li>
    <li>Service orchestration with Docker Compose</li>
    <li>Ready for AWS integration</li>
  </ul>

  <h2>📁 Project Structure</h2>

  <pre>
AwsPlusDocker/
├── todoo_Spring/        # Spring Boot backend
├── to_do_react/         # React frontend
├── docker-compose.yml  # Service orchestration
└── README.html         # Project documentation
  </pre>

  <h2>⚙️ Prerequisites</h2>
  <ul>
    <li>Docker</li>
    <li>Docker Compose</li>
    <li>(Optional) AWS CLI configured</li>
  </ul>

  <h2>🚀 Running the Project</h2>

  <ol>
    <li>Clone the repository:</li>
  </ol>

  <pre>
git clone https://github.com/Jpsoaresfig/AwsPlusDocker.git
cd AwsPlusDocker
  </pre>

  <ol start="2">
    <li>Start the containers:</li>
  </ol>

  <pre>
docker-compose up --build
  </pre>

  <h3>🌐 Access URLs</h3>
  <ul>
    <li>React Frontend: <code>http://localhost:3000</code></li>
    <li>Spring Boot API: <code>http://localhost:8080</code></li>
  </ul>

  <h2>🧩 Backend – Spring Boot</h2>
  <p>
    The backend provides a REST API for task management (To-Do),
    designed to be scalable and easily integrated with AWS services such as
    managed databases or container services like ECS and Fargate.
  </p>

  <h2>🎨 Frontend – React</h2>
  <p>
    The React application handles the user interface, consuming the backend API
    and supporting optimized production builds using Docker.
  </p>

  <h2>☁️ Docker & AWS</h2>
  <p>
    This project can be used as a foundation for:
  </p>
  <ul>
    <li>Publishing Docker images to Amazon ECR</li>
    <li>Running containers on Amazon ECS or Fargate</li>
    <li>Building CI/CD pipelines</li>
    <li>Scalable cloud deployments</li>
  </ul>

  <h2>🛠 Technologies Used</h2>
  <ul>
    <li>Java / Spring Boot</li>
    <li>React</li>
    <li>Docker</li>
    <li>Docker Compose</li>
    <li>AWS (ECR, ECS – future integration)</li>
  </ul>

  <h2>📄 License</h2>
  <p>
    This project is free to use for educational and professional purposes.
  </p>

  <h2>🤝 Contributions</h2>
  <p>
    Contributions are welcome! Feel free to open issues or submit pull requests.
  </p>

</body>
</html>
