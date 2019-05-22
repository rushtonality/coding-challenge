FROM postgres:11.3

RUN apt-get update -y && apt-get install -y \
    pgloader 

# Add the pgloader file and the source csv
COPY ./import/* /docker-entrypoint-initdb.d/

# Add the scripts to initialize the database
COPY ./init/* /docker-entrypoint-initdb.d/
