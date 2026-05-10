# Stage 1: Build the React application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
# Copy built files from stage 1 to Nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html
# For Create React App, use /app/build instead of /app/dist
EXPOSE 5110
CMD ["nginx", "-g", "daemon off;"]
