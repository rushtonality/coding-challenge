# Coding Challenge

## Specification

### Summary
-	Create a new Node.js project.
-	Pick one that you prefer
    -	Create the data model based on the import.csv file
    -	Create the data model based on Hacker News article format: https://github.com/HackerNews/API
-	Import the data from the preferred source into the database
-	Use any db you like (for sql preferable MySQL or PostgresSQL, for no-sql preferable Mongo)
-	Expose the data model through the API endpoints in the REST format
-	Create the frontend using React. Feel free to use any boilerplate (we suggest create-react-app)
-	Fetch the data from the API and fill the table and forms
-	Feel free to use Redux and Redux Form, Redux Table, whatever works for you

### Submission
-	GitHub public repository
    -	repository MUST have README.md which will contain:
    -	Instructions how to run the applications

### What's going to be checked
1.	Is app working?
2.	Code organization (formatting, structure etc.)
3.	Patterns (if any)
4.	Performance

### Bonus
1.	Write unit tests both for front-end and backend application
2.	Divide the whole coding challenge into the smaller tasks
    1.	Each task should have unique identifier, examples:
        1.	Task: Initiate the node.js framework - TA01
        2.	Task: Define routes - TA02
    1.	Submit the list of the task as a part of README.md on GitHub
3.	Styling of the front-end application needs to be present (use reactstrap or any desired framework)
4.	Build validation and user-friendly error messages, for each route
5.	API services use an authentication mechanism


## Tasks
- TA01: Create Empty Project Skeleton (complete)    
- TA02: Create Docker container for PostgreSQL (complete)
    - Decided to use PostgreSQL for the database since that is what I understand the the team is using.
- TA03: Load CSV file as text to look for variation (complete)
    - Initially tried to use the COPY command from PostgreSQL, but it could not handle escaped newlines, so I switch to the pgloader utility that can handle this.
- TA04: Add Date Parsing while loading CSV File (complete)
    - The dates were in several different formats.  If this were a production problem instead of a one off, I would create a script or program to standardize the dates.  Instead for this project I decided to load the data as text and then parse the dates with a query using regular expressions.
- TA05: Create initial express server with node (complete)
    - I have not used a generator before, but after looking into express-generator that is from express, I decided that it gave a good framework.
        ```
            npm install express-generator -g
            express --no-view --git -f
        ```
- TA06: Add database functionality with tests (complete)
    - I decided to do direct database calls instead of using and ORM like Sequelize.
    - At this point I also decided to use Jest as a testing framework, mainly because it is already the default for React projects.
- TA07: Add Service Layer for data access with tests
- TA08: Add Controllers with tests
- TA09: Wire together routes and controllers
- TA10: Add CORS support for Endpoints
- TA12: Create Skeleton React Project
- TA13: Adding Routing with empty pages
- TA14: Add Redux plumbing
- TA15: Add datatable on landing page
- TA16: Add links to edit article from datatable
- TA17: Add edit article component
- TA18: Add add article component
- TA19: Add Simple token validation for Endpoints
- TA20: Add Simple token to React side
- TA21: Add Simple bootstrap styling



