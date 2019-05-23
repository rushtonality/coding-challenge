FROM nginx:stable

RUN apt-get update -y && apt-get install -y \
    curl 

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

RUN apt-get -y install build-essential nodejs

RUN npm install yarn -g

COPY ./ /react-ui

WORKDIR /react-ui

RUN npm install

RUN yarn build

RUN mkdir -p /var/www/

RUN rm -rf /var/www/*

RUN cp -a build/* /var/www/

CMD ["nginx", "-g", "daemon off;"]