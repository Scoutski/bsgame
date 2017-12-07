FROM node:alpine
MAINTAINER Shitty.Agency Devops <maelstroswim@gmail.com>

# we need these build tools to package up bcrypt, ugh
RUN apk --no-cache add --virtual builds-deps build-base python

COPY package.json package-lock.json /app/
WORKDIR /app

RUN NODE_ENV=null npm install

ADD . /app

EXPOSE 1337
CMD ["npm", "start"]
