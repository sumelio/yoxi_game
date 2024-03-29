FROM node:8

#Setting the working directory as /app
WORKDIR /app

#Copying package.json to Docker Image
COPY package.json /app/package.json
COPY public /app/public

#Installing all dependencies.
RUN npm install

# Running the dev server.
CMD ["npm", "start"]
