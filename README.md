# Coding Challenge

## Instructions to Run

To minimize issues running this on different machines. PostgreSQL configuration is not trivial and I am using pgload to load the data. I decided to use docker and docker-compose to build the components of this project to minimize environment issues.  

```bash
git clone https://github.com/rushtonality/coding-challenge.git

cd coding-challenge

docker-compose build

docker-compose up
```

The build command above will take a while.

Then navigate to http://localhost:6200

To remove the containers, hit CTRL-C to stop the containers. and then run the following in the same directory as above. 

```bash
docker-compose down
```

## Things not completed
- React Unit Testing
- Clean up npm warnings
- Better error handling
- Improved logging in express server
- Add basic token security for services
- Add date handling
- Add filtering

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
- TA07: Add Service Layer for data access with tests (complete)
- TA08: Add Controllers with tests (complete)
- TA09: Wire together routes and controllers (complete)
- TA10: Add CORS support for Endpoints (complete)
- TA11: Create Skeleton React Project (complete)
- TA12: Adding Routing with empty pages (complete)
- TA13: Add Redux plumbing (complete)
- TA14: Add article listing on landing page (complete)
- TA15: Add links to edit article from listing
- TA16: Add edit article component (complete)
- TA17: Add add article component (complete)
- TA18: Add Simple token validation for Endpoints
- TA19: Add Simple token to React side
- TA20: Add Simple bootstrap styling (complete)
- TA21: Refactor express server testing (complete)
- TA22: Dockerize Application (complete)
- TA23: Form Validation (complete)
- TA24: Cleanup (complete)
- TA25: React testing
