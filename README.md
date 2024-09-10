
Task 3.1 ---
In this Exercise, you learned the component-based architecture of React. You also explored the ins and outs of the build process, beginning with a look at some operations that are common to all build processes, including transpilation, minification, bundling, and auto-prefixing. You then learned how parts of the build process can be expedited using individual tools, notably Babel for transpiling, before examining what the build process would look like for an app such as myFlix.
Next, you took an in-depth look at the web app bundler Parcel, and how to configure it to build your myFlix app.


Tips:
The myflix app code will sync with the cloud instance(Netlify) when the changes are synced Github in the cloud.
To test code locally for myflix app, make code changes and run the command -> parcel src/index.html  , this will generate a https://localhost link which can be tested in browser. Once the changes are confirmed, it can be saved to Github, which would automatically sync with Netlify in the cloud too.

Project Context 
--------------
Client-side development hasn’t always been so prominent. In the past, pages would be generated on
the server-side and sent to the browser, resulting in a poor user experience. Thanks to modern
browsers and libraries such as React, the client-side of an app is today considered to be just as
important as the server-side. Full-stack developers need to be well-versed in both server-side and
client-side development.
In the previous Achievement, you built the server-side for a movie app called myFlix. The API and
database that you built meet the information needs of myFlix users. Now, you need to create the
interface they’ll use when making requests to—and receiving responses from—the server-side. The
client-side of your myFlix app will include several interface views (built using the React library) that will
handle data through the (previously defined) REST API endpoints.
The code you write impacts both your users and your fellow developers. As you work through this
Achievement, you’ll need to consider, among other things, the readability and maintenance of your
codebase, and the design and usability of your app.
By the end of the Achievement, you’ll have a complete web app (client-side and server-side) built using
full-stack JavaScript technologies, which you can then showcase in your portfolio. This project will
demonstrate your mastery of full-stack JavaScript development. The complete tech stack you’ll
master is known as the MERN (MongoDB, Express, React, and Node.js) stack.


Design Criteria
User Stories
● As a user, I want to be able to access information about movies so that I can learn more
about movies I’ve watched or am interested in.
● As a user, I want to be able to create a profile so I can save data about my favorite movies.
Features & Requirements
The following feature requirements were extracted from the user stories just listed. Please note, your
project will only be approved if the following essential feature requirements are implemented in your
Achievement project.
Essential Views & Features:
Main view
● Returns ALL movies to the user (each movie item with an image, title, and description)
● Filtering the list of movies with a “search” feature
● Ability to select a movie for more details
● Ability to log out
● Ability to navigate to Profile view

Single Movie view
● Returns data (description, genre, director, image) about a single movie to the user
● Allows users to add a movie to their list of favorites
Login view
● Allows users to log in with a username and password
Signup view
● Allows new users to register (username, password, email, date of birth)
Profile view
● Displays user registration details
● Allows users to update their info (username, password, email, date of birth)
● Displays favorite movies
● Allows users to remove a movie from their list of favorites
● Allows existing users to deregister

Technical Requirements
● The application must be a single-page application (SPA)
● The application must use state routing to navigate between views and share URLs
● The application must give users the option to filter movies using a “search” feature
● The application must use Parcel as its build tool
● The application must be written using the React library and in ES2015+
● The application must use Bootstrap as a UI library for styling and responsiveness
● The application must contain function components
● The application must be hosted online
● The application may use React Redux for state management of at least one feature (i.e.,
filtering movies)