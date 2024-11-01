# Use an official Node runtime as a base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN yarn install
RUN yarn build
# Copy the application code to the working directory
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["serve", "-s", "build"]

