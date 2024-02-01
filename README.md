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
   git clone https://github.com/abuAbdullahkfp/demoup.git
   ```

2. Navigate to the project root directory:

   ```bash
   cd demoup
   ```

3. Run the Docker Compose file:

   ```bash
   docker-compose up
   ```

   This will start all the services defined in the `docker-compose.yml` file.

## Task Fulfillment https://miro.com/app/board/uXjVNy3chQk=/?share_link_id=358394795065

### 1. Microservices Design:

#### Service Units:
1. **AssetService:**
   - Handles the insertion of images.
   - Downloads the resource from the provided URL.
   - Processes the image, extracts metadata.
   - Stores the image and generates a public URL.

2. **CategoryService:**
   - Manages the categories for images.

3. **FetchService:**
   - Manages the asynchronous process of image insertion.
   - Provides the public image URL to the customer.

#### Bounded Contexts:
- **AssetService Bounded Context:**
  - Manages the lifecycle of assets, including image processing and storage.
  
- **CategoryService Bounded Context:**
  - Manages the categorization of images.

- **FetchService Bounded Context:**
  - Manages the asynchronous process of image insertion and public URL retrieval.

### 2. Conceptual Data Storage:

#### AssetService Bounded Context:
- **Write-Optimized Model:**
  - **Assets Table:**
    - Columns: asset_id, download_url, processed_image, metadata, category_id, created_at.
- **Read-Optimized Model (Pro Task):**
  - **Assets ByCategory View:**
    - Columns: category_id, asset_id, public_url, created_at.

#### CategoryService Bounded Context:
- **Categories Table:**
  - Columns: category_id, categories.

### 3. Sequence Diagram:

#### Inserting Images:
1. Customer -> AssetService: Insert Image Request (download_url, category)
2. AssetService -> FetchService: Process Image (asynchronous)
3. retrieveService -> Customer: Public Image URL

#### Getting Images:
1. Customer -> AssetService: Get Image Request (asset_id)
2. AssetService -> Customer: Public Image URL

### Fault Tolerance:
- Use message queues for communication between microservices to handle asynchronous processes robustly.
- Implement retry mechanisms for failed operations.
- Use idempotent operations to ensure the system's stability in case of failures.

### 4. Justification:

#### Rejected Solutions:
- **Monolithic Architecture:**
  - Rejected due to scalability issues and difficulty in maintaining and updating.
  
- **Direct Synchronous Communication:**
  - Rejected as it might lead to performance issues and potential downtime.

### 5. Bonus: Read-Optimized Data Model:

#### AssetService Bounded Context (Read-Optimized Model):
- **Assets ByDate View:**
  - Columns: created_at, asset_id, public_url.

This additional view allows efficient retrieval of images based on the creation date, optimizing read operations for scenarios where chronological access is common.
