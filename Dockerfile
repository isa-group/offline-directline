# base image
FROM node:14

# create app directory
WORKDIR /app

# bundle app source
COPY . .

# install dependencies
RUN npm install

# build from source
RUN npm run build; exit 0

# expose port 3001
EXPOSE 3001

# run offline-directline
CMD [ "npm", "run", "directline" ]
