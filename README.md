# demoup
This is an assignment provided by Demoup-cliplister.
# ScaleHoster Microservices Architecture

Welcome to the ScaleHoster microservices architecture project. This project showcases a microservices-based solution designed to fulfill the business purposes of ScaleHoster Inc. The architecture addresses the requirements of inserting and retrieving images, and it serves as a demonstration of architectural design, data modeling, and documentation skills.

## Project Overview

The application consists of several microservices, each serving a specific purpose:

1. **CategoryService**
   - Responsible for handling operations related to image categories.
   - Port: 3001

2. **AssetService**
   - Manages the insertion of images into the platform, including downloading resources, processing images, and generating public URLs.
   - Port: 3000

3. **RetrieveImageService**
   - Retrieves images and handles asynchronous processes for providing public image URLs.
   - Port: 3002

4. **EventBus**
   - Manages communication between microservices. Note: In a production environment, this service would typically be a message queue like RabbitMQ or a Kafka stream.
   - Port: 3005

5. **MongoDB**
   - A database service for storing assets and categories.
   - Port: 27017

## Running the Application

To run the application in development mode, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project root directory:

   ```bash
   cd <project_directory>
   ```

3. Run the Docker Compose file:

   ```bash
   docker-compose up
   ```

   This will start all the services defined in the `docker-compose.yml` file.

## Task Fulfillment https://miro.com/app/board/uXjVNy3chQk=/?share_link_id=358394795065

### 1. Service Units Design

Service units have been designed based on the requirements, including `CategoryService`, `AssetService`, `RetrieveImageService`, and `EventBus`.

### 2. Data Storage Modeling

Conceptual data storage for millions of assets and categories is implemented within their bounded contexts in a microservices-oriented architecture. Distinction between read and write optimized models is considered.

### 3. Sequence Diagrams

Sequence diagrams illustrating the flows of inserting and getting images with relevant domain events have been created. The diagrams also include fault-tolerant mechanisms.

### 4. Solution Justification

Rejected solutions are justified based on scalability, maintainability, and performance concerns. The chosen architecture aligns with microservices best practices.

### 5. Bonus: Read-Optimized Data Model

An additional architecture for a read-optimized data model is provided, addressing the need for efficient retrieval of image-related information.

## Conclusion

This microservices architecture project demonstrates a scalable, fault-tolerant, and maintainable solution for ScaleHoster Inc. It serves as a foundation for further development and refinement based on specific business needs.

Feel free to explore the code, diagrams, and configurations to gain a deeper understanding of the microservices architecture. If you have any questions or feedback, please don't hesitate to reach out.

Thank you for reviewing the ScaleHoster Microservices Architecture!
