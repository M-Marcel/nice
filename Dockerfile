# Step 1: Use Node.js image to build the app
FROM node:22-alpine AS build

WORKDIR /app

# Accept env vars during build
ARG REACT_APP_ENV
ARG REACT_APP_BASEURL

# Set them so CRA can use them
ENV REACT_APP_ENV=$REACT_APP_ENV
ENV REACT_APP_BASEURL=$REACT_APP_BASEURL

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve with a lightweight web server (Nginx)
FROM nginx:stable-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to nginx folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 3000 and start Nginx
EXPOSE 3300
CMD ["nginx", "-g", "daemon off;"]
