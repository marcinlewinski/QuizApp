FROM node:18-alpine
WORKDIR /src/app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "start"]