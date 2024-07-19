# Coffee Enthusiast Hub

Welcome to the **Coffee Enthusiast Hub**! This project is a web application designed to help coffee lovers explore and manage their favorite coffee beverages. It leverages modern technologies to provide a seamless and interactive experience.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Features](#features)
  - [Frontend Pages](#frontend-pages)
  - [API Endpoints](#api-endpoints)
- [Setup and Installation](#setup-and-installation)
- [Deployment](#deployment)
- [Set up AWS CloudFront for CDN](#set-up-aws-cloudfront-for-cdn)

## Overview

**Coffee Enthusiast Hub** is built to offer a rich user experience with features like exploring different types of coffee, maintaining a coffee journal, and discovering coffee products. The application is designed to be scalable, efficient, and user-friendly.

## Tech Stack

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **Material-UI**: A popular React UI framework for responsive and modern design.
  - **AWS S3**: For hosting the static React application.
  - **AWS CloudFront**: For Content Delivery Network (CDN) to speed up the delivery of static assets.

- **Backend**:
  - **Django**: A high-level Python web framework for building robust and scalable server-side applications.
  - **Django REST Framework**: For building APIs to interact with the frontend.
  - **AWS EC2**: For deploying the Django application.

- **Other Tools**:
  - **Gunicorn**: Python WSGI HTTP Server for running the Django application.
  - **Nginx**: Web server for serving static files and as a reverse proxy.

## Architecture

### Frontend

The frontend is built with React and styled using Material-UI. It is deployed to AWS S3 and served globally via AWS CloudFront to ensure fast and reliable access.

### Backend

The backend is a Django application hosted on an AWS EC2 instance. It serves APIs to the React frontend and handles business logic, including interactions with the PostgreSQL database.

## Features

### Frontend Pages

- **Home Page**:
  - Displays a welcome message and an overview of the application.
  - Provides navigation to other pages.

- **Explore Coffee Page**:
  - Introduces a random type of coffee to the user.
  - Displays a name, description, ingredients, and image of the coffee type.

- **Coffee Journal Page**:
  - Provides a journal feature where users can log their coffee experiences.
  - Allows users to add journal entries.
  - Displays a list of past entries with details.

- **Coffee Products Page**:
  - Lists coffee-related products.
  - Displays product names, descriptions, prices, and images.

### API Endpoints

- **GET /random-coffee-image/**:
  - **Description**: Retrieves a random coffee image. 
  - **Example Response**:
    ```sh
    {
      "file": "https://coffee.alexflipnote.dev/BaP62ezew_I_coffee.jpg"
    }
    ```

- **GET /all-coffee-products/**:
  - **Description**: Fetches a list of coffee products with details about prices, regions, and images.
  - **Example Response**:
    ```sh
    [{
        "title": "Iced Coffee",
        "description": "A coffee with ice, typically served with a dash of milk, cream or sweetener—iced coffee is really as simple as that.",
        "ingredients": [
            "Coffee",
            "Ice",
            "Sugar*",
            "Cream*"
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg",
        "id": 1
    },]
    ```

- **POST /coffee-ingredients-data/**:
  - **Description**: Fetches a list of coffee data with descriptions and ingredients of each coffee type.
  - **Example Response**:
    ```sh
    [{
        "title": "Iced Coffee",
        "description": "A coffee with ice, typically served with a dash of milk, cream or sweetener—iced coffee is really as simple as that.",
        "ingredients": [
            "Coffee",
            "Ice",
            "Sugar*",
            "Cream*"
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg",
        "id": 1
    },]
    ```

## Setup and Installation

- **React Application**: [Guide](frontend/README.md)
- **Django Backend**: [Guide](backend/README.md)

## Deployment

- **React Application**: Built and deployed to AWS S3. Served through AWS CloudFront for CDN.  [Read more](frontend/README_DEPLOYMENT.md)
- **Django Backend**: Deployed on AWS EC2, served using Gunicorn and Nginx for optimal performance. [Read morre](backend/README_DEPLOYMENT.md)

## Set up AWS CloudFront for CDN
- [Guide](backend/README_CLOUDFRONT_SETUP.md)
  

