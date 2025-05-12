# Stage 1: build the React app
FROM node:22-alpine AS builder
WORKDIR /app

# Accept env vars during build
ARG REACT_APP_ENV
ARG REACT_APP_BASEURL

# Expose them to Create React App
ENV REACT_APP_ENV=$REACT_APP_ENV
ENV REACT_APP_BASEURL=$REACT_APP_BASEURL

# Install dependencies and build
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: serve with Nginx
FROM nginx:alpine

# Copy build artifacts from the "builder" stage
COPY --from=builder /app/build /usr/share/nginx/html

# Remove default config and deploy custom server block
RUN rm /etc/nginx/conf.d/default.conf
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location = /favicon.ico { access_log off; log_not_found off; } \
    location = /robots.txt  { access_log off; log_not_found off; } \
    location ~* \\.(?:css|js|jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$ { \
        expires 1M; \
        access_log off; \
        add_header Cache-Control "public"; \
    } \
    error_page 404 /index.html; \
}' > /etc/nginx/conf.d/default.conf

# Expose port 80 and run Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]