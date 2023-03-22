FROM node:18-alpine

# set work directory
WORKDIR /quizardhq-frontend

# copy package.json and yarn.lock
COPY package.json yarn.lock ./

# install and cache app dependencies
RUN yarn install

# copy source code
COPY . .

# start the development server
CMD ["yarn", "dev"]