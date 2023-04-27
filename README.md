The API should allow users to perform CRUD
(Create, Read, Update, Delete) operations on person objects. Each person
object should have the following attributes:
• id: A unique identifier for the person object.
• name: The name of the person.
• age: The age of the person.
• gender: The gender of the person.
• email: The email address of the person.

API Specification
The RESTful API should have the following endpoints:
• GET /persons: Retrieve a list of all person objects.
• POST /persons: Create a new person object.
• GET /persons/{id}: Retrieve a specific person object by its ID.
• PUT /persons/{id}: Update a specific person object by its ID.
• DELETE /persons/{id}: Delete a specific person object by its ID.

A Docker image containing the RESTful API code and its dependencies.
You should then run a container from this
Docker image to verify that the API is working correctly. Your submission
should include the following:
• The Dockerfile used to build the Docker image.
• The RESTful API code.
• Documentation on how to run and test the Docker container locally.
