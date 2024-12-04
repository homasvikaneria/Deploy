# Step 1: Build the React app using the official Node.js image
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the Vite app for production
RUN npm run build

# Step 2: Serve the app using a lightweight web server (nginx)
FROM nginx:alpine

# Copy the build folder from the previous image to the nginx public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to be able to access the app from the browser
EXPOSE 80

# Run nginx in the foreground (the default command in the nginx image)
CMD ["nginx", "-g", "daemon off;"]
