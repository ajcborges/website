---
sidebar_position: 3
---
# Installation

Deploying containerized applications in Docker can be done in various ways, and two popular methods are using Docker Compose and Terraform.

Docker Compose is a tool that enables you to define and run multi-container Docker applications, allowing you to launch and manage multiple containers as a single application. On the other hand, Terraform is an open-source infrastructure-as-code tool that allows you to provision and manage infrastructure resources, including Docker containers, across multiple cloud providers.

Both methods offer distinct advantages and can be used based on your specific needs and preferences.

## Using Terraform

#### File naming

File naming requirements are as follows.
- `*images*.tf` to define docker image(s) used by the container(s)
- `*container*.tf` to define information for the deployment of the container(s).
- `*networks*.tf` to define network(s) used by the container(s).
- `*volumes*.tf` to define volume(s) used by the container(s).

#### Other Files

Other Terraform configs files should follow generally accepted conventions for Terraform code structure:

- `environment.tfvar` to define the terraform variable for deployment
- `outputs.tf` to define outputs
- `variables.tf` to define variables
- `versions.tf` for Terraform & provider definitions (or commonly `__provider.tf` using Terraform v0.11)

Source code for deployment can be found on my [GitHub](https://github.com/ajcborges/SelfHostCloud-Lab/tree/main/portainer/src/terraform)

## Using Docker Compose

Portainer has a few dependencies that must be supplied when you start your container:

- It requires a volume to store persistent data.
- Your host's Docker socket should be mounted into the container so that Portainer can access and interact with the Docker daemon.
- You need to bind a port to the container so you can access the web UI.

#### Portainer Networks and Volumes

We need to create the networks and volume to be used by Portainer, we can do this using the Docker CLI.

**Create the volume:**

``` bash
docker volume create portainer_data
```

**Create the networks:**

``` bash
docker network create proxy
docker network create socket_proxy
docker network create apps
```

Docker Compose will lets you write the container's configuration into a file so you can bring up the app with a single command. To do so, save the  file as ```portainer-compose.yml``` in your working directory.

then, you can use this Compose file to bring up Portainer:

``` bash
docker compose -f portainer-compose.yml up -d
```
#### File naming

File naming requirements are as follows.
- `portainer-compose.yml` used to define all container's configuration
- `.env` used to define environment variables.

Source code for deployment can be found on my [GitHub](https://github.com/ajcborges/SelfHostCloud-Lab/tree/main/portainer/src/docker-compose)

