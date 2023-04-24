---
sidebar_position: 2
---

# Pre-Installation 

## Network
In the SelfHostCloud Lab, containers are being categorized as either frontend or backend. The frontend network is the only one that the user can interact with, while the application interacts with the backend network internally when needed. This approach helps to simplify the user experience while maintaining the necessary internal complexity to support the application's functionality.

When creating a network in Docker, the command to use is ```docker network create```. By default, the bridge driver is used if no other driver is specified with the ```--driver``` or ```-d``` flag. 

The subnet, or IP pool, can also be specified using the ```--subnet``` flag, but if it is not specified, Docker will automatically configure it. This provides flexibility in creating and managing networks within Docker.

To deploy the **SelfHostCloud Lab**, we need to create three (3) new Docker networks: **proxy**, **socket_proxy**, and **apps**.

To create these networks, follow the steps in the **Installation** section, which outlines the specific instructions based on the method used.



## Volumes

To automate a container with data, one possible approach is to save the data in the container image. Nevertheless, this strategy involves duplicating the data in every container instance, which could result in resource inefficiencies when scaling up the containers. 

An alternative solution is to store a single copy of the data in a Docker volume and use it across multiple containers.

We may want to use persistence volumes for Docker containers to ensure that your data remains available even if the container is terminated, updated, or replaced. By saving data in a persistent volume, you can separate the stateful data from the stateless container, making it easier to manage and scale your containerized applications.

Additionally, persistent volumes allow you to share data between containers and persist data beyond the life cycle of a single container. This makes it possible to update or replace containers without losing valuable data or configuration information.

Overall, using persistent volumes can improve the reliability, flexibility, and efficiency of your containerized applications.

In the SelfHostCloud Lab, volumes are declared when we building a container.

## Instalation Methods


### Using Terraform

Terraform is an open-source infrastructure-as-code tool that allows you to provision and manage infrastructure resources across multiple cloud providers, such as AWS, Azure, and Google Cloud Platform. With Terraform, you can write code to define the desired state of your infrastructure, and then use Terraform to apply that code to create or modify the resources to match that state.

To deploy containers in Docker using Terraform, you can use the Docker provider for Terraform. The Docker provider allows you to create and manage Docker containers, images, networks, and volumes through Terraform code. To use the Docker provider, you need to include it in your Terraform configuration file and define the resources you want to create or manage.

Here's an example of how you can use Terraform to deploy a Docker container:

```
provider "docker" {
  host = "tcp://localhost:2376/"
}

resource "docker_image" "nginx" {
  name = "nginx:latest"
}

resource "docker_container" "web" {
  name  = "web"
  image = docker_image.nginx.latest

  ports {
    internal = 80
    external = 8080
  }
}
```
In this example, we're using the Docker provider to deploy an NGINX container. First, we define a Docker image resource to pull the latest NGINX image. Then, we define a Docker container resource to create a new container based on that image, with port 80 mapped to port 8080 on the host.

To apply this Terraform configuration, you can run the following commands:

```
terraform init
terraform plan
terraform apply
```

These commands will initialize the Terraform environment, show you a plan of the changes that will be made, and apply those changes to create the NGINX container.

### Using Docker Compose

Docker Compose is a tool that allows you to define and run multi-container Docker applications. It uses a YAML file to define the services, networks, and volumes for your application, and then allows you to launch and manage all of these containers as a single application. Docker Compose is useful for developers and teams who need to manage complex applications with multiple dependencies, such as web applications with a database and a cache.

To deploy containers in Docker using Docker Compose, you need to define your application's services, networks, and volumes in a YAML file called docker-compose.yml. Here's an example of how you can use Docker Compose to deploy a web application with a database:

```
version: '3'

services:
  web:
    build: .
    ports:
      - "5000:5000"
  db:
    image: postgres
    volumes:
      - db-data:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password

volumes:
  db-data:
```

In this example, we're defining two services: a web service and a database service. The web service is built from the current directory, and its port 5000 is mapped to the host's port 5000. The database service uses the official Postgres image, and creates a volume to store its data. We also set some environment variables for the database service.

To launch this application with Docker Compose, you can run the following command in the same directory as your ```docker-compose.yml``` file:

```
docker-compose up
```

This will start all of the containers defined in your ```docker-compose.yml``` file, and you can access your web application at ```http://localhost:5000```. If you want to stop and remove all of the containers, networks, and volumes created by Docker Compose, you can run:

```
docker-compose down
```

Overall, Docker Compose simplifies the process of deploying and managing multi-container applications, allowing you to focus on developing your application without worrying about the underlying infrastructure.

