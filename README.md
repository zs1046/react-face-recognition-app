## Face Recognition App

[Test face recognition app here!](https://facial-recognition-frontend.herokuapp.com/)

This application uses the PERN stack and uses an API from Clarifai to detect faces on a picture. It can register new users and store them to a database so they can login whenever. The Front end is connected to the Node+Express.js backend server and the server handles the HTTP requests from the front end and interacts with postgreSQL Heroku database based off of those requests such as registering new users and checking login information to allow or deny access to the user. The server can be found [here] (https://github.com/zs1046/ServerAPI). All three components are running on Heroku. More work to be done.

Work needed:
- Add detection for multiple faces
- Fix background

