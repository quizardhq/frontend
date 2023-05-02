FROM node:18-alpine

# set work directory
WORKDIR /quizardhq-frontend

# copy package.json and yarn.lock
COPY package.json yarn.lock ./

# install and cache app dependencies
RUN yarn install

# copy source code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 3000

# start the development server
CMD ["npm", "start"]