# CS465 - Travlr Application


## Architecture

### Compare and contrast the types of frontend development you used in your full stack project

Express was used alongside handlebars to create the first iteration of the Travlr application. What started as a collection of static HTML pages, turned into a dynamic web application by using handlebars templates and javascript to display example data. The administrative page is a SPA and was created
using Angular. The administrative panel worked well as a SPA because a longer initial load time for an administrative dashboard is acceptable since in return the application runs quickly and feels more like a native application. Angular was more difficult to work with but offers powerful features and is less
reliant on middleware.

### Why did the backend use a NoSQL MongoDB database?

A MongoDB was selected because it pairs nicely with a javascript frontend. MongoDB stores records in BSON. Documents can be easily added to the database and the frontend can exchange information about objects in the database via JSON. NoSQL is a also chosen because no knowledge of SQL is required for developers
interacting with the database. While a relational database solution could have served the same purpose, MongoDB works well with the other technologies in the stack.

## Functionality

### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

Javascript object notation (JSON) is a language used to describe Javascript object. Javascript objects can be serialized and deserialized using JSON so they can be easily transferred or transmitted over a network or other communication medium. Data objects are stored and retrieved from the database in the form of JSON which 
the frontend can turn into Javascript objects. In the Travlr application, the backend is able to pass objects to the frontend using JSON while objects created on the frontend can be sent to the backend for storage in JSON form.

### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

Early in the development cycle, I refactored various pieces of the website that were displayed on multiple pages by turning them into individual components. For instance, the same header and footer appeared on every site in the initial static HTML implementation. Using handlebars templates, and later 
Angular components in the SPA, I was able to create a header and footer component and call those components from each page within the site. This benefits the orginization of the program by removing lots of duplicate code. Spending less time duplicating code translates to a quicker and more
efficient development cycle.

## Testing

### Methods for request and retrieval necessitate various types of API testing of endpoints, in addtion to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Endpoint testing is important and should be done prior to using API endpoints in your full stack application. You want to ensure that the API is functioning correctly before you try to start calling it from your application. When you run into an issue during testing the front end, you won't
know if the issue is the result of a bug in the frontend or the API itself. Dedicated programs like Postman can be used to verify API functionality. Security is important but it can interfere with testing the application. While an application should be designed with security in mind,
testing the application while security features are active makes it difficult to tell if issues are the result of security or a bug in the application. Testing the application will be easier while security features that might interfere with the testing are turned off.

## Reflection
### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

I learned valuble skills such as working with a database, creating an API, and creating and managing a SPA. I also learned alot about how to fix deprecated code and debugging along the way. Using these skills together empowers me to work on both frontend and backend development 
and will help me feel more comfortable in both development roles. There are many pieces that come together to create a full-stack applicatoin. Managing data, designing and implementing a user interface, and creating a testing an API that connects the client side to the server side are all 
imporant pieces of creating a web applciation. The various pieces work together to create an application that can be viewed and interacted with from any device that has a modern web browser. While some developers may choose to specialize in one aspect of development, having experience 
in both means I can be more versatile in my career as a software developer.
