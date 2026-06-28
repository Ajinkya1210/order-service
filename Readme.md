# Order Service - DevOps Project
##
[![Jenkins CI/CD](https://img.shields.io/badge/Jenkins-CI%2FCD-0078D4?style=flat&logo=jenkins&logoColor=orange&labelColor=555555)](image_5.png)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=flat&logo=github&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?style=flat&logo=amazonaws&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Web_Framework-000000?style=flat&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-3178C6?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=flat&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Registry-0078D4?style=flat&logo=docker&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-E6522C?style=flat&logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-Dashboard-F46800?style=flat&logo=grafana&logoColor=white)
### Overview
This project is a simple Node.js microservice built using TypeScript and Express. It demonstrates a complete DevOps workflow including containerization, CI/CD automation, monitoring, and deployment on AWS.
### Features
1.Health Check API

2.Job Processing API

3.Error Simulation API

4.Prometheus Metrics

5.Grafana Dashboard

6.Docker Containerization

7.Jenkins CI/CD Pipeline

8.AWS EC2 Deployment
 ### Tech Stack
 #### Application
1.Node.js

2.TypeScript

3.Express.js
### DevOps Tools
1.Docker

2.Docker Compose

3.Jenkins

4.GitHub
### Monitoring
1.Prometheus

2.Grafana
### Cloud
1.AWS Cloud

### AWS Infrastructure
#### API Endpoints
#### 1. Health Check

GET /health

Response:

{
    
    "status": "UP",

  "message": "Service is running"

}

![sc](sc/1.png)

### 2.Simulate Error

GET /simulate-error

Response:

{

  "success": false,

  "message": "Simulated Error"

}

![sc](sc/2.png)

### 3.Metrics

GET /metrics

Example:

app_requests_total 10

app_errors_total 2

![sc](sc/3.png)

### Docker Containers

#### docker ps

![sc](sc/4.png)

### CI/CD Pipeline

#### The Jenkins pipeline performs:

1.Checkout source code from GitHub

2.Connect to Application Server via SSH

3.Pull latest code

4.Build Docker containers

5.Deploy updated application

![sc](sc/5.png)

### Monitoring

### 1.Prometheus

![sc](sc/6.png)

### 2.Grafana

![sc](sc/7.png)