FROM mhart/alpine-node:latest

MAINTAINER Your Name <you@example.com>

# Create app directory
RUN mkdir -p /uouforum
WORKDIR /uouforum

# Install app dependencies
COPY package.json /uouforum
RUN npm install pm2 -g
RUN npm install

# Bundle app source
COPY target/release/uouforum.js /uouforum/uouforum.js
COPY public /uouforum/public

ENV HOST 0.0.0.0

EXPOSE 3000
CMD [ "pm2-docker", "/uouforum/uouforum.js" ]
