# Use the official Node.js 14 image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port that your Express application is listening on
EXPOSE 9000

# Start the Express application
CMD [ "npm", "run", "dev" ]