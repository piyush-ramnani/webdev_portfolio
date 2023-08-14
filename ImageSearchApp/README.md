IMAGE SEARCH APPLICATION

Welcome to the Image Search Application README! This document will guide you through the architecture and usage of the web application that utilizes the Unsplash API to fetch and display images based on user search queries.

OVERVIEW:

The Image Search Application is a simple web app that allows users to search for images using keywords. The application uses the Unsplash API to retrieve a list of relevant images and displays them to the user. This application is built using HTML, CSS, and JavaScript.
Files and Directory Structure

The application consists of three main files:

# index.html: This is the main HTML file that defines the structure of the web page. It contains the search input field, search button, and a container to display the search results.

# style.css: The CSS file that styles the appearance of the application. It defines the layout, colors, and visual aspects of the application.

# script.js: The JavaScript file responsible for fetching images from the Unsplash API and updating the DOM to display the results. It handles user interactions and performs API requests.

USAGE:

Getting Started: Clone or download the repository to your local machine.

- API Access: To use the Unsplash API, you need an access key. You can get your access key by signing up on Unsplash and creating an application.

- Setting Up: Open the script.js file and replace the accessKey variable with your Unsplash access key.

- Running the Application: Open the index.html file in a web browser. You'll see a search input field and a "Search" button. Enter a keyword (e.g., "nature," "city," etc.) in the input field and click the "Search" button.

- Viewing Results: The application will display a grid of images related to the entered keyword. Clicking on an image will open the image in a new tab with more details on Unsplash.

- Load More: If available, the "Load More" button will appear at the bottom of the page. Clicking this button will fetch more images related to the current keyword.

ARCHITECTURE

The application follows a simple architecture:

- HTML: Defines the structure of the web page and includes the search input and results container.

- CSS: Styles the page elements to provide a visually appealing and responsive layout.

- JavaScript (script.js): Handles user interactions, makes API requests to Unsplash, and updates the DOM to display images.

RESOURCES

* Unsplash API Documentation
* Unsplash Developer Portal
* Youtube - Sheryians coding school

CONCEPTS USED:

DOM (Document Object Model) is used to manipulate HTML objects.
These objects can be grabbed either by HTML id and class OR css selector name.

The fetch() function is used to make HTTP requests to the Unsplash API with the help of the url link defined above, that contains all the data like page, query and client ID. It returns a Promise that resolves to the response from the server, which is then processed with the response.json() function.

fetch return Promises, and await is used to wait for the Promise to resolve before continuing with the code execution. Otherwise the result might appear in the pending state in the DOM.


--ISSUES--
#load more button doesn't always appear
#It should be able to load infinite more images
#Gaps in between the images


--REMAINING TASKS--
* Add background toggler
* Add watermark

Feel free to explore, modify, and enhance the application according to your needs. After modifying the application, please make sure to edit this Readme file and omit the Issues section that you might have solved.

Happy coding!

Note: This application is created for educational purposes and is not intended for production use, and this Readme file is written with the Help of ChatGPT. 