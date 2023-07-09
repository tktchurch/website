# Stage 1: Build the Next.js application
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Create a lightweight production image
FROM node:20-alpine3.17

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=build /app/.next ./.next
COPY public ./public

EXPOSE 8080

CMD ["npm", "start"]
