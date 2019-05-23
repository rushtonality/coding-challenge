FROM httpd:2.4

RUN apt-get update -y && apt-get install -y \
    curl 

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

RUN apt-get -y install build-essential nodejs

RUN npm install yarn -g

COPY ./ /react-ui

WORKDIR /react-ui

RUN npm install

RUN yarn build

RUN rm -rf /usr/local/apache2/htdocs/*

RUN cp -a build/* /usr/local/apache2/htdocs/ 
