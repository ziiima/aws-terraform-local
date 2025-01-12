ARG NODE_VERSION

# On Prod add user and 

FROM node:${NODE_VERSION} as development

RUN apk update && apk add git && \
    npm i -g @nestjs/cli

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . ./

# CMD [ "npm", "run", "preview"]