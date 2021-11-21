# pull official base image
FROM node:15.14.0-alpine3.10 as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

# build app
RUN npm run build --production

# run nginx
FROM nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for HTTP Traffic
EXPOSE 80

# start the nginx web server
CMD ["nginx", "-g", "daemon off;"]