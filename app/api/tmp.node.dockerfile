ARG NODE_VERSION

FROM node:${NODE_VERSION} as development

RUN apk update && apk add git && \
    npm i -g @nestjs/cli

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . ./

# add user and add group

# CMD [ "npm", "run", "start:dev"]
