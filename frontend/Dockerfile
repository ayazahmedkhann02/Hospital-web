FROM nginx:alpine

# Delete default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy frontend files
COPY . /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]