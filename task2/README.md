
# HNGX TASK TWO

This REST API allows you to perform CRUD operations on a "user resource". You can create, read, update, and delete user records.The API is built using node js ,Express js  and MongoDB 


## Prerequisites
These are the neccessary requirements that is needed  to be  met:
 - **Node.js:** Make sure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
-  **MongoDB:** Install and run MongoDB on your system. You can download MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community).
- **Postman:** You can use Postman to test the API endpoints. You can download Postman from [postman.com](https://www.postman.com/).
## API Endpoints

### Create a New Person (POST)
- Endpoint: /api
- Method: POST
- Request Body: JSON object with name and hobby fields. e.g { "name": "lawal toheeb" }
- Response: Details of the newly created person, including the custom id.
### Fetch a Person by ID (GET)
- Endpoint: /api/{user_id} (Replace {user_id} with the ID of the person you want to retrieve.)
- Method: GET
- Response: Details of the person with the specified ID, excluding "__v" and default "_id."
### Fetch a Person by Name (GET)
- Endpoint: /api?name={name} (Replace {name} with the name of the person you want to retrieve.)
- Details of the person with the specified name.
### Update a Person by ID (PUT)
- Endpoint: /api/{user_id} (Replace {user_id} with the ID of the person you want to update.)
- Request Body: JSON object with the updated name and hobby fields. e.g { "name": "Updated Name", "lawal": "Updated lawal" }
- Response: Updated details of the person with the specified ID.
### Delete a Person by ID (DELETE)
- Endpoint: /api/{user_id} (Replace {user_id} with the ID of the person you want to delete.)
- Method: DELETE
- Response: A message indicating that the person was deleted successfully.
Also there are error handling cases like trying to get or delete a non exisiting user, among other checks.
## Troubleshooting 
- If you encounter any issues, check the console for error messages. Ensure MongoDB is running and the connection URI in the .env file is correct.
- Make sure you have installed all the dependencies using "npm  install.
