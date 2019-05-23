FROM httpd:2.4

COPY ./ /react-ui

RUN apt-get update -y && apt-get install -y \
    curl 

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

RUN apt-get -y install build-essential nodejs

RUN npm install yarn -g

WORKDIR /react-ui

RUN yarn build

RUN cp -a build/* /usr/local/apache2/htdocs/ 
