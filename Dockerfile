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
# FROM nginx:stable-alpine
# FROM ubuntu
# RUN apt-get update && apt-get install -y nginx

# Remove default nginx website
# RUN rm -rf /usr/share/nginx/html/*

# Copy build output to nginx folder
# COPY --from=build /app/build /var/www/html/

FROM nginx:alpine

# Copy nginx config file
# COPY default.conf /etc/nginx/sites-available/default
COPY --from=builder /app/build /usr/share/nginx/html

# Create a symlink to enable the site
# RUN ln -sf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
RUN echo 'server { \
    listen 5174; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location = /favicon.ico { access_log off; log_not_found off; } \
    location = /robots.txt  { access_log off; log_not_found off; } \
    location ~* \.(?:css|js|jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$ { \
        expires 1M; \
        access_log off; \
        add_header Cache-Control "public"; \
    } \
    error_page 404 /index.html; \
}' > /etc/nginx/conf.d/default.conf


# Expose port 5174 and start Nginx
EXPOSE 5174
CMD ["nginx", "-g", "daemon off;"]
