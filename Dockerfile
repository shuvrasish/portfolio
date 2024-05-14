# Use the official Node.js image as base
FROM node:16-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Create a file named .env and add content
RUN echo "NEXT_PUBLIC_KEY_GOOGLE_API=your API key" >> .env
RUN echo "NODE_ENV=Production" >> .env
RUN echo "NEXT_PUBLIC_BLACKLIST_COUNTRIES=''">> .env

# Build the Next.js app
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["yarn", "start"]
