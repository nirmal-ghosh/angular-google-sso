# Stage 1: Build Angular application
FROM node:alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN npm install -g @angular/cli && npm install && ng build

# Stage 2: Serve Angular application using Nginx
FROM nginx:alpine

COPY --from=builder /usr/src/app/dist/my-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
