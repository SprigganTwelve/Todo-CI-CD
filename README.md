[![CI](https://github.com/SprigganTwelve/Todo-CI-CD/actions/workflows/ci.yml/badge.svg)](https://github.com/SprigganTwelve/Todo-CI-CD/actions/workflows/ci.yml)

# ClickFast

This project focuses on developing a web-based mouse-click game.
The application calculates and assigns a score to each user based on the number of clicks they make on a target during a game session.
The system supports multiple consecutive game sessions and automatically organizes and maintains the corresponding scores.

Running the Application with Docker

A Dockerfile is available at the project's root directory, allowing you to package and run the application inside a Docker container.

1. Verify Docker Installation

First, check whether Docker is installed on your computer by running:

docker --version

If Docker is not installed, you can follow the installation guide available here:

https://openclassrooms.com/fr/courses/8431896-optimisez-votre-deploiement-en-creant-des-conteneurs-avec-docker/8482700-installez-docker

2. Build the Docker Image

Make sure your terminal is opened in the project's root directory, then run:

docker build -t <image_name> .
3. Run the Container

Start the container with:

docker run -d --name <container_name> <image_name>

Note: The original command was missing the image name. The <image_name> argument is required.

4. Stop the Container

To stop the running container, execute:

docker stop <container_name>