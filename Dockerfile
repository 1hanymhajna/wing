FROM mhart/alpine-node:6.9.1

# Create the app folder
RUN mkdir -p /src/app
WORKDIR /src/app

# Copy the files and install app dependencies
COPY package.json /src/app/
COPY app/ /src/app/
RUN npm install --production


COPY deployment/docker-entrypoint.sh /src/app
RUN chmod 755 /src/app/docker-entrypoint.sh

ENTRYPOINT ["./docker-entrypoint.sh"]