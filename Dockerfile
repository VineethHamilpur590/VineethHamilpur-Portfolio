# Use the official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory to /app
WORKDIR /app

# Install git
RUN apk add --no-cache git

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Audit fix npm packages
RUN npm audit fix

# Bundle app source
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
