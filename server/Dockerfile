FROM ubuntu:latest

RUN apt-get update -y \
    && apt-get install nodejs -y \
    && apt-get install npm  -y
    
ENV API_HOST http://localhost:4200

RUN mkdir -p usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install 

EXPOSE 4200

CMD ["npm", "start"]